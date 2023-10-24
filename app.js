        // Initialize Firebase with your configuration
        const firebaseConfig = {
// EMPTY FOR PRIVACY REASONS!
        };
        firebase.initializeApp(firebaseConfig);

        // Initialize counter
        let counterValue = 0;

        // Reference to Firebase Realtime Database
        const counterRef = firebase.database().ref("incremental_counter");

        // Function to update the counter on the web page
        function updateCounter() {
            document.querySelector(".counter").textContent = counterValue;
        }

        // Function to increment the counter
        function incrementCounter() {
            counterValue++;
            updateCounter();
            counterRef.set(counterValue); // Update the value in the database
        }

        function ResetCounter() {
            console.log("Resetting counter...")
            counterValue = 0;
            updateCounter();
            counterRef.set(counterValue); // Update the value in the database
        }

        // Listen for changes to the counter in the database
        counterRef.on("value", (snapshot) => {
            counterValue = snapshot.val() || 0;
            updateCounter();
        });
        
              // button
      $(function() {
        $( "#button" ).click(function() {
          $( "#button" ).addClass( "onclic", 250, validate);
        });
      
        function validate() {
          setTimeout(function() {
            $( "#button" ).removeClass( "onclic" );
            $( "#button" ).addClass( "validate", 450, callback );
          }, 2250 );
        }
          function callback() {
            setTimeout(function() {
              $( "#button" ).removeClass( "validate" );
            }, 1250 );
          }
        });
        

  