// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================
const express = require("express");

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 3000;
// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

// Sets up the Express app to handle data parsing
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
