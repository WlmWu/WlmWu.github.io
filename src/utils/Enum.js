const Enum = (descriptions) => {
  const result = {};
  Object.keys(descriptions).forEach((description) => {
    result[(result[description] = descriptions[description])] = description;
  });
  return Object.freeze(result);
};

export default Enum;
