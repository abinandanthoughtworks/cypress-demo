class MyTilesHomePage {
  getKitchenSink = () => {
    return cy.get('a[href="natural-stone"]');
  };
}

export default MyTilesHomePage;
