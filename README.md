# movie_api

<body>
  <p>
    This web application will provide acces to information about different
    movies, their directors and genres. You will be able to sign up and create
    a list of your favourite movies.
  </p>

  <h1>Request method and URL endpoints</h1>
  <table style="width:100%">
    <tr>
      <th>Request</th>
      <th>URL</th>
      <th>HTTP METHOD</th>
      <th>Request body data format</th>
      <th>Response body data format</th>
    </tr>
    <tr>
      <td>Return a list of all movies.</td>
      <td>"/movies"</td>
      <td>GET</td>
      <td>None</td>
      <td>
        A JSON object holding data about all movies.
      </td>
    </tr>
    <tr>
      <td>
        Return data (like desciption, genre, director or imageURL) about a
        single movie by title.
      </td>
      <td>"/movies/[title]"</td>
      <td>GET</td>
      <td>None</td>
      <td>
        A JSON object holding data about a single movie, containing
        description, genre, director and imageURL. Example: { "Genre": {
        "Name": "Action", "Description": "Action film is a film genre in which
        the protagonist or protagonists are thrust into a series of events
        that typically include violence, extended fighting, physical feats,
        rescues and frantic chases. Action films tend to feature a mostly
        resourceful hero struggling against incredible odds, which include
        life-threatening situations, a dangerous villain, or a pursuit which
        usually concludes in victory for the hero." }, "Director": { "movies":
        [ "60a68722dae586ee3e0cc296", "60a6a3a9dae586ee3e0cc297",
        "60a6a412dae586ee3e0cc298" ], "Name": "Peter Jackson", "Bio": "Peter
        Jackson was born as an only child in a small coast-side town in New
        Zealand in 1961. When a friend of his parents bought him a super 8
        movie camera (because she saw how much he enjoyed taking photos), the
        then eight-year-old Peter instantly grabbed the thing to start
        recording his own movies, which he made with his friends.", "Birth":
        1961 }, "Actors": [ [ "60a6c284dae586ee3e0cc2a5",
        "60a6c31adae586ee3e0cc2a6" ] ], "_id": "60a6a3a9dae586ee3e0cc297",
        "Title": "The Lord of the Rings: The Two Towers", "Description": "The
        Lord of the Rings: The Two Towers is a 2002 epic fantasy adventure
        film directed by Peter Jackson, based on the second volume of J. R. R.
        Tolkien's The Lord of the Rings. The film is the second instalment in
        The Lord of the Rings trilogy and was produced by Barrie M. Osborne,
        Fran Walsh and Jackson, and written by Walsh, Philippa Boyens, Stephen
        Sinclair and Jackson.", "ImagePath":
        "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
        "Featured": true },
      </td>
    </tr>
    <tr>
      <td>Return data about a genre (description) by name.</td>
      <td>"/movies/Genre/[name]"</td>
      <td>GET</td>
      <td>None</td>
      <td>
        A JSON object holding data about a genre. Example: "Genre": { "Name":
        "Drama", "Description": "In film and television, drama is a category
        of narrative fiction (or semi-fiction) intended to be more serious
        than humorous in tone. Drama of this kind is usually qualified with
        additional terms that specify its particular super-genre, macro-genre,
        or micro-genre, such as soap opera (operatic drama), police crime
        drama, political drama, legal drama, historical drama, domestic drama,
        teen drama, and comedy-drama (dramedy)."
      </td>
    </tr>
    <tr>
      <td>
        Return data about a director (like bio, birth year, death year) by
        name.
      </td>
      <td>"/movies/Director/[name]"</td>
      <td>GET</td>
      <td>None</td>
      <td>
        A JSON object holding data about a director. Example: { name:
        "Christopher Nolan", bio: "...", birth year: "30 July 1970", death
        year: "" }
      </td>
    </tr>
    <tr>
      <td>Return a list of all actors.</td>
      <td>"/actors"</td>
      <td>GET</td>
      <td>None</td>
      <td>A JSON object holding data about all actors.</td>
    </tr>
    <tr>
      <td>
        Return data (like bio, movies, birthyear) about a single actor by
        name.
      </td>
      <td>"/actors/[Name]"</td>
      <td>GET</td>
      <td>None</td>
      <td>
        A JSON object holding data about a single actor, containing bio,
        birth, death and movies. Example: { "movies": [
        "60a6a7c0dae586ee3e0cc29e" ], "_id": "60a6c4fadae586ee3e0cc2aa",
        "Name": "Hugh Jackman", "Bio": "Hugh Michael Jackman AC (born 12
        October 1968) is an Australian actor, singer, and producer. He is best
        known for playing Wolverine/Logan in the X-Men film series
        (2000–2017), a role for which he holds the Guinness World Record for
        'longest career as a live-action Marvel superhero'.", "Birth": 1968 }
      </td>
    </tr>
    <tr>
      <td>Registration of new user.</td>
      <td>"/users"</td>
      <td>POST</td>
      <td>
        A JSON object holding data about the user. { ID: Integer, username:
        String, password: String, email: String, birthday: Date } Make sure
        that the username only includes alphanumeric symbol, the birthday
        follows the format and the email is a valid email address. Example: {
        "username" : "HansPeter", "password" : "Test123", "email" :
        "test@googlemail.com", "birthday" : "03/15/1912" }
      </td>
      <td>
        A JSON object holding data about the user that was added. Example: {
        "username" : "HansPeter", "password" : "hashedPassword", "email" :
        "test@googlemail.com", "birthday" : "03/15/1912" }
      </td>
    </tr>
    <tr>
      <td>
        Update a users information (like password, username, email, or
        birthday)
      </td>
      <td>"/users/[username]"</td>
      <td>PUT</td>
      <td>
        A JSON object holding updated data about the user. { ID: Integer,
        username: String, password: String, email: String, birthday: Date }
        Make sure that the username only includes alphanumeric symbol, the
        birthday follows the format and the email is a valid email address.
        Example: { "username" : "Hans Peter", "password" : "Test123", "email"
        : "test@googlemail.com", "birthday" : "03/15/1912" }
      </td>
      <td>
        A JSON object holding the new updated data about the user. Example: {
        "username" : "Hans Peter", "password" : "hashedPassword", "email" :
        "test@googlemail.com", "birthday" : "03/15/1912" }
      </td>
    </tr>
    <tr>
      <td>Allow user to add a movie to their list of favourites</td>
      <td>"/users/[username]/favouriteMovies/[MovieID]"</td>
      <td>POST</td>
      <td>none</td>
      <td>
        A JSON object holding data about the user (including the added movie).
        Example: { "favouriteMovies": [ "60a6a7c0dae586ee3e0cc29e" ], "_id":
        "60abf50382ccbe2dd8d8270f", "username": "Hans Peter", "password":
        "hashedPassword", "email": "newtest@googlemail.com", "birthday":
        "1992-03-15T08:00:00.000Z", "__v": 0 }
      </td>
    </tr>
    <tr>
      <td>Allow user to remove a movie to their list of favourites</td>
      <td>"/users/[username]/favouriteMovies/[MovieID]"</td>
      <td>DELETE</td>
      <td>none</td>
      <td>
        A JSON object holding data about the user (without the removed movie).
        Example: { "favouriteMovies": [ "60a6a7c0dae586ee3e0cc29e" ], "_id":
        "60abf50382ccbe2dd8d8270f", "username": "Hans Peter", "password":
        "hashedPassword", "email": "newtest@googlemail.com", "birthday":
        "1992-03-15T08:00:00.000Z", "__v": 0 }
      </td>
    </tr>
    <tr>
      <td>Delete a user</td>
      <td>"/users/[username]"</td>
      <td>DELETE</td>
      <td>none</td>
      <td>A textmassage that confirms, that the user was deleted.</td>
    </tr>
  </table>
</body>
