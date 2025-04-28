// Function declaration
function calcAreaDecl(width, height) {
  return width * height;
}
console.log('Function declaration:', calcAreaDecl(5, 10));

// Function expression
const calcAreaExpr = function (width, height) {
  return width * height;
};
console.log('Function expression:', calcAreaExpr(5, 10));

// Arrow function
const calcAreaArrow = (width, height) => width * height;
console.log('Arrow function:', calcAreaArrow(5, 10));
