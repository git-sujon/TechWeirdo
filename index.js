//  Express API 

app.get('/breadth-first-search/:startNodeId', (req, res) => {
  const startNodeId = req.params.startNodeId;

  // Perform a breadth-first search using a queue
  const queue = [startNodeId];
  const visited = new Set();
  while (queue.length > 0) {
    const currentNodeId = queue.shift();
    if (!visited.has(currentNodeId)) {
      visited.add(currentNodeId);

      // Find the current node in the collection
      const currentNode = db.collection('binary_tree').findOne({ _id: currentNodeId });
      console.log(currentNode.value);

      // Add the left and right children to the queue if they exist
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
  }

  res.send('Breadth-first search complete');
});




