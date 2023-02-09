module.exports = function check(str, bracketsConfig) {
  const open = new Map(bracketsConfig);
    const close = new Map(bracketsConfig.map(it => it.slice().reverse()));
    const refs = [];
    if (!str) {
        return false;
    }

    const [start, ...rest] = str;
    if (!open.has(start) || !rest.slice(-1).some(Map.prototype.has.bind(close))) {
        return false;
    }

    for (const item of str) {
        if (close.has(item) && refs.slice(-1).includes(close.get(item))) { 
            refs.pop();
        } else if (open.has(item)) {
            refs.push(item);
        } else {

            return false;
        }
    }
    return !refs.length;
}
