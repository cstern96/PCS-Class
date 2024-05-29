namespace Shirts
{
    internal class ShirtFactory
    {
        // I used more like 45 minutes just because I haven't used c# in a while and I had to familiarize myself with it again.
       // Also, I know that the best form is that nothing is supposed to be in main I just couldn't figure out how to do it in another class in the time given.
        static void Main(string[] args)
        {
            string[] color = { "red", "green", "blue" };
            string[] pattern = { "striped", "checked", "plain" };

            for (int i = 0; i < 3; i++)
            {
                for (int j = 0; j < 3; j++)
                {
                    new Shirt(color[i], pattern[j]);
                    Console.WriteLine($" {color[i]} : {pattern[j]}");
                }
            }
        }
    }
}