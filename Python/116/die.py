import random
class Die:
    def __init__(self, sides):
        self.sides = sides

    def roll(self):
        return random.randint(1, self.sides)

die1 = Die(6)
for i in range(10):
    print(f"Roll {i+1}: {die1.roll()}")