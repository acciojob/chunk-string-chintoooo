function chunkString(str, chunkLength) {
  // Handle null or undefined string
  if (str === null || str === undefined) return [];

  // Ensure it's a string (in case it's a number or something else)
  str = String(str);

  const result = [];

  // Iterate over the string in steps of chunkLength
  for (let i = 0; i < str.length; i += chunkLength) {
    const chunk = str.slice(i, i + chunkLength); // grab the chunk
    result.push(chunk);
  }

  return result;
}
