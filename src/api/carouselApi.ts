const carouselData: CarouselItem[] = [
  {
    title: '1st block',
    images: [
      'https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112',
      'https://media.istockphoto.com/photos/sunset-with-pebbles-on-beach-in-nice-france-picture-id1157205177',
      'https://media.istockphoto.com/photos/in-the-hands-of-trees-growing-seedlings-bokeh-green-background-female-picture-id1181366400',
    ],
  },
  {
    title: '2nd block',
    images: [
      'https://media.istockphoto.com/photos/woman-standing-and-looking-at-lago-di-carezza-in-dolomites-picture-id1038870630',
      'https://media.istockphoto.com/photos/child-hugging-tree-with-heart-shape-on-it-picture-id1226721220',
      'https://media.istockphoto.com/photos/path-through-sunlit-forest-picture-id1205214235',
    ],
  },
  {
    title: '3rd block',
    images: [
      'https://media.istockphoto.com/photos/sunset-with-pebbles-on-beach-in-nice-france-picture-id1157205177',
      'https://media.istockphoto.com/photos/dandelion-seed-picture-id157681198',
      'https://media.istockphoto.com/photos/winding-road-picture-id1173544006',
    ],
  },
  {
    title: '4th block',
    images: [
      'https://media.istockphoto.com/photos/beautiful-emeraldcolored-glacial-rivers-of-iceland-taken-from-a-picture-id1202227531',
      'https://media.istockphoto.com/photos/mata-atlantica-atlantic-forest-in-brazil-picture-id935746242',
      'https://media.istockphoto.com/photos/dandelion-picture-id1180494132',
    ],
  },
  {
    title: '5th block',
    images: [
      'https://media.istockphoto.com/photos/frank-o-gehrys-neuer-zollhof-buildings-at-medienhafen-dusseldorf-picture-id577660854',
      'https://media.istockphoto.com/photos/cecilienhof-palace-in-new-park-potsdam-germany-picture-id1214112532',
      'https://media.istockphoto.com/photos/rostock-christmas-market-at-neuer-markt-square-on-a-sunny-day-picture-id890124032',
    ],
  },
  {
    title: '6th block',
    images: [
      'https://media.istockphoto.com/photos/neuer-zollhof-by-architect-frank-o-gehry-in-the-media-harbour-in-picture-id1052880010',
      'https://media.istockphoto.com/photos/neuer-zollhof-buildings-and-rhein-tower-at-medienhafen-dusseldorf-picture-id465800908',
      'https://media.istockphoto.com/photos/donnerbrunnen-fountain-in-vienna-austria-baroque-fountain-located-on-picture-id1143320171',
    ],
  },
  {
    title: '7th block',
    images: [
      'https://media.istockphoto.com/photos/capuchin-church-which-houses-imperial-crypt-in-vienna-picture-id1092151828',
      'https://media.istockphoto.com/photos/frank-o-gehrys-neuer-zollhof-buildings-at-medienhafen-dusseldorf-picture-id458937731',
      'https://media.istockphoto.com/photos/evening-view-of-media-harbor-with-neuer-zollhof-buldings-in-germany-picture-id825227704',
    ],
  },
  {
    title: '8th block',
    images: [
      'https://media.istockphoto.com/photos/famous-donner-fountain-at-the-neuer-markt-picture-id494738703',
      'https://media.istockphoto.com/photos/ocean-at-dawn-picture-id466888366',
      'https://media.istockphoto.com/photos/chimney-stacks-of-cecilienhof-palace-in-neuer-park-potsdam-germany-picture-id1279201016',
    ],
  },
  {
    title: '9th block',
    images: [
      'https://media.istockphoto.com/photos/modern-skyscrapers-in-business-district-picture-id1137991385',
      'https://media.istockphoto.com/photos/business-district-building-street-office-building-picture-id1196323722',
      'https://media.istockphoto.com/photos/3d-rendering-of-corporate-buildings-with-sunlight-picture-id1135793300',
    ],
  },
  {
    title: '10th block',
    images: [
      'https://media.istockphoto.com/photos/skyscrapers-in-a-finance-district-picture-id904105652',
      'https://media.istockphoto.com/photos/europe-modern-complex-of-residential-buildings-picture-id1165384568',
      'https://media.istockphoto.com/photos/workers-working-late-tall-building-reflected-picture-id1173173561',
    ],
  },
  {
    title: '11th block',
    images: [
      'https://media.istockphoto.com/photos/beautiful-craftsman-home-exterior-on-bright-sunny-day-with-green-and-picture-id1222625117',
      'https://media.istockphoto.com/photos/modern-real-estate-picture-id488120139',
      'https://media.istockphoto.com/photos/beautiful-exterior-of-new-luxury-home-at-twilight-picture-id524085051',
    ],
  },
  {
    title: '12th block',
    images: [
      'https://media.istockphoto.com/photos/looking-up-a-reflections-on-glass-covered-corporate-building-picture-id1218614876',
      'https://media.istockphoto.com/photos/building-with-large-h-sign-for-hospital-picture-id855680246',
      'https://media.istockphoto.com/vectors/wireframe-of-the-building-of-the-blue-lines-on-a-dark-background-3d-vector-id1145847839',
    ],
  },
];

// mimic server call
export const getCarousel = (): Promise<CarouselItem[]> => {
  return new Promise(resolve =>
    setTimeout(() => {
      __DEV__ && console.log('Getting carousel data');
      return resolve(carouselData);
    }, 1000),
  );
};
