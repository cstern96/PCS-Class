using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shirts
{
    public class Shirt
    {
        public string ShirtColor { get; set; }
        public string ShirtPattern { get; set; }

        public Shirt(string shirtColor, string shirtPattern)
        {
            this.ShirtColor = shirtColor;
            this.ShirtPattern = shirtPattern;
        }
    }
}
