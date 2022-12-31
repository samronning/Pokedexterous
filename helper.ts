function padNumberZeroes(num: number, size: number) {
  var s = "000000000" + num;
  return s.substring(s.length - size);
}
export { padNumberZeroes };
