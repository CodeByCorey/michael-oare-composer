export default function About() {
  return (
    <div className="relative py-16 bg-white overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
          <svg
            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg className="absolute bottom-12 left-full transform translate-x-32" width={404} height={384} fill="none" viewBox="0 0 404 384">
            <defs>
              <pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
          <h2>About</h2>
          <p>
            Michael Oare (b. 1960) earned undergraduate degrees in Music Composition and Music Education from Old Dominion University in Norfolk,
            Virginia. A veteran music educator, Mr. Oare remains active as a composer, arranger, performer, conductor and adjudicator. As a published
            composer, he has written numerous arrangements and compositions, with a special interest in music for the young band. Two of his works, To
            Dream in Brushstrokes and Equilibrium are included in the acclaimed Teaching Music Through Performance series by GIA publications. His
            compositions can be found in the catalogues of several major publishing companies, with all his most recent works being published by Hal
            Leonard.
          </p>
          <p>
            Since 1991, he has been the Director of Bands at Great Bridge Middle School in Chesapeake, Virginia. His Great Bridge Middle School Bands
            have consistently received superior ratings in the annual Virginia Concert Band Performance Assessment and have performed for the Virginia
            Music Educators Association Conference on four occasions. In 2015, he was appointed conductor of the Bay Youth Wind Ensemble, serving
            students in grades 7-9 from throughout southeastern Virginia and northeastern North Carolina. He maintains state and national professional
            memberships, is a member of ASCAP, Phi Beta Mu, and performs with the Virginia Wind Symphony. He is the 2016 Chesapeake Public Schools’
            Middle School Teacher of the Year, a two-time recipient of the National Band Association’s Citation of Excellence, and a multiple year
            honoree in Who’s Who Among America’s Teachers. Mr. Oare resides in Chesapeake, Virginia and in his spare time enjoys off-shore fishing
            along the coasts of Virginia and North Carolina.
          </p>
        </div>
      </div>
    </div>
  );
}
