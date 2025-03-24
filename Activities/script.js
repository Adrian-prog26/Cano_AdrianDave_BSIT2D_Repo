function WhatShallWear (temp) {
    if (temp < 60) {
        console.log("Wear a jacket");
    } else if (temp < 70) {
        console.log("Wear a sweater");
    }else {
        console.log("Wear a t-hirt");
    }
}

// Exmple calls
WhatShallWear(50);
WhatShallWear(65);
WhatShallWear(80);