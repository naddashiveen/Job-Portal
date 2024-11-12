const express = require('express');
const Job = require('../models/Job');
const router = express.Router();

router.get('/', async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

router.post('/', async (req, res) => {
  const newJob = new Job(req.body);
  await newJob.save();
  res.status(201).json(newJob);
});

module.exports = router;
