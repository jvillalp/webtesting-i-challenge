module.exports = {
  success,
  fail,
  repair,
  get
};

function success(item) {
  let newItem = {
    name: item.name,
    durability: item.durability,
    enhancement: item.enhancement + 1
  };
  if (item.enhancement >= 20) {
    newItem.enhancement = item.enhancement
  } 
  return newItem
}

function fail(item) {
  let newItem;
  if (item.enhancement < 15) {
    newItem = {
      ...item,
      durability: item.durability - 5
    };
  } else {
    newItem = {
      ...item,
      durability: item.durability - 10
    };

    if (item.enhancement > 16) {
      newItem.enhancement = newItem.enhancement - 1;
    }
  }
  return newItem;
}

function repair(item) {
  const newItem = {
    item: item.name,
    durability: 100,
    enhancement: item.enhancement
  };
  return newItem;
}

function get(item) {
  return { ...item };
}
