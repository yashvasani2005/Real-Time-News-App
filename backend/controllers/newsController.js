import News from "../models/News.js";

export const getTrendingNews = async (req, res) => {
  try {
    const trending = await News.aggregate([
      { $sort: { views: -1, likes: -1 } },
      { $limit: 10 },
    ]);
    res.json(trending);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const postNews = async (req, res) => {
  try {
    const news = await News.create(req.body);
    res.status(201).json(news);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
