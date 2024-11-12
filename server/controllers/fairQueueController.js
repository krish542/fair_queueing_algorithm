let queues = [];

exports.addUserQueue = (req, res) => {
  const { user, packets, interval } = req.body;
  queues.push({ user, packets: Array(packets).fill(0), interval });
  res.json({ message: 'User queue added', queues });
};

exports.transmitPackets = (req, res) => {
  const results = [];
  let time = 0;
  while (queues.some(queue => queue.packets.length > 0)) {
    queues.forEach(queue => {
      if (queue.packets.length > 0) {
        results.push({
          user: queue.user,
          packet: queue.packets.shift(),
          latency: time,
          throughput: queue.packets.length / (time + 1),
          fairness: 1 / queues.length,
        });
        time += queue.interval;
      }
    });
  }
  res.json({ results });
};
