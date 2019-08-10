import React from 'react';
import NavBar from './NavBar'

const AboutPage = () => {
  const p1 =
    `Linda Fiveson, President of LONG ISLAND WEIGHT COUNSELING, INC., has been a dieting professional for more than 30 years.  Inspired by her own successful weight loss of 140 pounds, Linda brings her keen business sense, along with a wealth of expertise in the health and nutrition field, to her highly successful weight-loss practice.`
  const p2 = `
    Linda designed her weight-loss program while attending C.W. Post College where she received a degree in Nutrition. She personally created all the recipes for the unique food products her company sells.`
  const p3 = `
    Linda authors a monthly newspaper column, Food For Life, which is published in eleven Herald newspapers on Long Island, New York, and is read by more than 500,000 people.  She also co-hosted a live one-hour radio program by the same name which was broadcast in the tri-state area on WLUX and WGBB radio stations for over six years.
  `
  const p4 = `
    Linda is in the process of writing a book which will be autobiographical in nature.  Further details will be available in the near future.  Writing a healthy cooking book with her exclusive recipes for the low carb eater is another of her short range goals.`

  const p5 = `
    Linda taught Nutrition for five years in the Plainview-Old Bethpage School District Adult Education Division.  She serves as Follow-up Nutritionist for Camp Shane, a weight loss camp for children and teens and she is responsible for approving menus for youth in local day care facilities.
  `
  const p6 = `
      Linda has been a keynote speaker at Columbia Presbyterian Hospital and New York Hospital where she addressed the role nutrition and diet have on pregnancy and fertility.  She has lectured for weight loss and nutrition programs and been the keynote speaker for Breast Cancer functions such as the Syosset Relay for Life and Babe Zaharias luncheons.`

  const p7 = `
    Prior to entering the nutrition and weight-loss field, Linda was Executive Director and Producer of the Miss America and Miss U.S.A. beauty pageants.  She directed all preliminary pageants in New York, Long Island, New Jersey, Connecticut and Massachusetts. She also authored Producing a Winner, a guidebook for pageant contestants and personnel. Linda was hired by the former Roosevelt Raceway to create a pageant for their 25th anniversary "International Trot", which produced a beauty queen for each country that entered in the race.
  `
  const p8 = `
    Linda participated in a “healthy” supermarket shopping show for Channel 25 hosted by Valerie Forte and was interviewed on the Cable TV show “Dr. Passes Presents.” In addition, Linda was featured on the cover of the New Year’s edition of Newsday, January 1, 2008.
  `
  const p9 = `
    Linda continues to follow and recommend the same healthy eating plan she designed so many years ago.  She also exercises regularly and is a ballroom dance competitor who has won many first place honors.
  `
  const p10 = `
    Linda remains active in community concerns and holds many citations from local Congressman and Senators for her contributions to the community. She finds fulfillment in her work and is dedicated to counseling, developing new recipes and writing.  Most important of all, Linda is an inspiration to her many clients who travel from all over the tri-state area to seek her wisdom and advice.
`
  return (
    <div>
      <NavBar/>
      <div class="header-div">
        <div class="header-title">
          Linda's Story
        </div>
      </div>
      <div class="page-body-container">

        <p>{p1}</p>
        <p>{p2}</p>
        <p>{p3}</p>
        <p>{p4}</p>
        <p>{p5}</p>
        <p>{p6}</p>
        <p>{p7}</p>
        <p>{p8}</p>
        <p>{p9}</p>
        <p>{p10}</p>

      </div>
    </div>
  )
}

export default AboutPage;
