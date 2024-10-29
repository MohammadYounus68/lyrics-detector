<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic HTML Generation Example</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
    <!-- Button to trigger JavaScript to create 10 HTML blocks -->
    <button id="create-btn" class="btn btn-primary m-3">Create 10 Divs</button>

    <!-- Container where dynamically generated content will be inserted -->
    <div id="results-container" class="container"></div>

    <script>
        // Function to create a single HTML block dynamically
        function createHtmlBlock(title) {
            // Create a new div with the HTML structure
            const newDiv = document.createElement('div');
            newDiv.classList.add('search-result', 'col-md-8', 'mx-auto', 'py-4');
            
            // Set the inner HTML of the new div
            newDiv.innerHTML = `
                <div class="single-result row align-items-center my-3 p-3">
                    <div class="col-md-9">
                        <h3 class="lyrics-name"><span id="lyrics-name">${title}</span></h3>
                        <p class="author lead">Album by <span>Washed Out</span></p>
                    </div>
                    <div class="col-md-3 text-md-right text-center">
                        <button class="btn btn-success">Get Lyrics</button>
                    </div>
                </div>
            `;

            return newDiv; // Return the created div element
        }

        // Event listener to generate 10 HTML blocks
        document.getElementById('create-btn').addEventListener('click', function () {
            const parentElement = document.getElementById('results-container');

            // Clear any previous content
            parentElement.innerHTML = '';

            // Loop to create 10 blocks
            for (let i = 1; i <= 10; i++) {
                const newHtmlBlock = createHtmlBlock(`Song Title ${i}`);
                parentElement.appendChild(newHtmlBlock); // Append each new block to the parent container
            }
        });
    </script>
</body>
</html>
