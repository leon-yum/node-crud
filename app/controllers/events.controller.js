module.exports = {

  // show all events
  showEvents: (req, res) => {
    // create dummy events
    const events = [
      { name: 'Basketball', slug: 'basketball', description: 'Throwing into a basket.' },
      { name: 'Swimming', slug: 'swimming', description: 'Michael Phelps is the fast fish.' },
      { name: 'Weightlifting', slug: 'weightlifting', description: 'Swole is the goal' }
    ];

    // return a view with data
    res.render('pages/events', { events });
  }
};
