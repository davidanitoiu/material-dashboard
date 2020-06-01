const times = (n) => Array.apply(null, new Array(n));

export default [
  {
    "color": "green",
    "colorVariant": "light",
    "graph": {
      "data": {
        "labels": ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10"],
        "series": [[1, 2, 4, 8, 6, -2, -1, -4, -6, -2]]
      },
      "options": {
        "high": 10,
        "low": -10,
        "axisX": {
          "labelInterpolationFnc": (value, index) => index % 2 === 0 ? value : null
        }
      },
      "type": "Bar"
    },
    "action": {
      "type": "text",
      "icon": "far fa-clock",
      "label": "Last 24 hours"
    }
  },
  {
    "color": "amber",
    "colorVariant": "light",
    "graph": {
      "data": {
        "labels": ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10"],
        "series": [[1, 2, 4, 8, 6, -2, -1, -4, -6, -2]]
      },
      "options": {
        high: 3,
        low: -3,
        showArea: true,
        showLine: false,
        showPoint: false,
        axisX: {
          showLabel: false,
          showGrid: false
        }
      },
      "type": "Line"
    },
    "action": {
      "type": "text",
      "icon": "far fa-clock",
      "label": "Last 24 hours"
    }
  },
  {
    "color": "red",
    "colorVariant": "light",
    "graph": {
      "data": times(352).map(Math.random).reduce((data, rnd, index) => {
        data.labels.push(index + 1);
        data.series.forEach((series) => {
          series.push(Math.random() * 100)
        });

        return data;
      }, {
        labels: [],
        series: times(4).map(() => [])
      }),
      "options": {
        "high": 10,
        "low": 0,
        "showLine": false,
          "axisX": {
          showLabel: false,
          showGrid: false
        }
      },
      "type": "Line"
    },
    "action": {
      "type": "text",
      "icon": "far fa-clock",
      "label": "Tracked from Github"
    }
  }
]
