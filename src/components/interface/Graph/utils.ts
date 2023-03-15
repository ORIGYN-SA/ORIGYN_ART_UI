export const generateControlPoints = (curvature: number, p: Point[]) => {
  // given the points array p calculate the control points
  var pc = [];
  for (var i = 1; i < p.length - 1; i++) {
    var dx = p[i - 1].x - p[i + 1].x; // difference x
    var dy = p[i - 1].y - p[i + 1].y; // difference y
    // the first control point
    var x1 = p[i].x - dx * curvature;
    var y1 = p[i].y - dy * curvature;
    var o1 = {
      x: x1,
      y: y1,
    };

    // the second control point
    var x2 = p[i].x + dx * curvature;
    var y2 = p[i].y + dy * curvature;
    var o2 = {
      x: x2,
      y: y2,
    };

    // building the control points array
    pc[i] = [];
    pc[i].push(o1);
    pc[i].push(o2);
  }
  return pc;
};

type Point = {
  x: number;
  y: number;
};
