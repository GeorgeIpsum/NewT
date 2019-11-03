"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Tree = function Tree(canvasID, seed, stage, containerID) {
  var _this = this;

  _classCallCheck(this, Tree);

  _defineProperty(this, "seed", void 0);

  _defineProperty(this, "stage", void 0);

  _defineProperty(this, "canvas", void 0);

  _defineProperty(this, "board", void 0);

  _defineProperty(this, "interval", void 0);

  _defineProperty(this, "container", void 0);

  _defineProperty(this, "init", function () {
    _this.resize();

    window.addEventListener("resize", _this.resize, true);
  });

  _defineProperty(this, "resize", function () {
    if (_this.canvas && _this.container) {
      _this.canvas.width = parseFloat(window.getComputedStyle(_this.container).width);
      _this.canvas.height = parseFloat(window.getComputedStyle(_this.container).height);
    }
  });

  _defineProperty(this, "update", function () {});

  _defineProperty(this, "draw", function () {});

  _defineProperty(this, "reset", function () {
    if (_this.interval) clearInterval(_this.interval);
    window.removeEventListener("resize", _this.resize, true);

    _this.init();
  });

  this.canvas = document.getElementById(canvasID);

  if (this.canvas) {
    this.board = this.canvas.getContext("2d");
  } else {
    this.board = null;
  }

  this.container = document.getElementById(containerID);

  if (!this.container) {
    this.container = new HTMLDivElement();
  }

  this.interval = 0;
  this.seed = seed;
  this.stage = stage;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90cmVlLnRzIl0sIm5hbWVzIjpbIlRyZWUiLCJjYW52YXNJRCIsInNlZWQiLCJzdGFnZSIsImNvbnRhaW5lcklEIiwicmVzaXplIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImNvbnRhaW5lciIsIndpZHRoIiwicGFyc2VGbG9hdCIsImdldENvbXB1dGVkU3R5bGUiLCJoZWlnaHQiLCJpbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaW5pdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJib2FyZCIsImdldENvbnRleHQiLCJIVE1MRGl2RWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQU1BLEksR0FRSixjQUFZQyxRQUFaLEVBQThCQyxJQUE5QixFQUE0Q0MsS0FBNUMsRUFBd0RDLFdBQXhELEVBQTZFO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUEsZ0NBbUJ0RSxZQUFNO0FBQ1gsSUFBQSxLQUFJLENBQUNDLE1BQUw7O0FBQ0FDLElBQUFBLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsS0FBSSxDQUFDRixNQUF2QyxFQUErQyxJQUEvQztBQUNELEdBdEI0RTs7QUFBQSxrQ0F3QnBFLFlBQU07QUFDYixRQUFHLEtBQUksQ0FBQ0csTUFBTCxJQUFlLEtBQUksQ0FBQ0MsU0FBdkIsRUFBa0M7QUFDaEMsTUFBQSxLQUFJLENBQUNELE1BQUwsQ0FBWUUsS0FBWixHQUFvQkMsVUFBVSxDQUFDTCxNQUFNLENBQUNNLGdCQUFQLENBQXdCLEtBQUksQ0FBQ0gsU0FBN0IsRUFBd0NDLEtBQXpDLENBQTlCO0FBQ0EsTUFBQSxLQUFJLENBQUNGLE1BQUwsQ0FBWUssTUFBWixHQUFxQkYsVUFBVSxDQUFDTCxNQUFNLENBQUNNLGdCQUFQLENBQXdCLEtBQUksQ0FBQ0gsU0FBN0IsRUFBd0NJLE1BQXpDLENBQS9CO0FBQ0Q7QUFDRixHQTdCNEU7O0FBQUEsa0NBK0JwRSxZQUFNLENBRWQsQ0FqQzRFOztBQUFBLGdDQW1DdEUsWUFBTSxDQUVaLENBckM0RTs7QUFBQSxpQ0F1Q3JFLFlBQU07QUFDWixRQUFHLEtBQUksQ0FBQ0MsUUFBUixFQUFrQkMsYUFBYSxDQUFDLEtBQUksQ0FBQ0QsUUFBTixDQUFiO0FBQ2xCUixJQUFBQSxNQUFNLENBQUNVLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDLEtBQUksQ0FBQ1gsTUFBMUMsRUFBa0QsSUFBbEQ7O0FBRUEsSUFBQSxLQUFJLENBQUNZLElBQUw7QUFDRCxHQTVDNEU7O0FBQzNFLE9BQUtULE1BQUwsR0FBaUNVLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QmxCLFFBQXhCLENBQWpDOztBQUNBLE1BQUcsS0FBS08sTUFBUixFQUFnQjtBQUNkLFNBQUtZLEtBQUwsR0FBYSxLQUFLWixNQUFMLENBQVlhLFVBQVosQ0FBdUIsSUFBdkIsQ0FBYjtBQUNELEdBRkQsTUFFTztBQUNMLFNBQUtELEtBQUwsR0FBYSxJQUFiO0FBQ0Q7O0FBRUQsT0FBS1gsU0FBTCxHQUFpQ1MsUUFBUSxDQUFDQyxjQUFULENBQXdCZixXQUF4QixDQUFqQzs7QUFDQSxNQUFHLENBQUMsS0FBS0ssU0FBVCxFQUFvQjtBQUNsQixTQUFLQSxTQUFMLEdBQWlCLElBQUlhLGNBQUosRUFBakI7QUFDRDs7QUFFRCxPQUFLUixRQUFMLEdBQWdCLENBQWhCO0FBRUEsT0FBS1osSUFBTCxHQUFZQSxJQUFaO0FBQ0EsT0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0QsQyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFRyZWUge1xuICBzZWVkOiBzdHJpbmc7XG4gIHN0YWdlOiBhbnk7XG4gIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIGJvYXJkOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBudWxsO1xuICBpbnRlcnZhbDogbnVtYmVyO1xuICBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKGNhbnZhc0lEOiBzdHJpbmcsIHNlZWQ6IHN0cmluZywgc3RhZ2U6IGFueSwgY29udGFpbmVySUQ6IHN0cmluZykge1xuICAgIHRoaXMuY2FudmFzID0gPEhUTUxDYW52YXNFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhbnZhc0lEKTtcbiAgICBpZih0aGlzLmNhbnZhcykge1xuICAgICAgdGhpcy5ib2FyZCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ib2FyZCA9IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5jb250YWluZXIgPSA8SFRNTERpdkVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFpbmVySUQpO1xuICAgIGlmKCF0aGlzLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5jb250YWluZXIgPSBuZXcgSFRNTERpdkVsZW1lbnQ7XG4gICAgfVxuXG4gICAgdGhpcy5pbnRlcnZhbCA9IDA7XG5cbiAgICB0aGlzLnNlZWQgPSBzZWVkO1xuICAgIHRoaXMuc3RhZ2UgPSBzdGFnZTtcbiAgfVxuXG4gIGluaXQgPSAoKSA9PiB7XG4gICAgdGhpcy5yZXNpemUoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnJlc2l6ZSwgdHJ1ZSk7XG4gIH1cblxuICByZXNpemUgPSAoKSA9PiB7XG4gICAgaWYodGhpcy5jYW52YXMgJiYgdGhpcy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gcGFyc2VGbG9hdCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmNvbnRhaW5lcikud2lkdGgpO1xuICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gcGFyc2VGbG9hdCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmNvbnRhaW5lcikuaGVpZ2h0KTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGUgPSAoKSA9PiB7XG5cbiAgfVxuXG4gIGRyYXcgPSAoKSA9PiB7XG5cbiAgfVxuXG4gIHJlc2V0ID0gKCkgPT4ge1xuICAgIGlmKHRoaXMuaW50ZXJ2YWwpIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5yZXNpemUsIHRydWUpO1xuXG4gICAgdGhpcy5pbml0KCk7XG4gIH1cbn1cbiJdfQ==