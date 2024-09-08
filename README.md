<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bluey - Fictional Dog Object</title>
  <script>
    // Create myDog object using object literal syntax
    let myDog = {
      name: "Bluey",
      breed: "Australian Cattle Dog",
      show: "Bluey",
      description: "A female anthropomorphic 6-year-old blue heeler puppy. I am curious and energetic.",
      mySound: "I am always excited and curious. My bark is playful, just like me!",
      
      // Display method to describe the dog//
      describe: function() {
        return `Hello, my name is ${this.name}, I am an ${this.breed} from the show ${this.show}. ${this.description} When I bark, you can tell: ${this.mySound}`;
      }
    };

    // Create constructor function for myDogConst
    function Dog(name, breed, show, description, mySound, canTalk) {
      this.name = name;
      this.breed = breed;
      this.show = show;
      this.description = description;
      this.mySound = mySound;
      this.canTalk = canTalk;
      
      // Method to greet and describe the dog
      this.myGreeting = function() {
        return `Hi! I'm ${this.name}, an ${this.breed} from the show ${this.show}. ${this.description} Here's what I sound like: ${this.mySound}. Can I talk? ${this.canTalk ? 'Yes' : 'No'}.`;
      };
    }

    // Create an instance of myDogConst
    let myDogConst = new Dog(
      "Bluey", 
      "Australian Cattle Dog", 
      "Bluey", 
      "A female anthropomorphic 6-year-old blue heeler puppy. I am curious and energetic.", 
      "I am always excited and curious. My bark is playful, just like me!", 
      true
    );

    // Function to display the results
    function displayInfo() {
      document.getElementById("literalOutput").innerHTML = myDog.describe();
      document.getElementById("constructorOutput").innerHTML = myDogConst.myGreeting();
    }
  </script>
</head>
<body onload="displayInfo()">

  <h1>Fictional Dog: Bluey</h1>

  <h2>Object Literal Example</h2>
  <p id="literalOutput"></p>

  <h2>Constructor Example</h2>
  <p id="constructorOutput"></p>

</body>
</html>
