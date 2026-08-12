import type {
  DayPlan,
  FoodItem,
  GroceryItem,
  Meal,
  Recipe,
  WeightEntry,
} from './types'

export const dailyTarget = {
  kcal: 2450,
  protein: 165,
  carbs: 280,
  fat: 75,
}

export const todayMeals: Meal[] = [
  {
    id: 'm1',
    slot: 'breakfast',
    time: '08:00',
    name: 'Aamupala',
    description: 'Kaurapuuro, banaani & maapähkinävoi',
    image: '/images/food/kaurapuuro.png',
    macro: { kcal: 520, protein: 32, carbs: 68, fat: 16 },
    status: 'eaten',
  },
  {
    id: 'm2',
    slot: 'lunch',
    time: '12:30',
    name: 'Lounas',
    description: 'Kana-riisikulho',
    image: '/images/food/kana-riisikulho.png',
    macro: { kcal: 680, protein: 48, carbs: 74, fat: 20 },
    status: 'eaten',
  },
  {
    id: 'm3',
    slot: 'snack',
    time: '16:00',
    name: 'Välipala',
    description: 'Rahka & marjat',
    image: '/images/food/rahka-marjat.png',
    macro: { kcal: 250, protein: 22, carbs: 28, fat: 5 },
    status: 'planned',
  },
  {
    id: 'm4',
    slot: 'dinner',
    time: '19:00',
    name: 'Päivällinen',
    description: 'Jauhelihapasta',
    image: '/images/food/jauhelihapasta.png',
    macro: { kcal: 690, protein: 40, carbs: 78, fat: 24 },
    status: 'suggested',
    alternatives: ['Kanapasta', 'Chili con carne', 'Teriyaki-kana'],
  },
]

export const eatenSoFar = todayMeals
  .filter((m) => m.status === 'eaten')
  .reduce(
    (acc, m) => ({
      kcal: acc.kcal + m.macro.kcal,
      protein: acc.protein + m.macro.protein,
      carbs: acc.carbs + m.macro.carbs,
      fat: acc.fat + m.macro.fat,
    }),
    { kcal: 0, protein: 0, carbs: 0, fat: 0 },
  )

export const nextMealSuggestions: Meal[] = [
  {
    id: 's1',
    slot: 'snack',
    time: '16:00',
    name: 'Kana-fetawrap',
    description: 'Täysjyvätortilla, kana, feta & tuoreet kasvikset',
    image: '/images/food/kana-fetawrap.png',
    macro: { kcal: 620, protein: 51, carbs: 46, fat: 22 },
    status: 'suggested',
  },
  {
    id: 's2',
    slot: 'snack',
    time: '16:00',
    name: 'Ruisleipä & avokado',
    description: 'Ruisleipä, avokado, keitetty muna & tomaatti',
    image: '/images/food/ruisleipa-avokado.png',
    macro: { kcal: 410, protein: 24, carbs: 34, fat: 20 },
    status: 'suggested',
  },
  {
    id: 's3',
    slot: 'snack',
    time: '16:00',
    name: 'Lohi & kasvikset',
    description: 'Uunilohi, juurekset ja tilli',
    image: '/images/food/lohi-kasvikset.png',
    macro: { kcal: 540, protein: 44, carbs: 26, fat: 28 },
    status: 'suggested',
  },
]

const weekdayLabels = [
  'Maanantai',
  'Tiistai',
  'Keskiviikko',
  'Torstai',
  'Perjantai',
  'Lauantai',
  'Sunnuntai',
]

const weekMealTemplates: Omit<Meal, 'id' | 'status'>[][] = [
  [
    { slot: 'breakfast', time: '08:00', name: 'Aamupala', description: 'Kaurapuuro, banaani & maapähkinävoi', image: '/images/food/kaurapuuro.png', macro: { kcal: 520, protein: 32, carbs: 68, fat: 16 } },
    { slot: 'lunch', time: '12:30', name: 'Lounas', description: 'Kana-riisikulho', image: '/images/food/kana-riisikulho.png', macro: { kcal: 680, protein: 48, carbs: 74, fat: 20 }, prepMinutes: 25 },
    { slot: 'snack', time: '16:00', name: 'Välipala', description: 'Rahka & marjat', image: '/images/food/rahka-marjat.png', macro: { kcal: 250, protein: 22, carbs: 28, fat: 5 } },
    { slot: 'dinner', time: '19:00', name: 'Päivällinen', description: 'Jauhelihapasta', image: '/images/food/jauhelihapasta.png', macro: { kcal: 690, protein: 40, carbs: 78, fat: 24 }, prepMinutes: 30, alternatives: ['Kanapasta', 'Chili con carne', 'Teriyaki-kana'] },
    { slot: 'evening-snack', time: '21:30', name: 'Iltapala', description: 'Ruisleipä & avokado', image: '/images/food/ruisleipa-avokado.png', macro: { kcal: 310, protein: 12, carbs: 30, fat: 15 } },
  ],
  [
    { slot: 'breakfast', time: '07:45', name: 'Aamupala', description: 'Ruisleipä, avokado & keitetty muna', image: '/images/food/ruisleipa-avokado.png', macro: { kcal: 460, protein: 24, carbs: 38, fat: 22 } },
    { slot: 'lunch', time: '12:00', name: 'Lounas', description: 'Kanawokki', image: '/images/food/kanawokki.png', macro: { kcal: 610, protein: 46, carbs: 62, fat: 18 }, prepMinutes: 20, alternatives: ['Naudanliha-wokki', 'Tofuwokki', 'Katkarapuwokki'] },
    { slot: 'snack', time: '15:30', name: 'Välipala', description: 'Rahka & marjat', image: '/images/food/rahka-marjat.png', macro: { kcal: 250, protein: 22, carbs: 28, fat: 5 } },
    { slot: 'dinner', time: '18:45', name: 'Päivällinen', description: 'Uunilohi & juurekset', image: '/images/food/lohi-kasvikset.png', macro: { kcal: 640, protein: 44, carbs: 34, fat: 32 }, prepMinutes: 35 },
    { slot: 'evening-snack', time: '21:00', name: 'Iltapala', description: 'Kana-fetawrap, puolikas', image: '/images/food/kana-fetawrap.png', macro: { kcal: 310, protein: 26, carbs: 23, fat: 11 } },
  ],
  [
    { slot: 'breakfast', time: '08:00', name: 'Aamupala', description: 'Kaurapuuro, banaani & maapähkinävoi', image: '/images/food/kaurapuuro.png', macro: { kcal: 520, protein: 32, carbs: 68, fat: 16 } },
    { slot: 'lunch', time: '12:30', name: 'Lounas', description: 'Kana-fetawrap', image: '/images/food/kana-fetawrap.png', macro: { kcal: 620, protein: 51, carbs: 46, fat: 22 }, prepMinutes: 15 },
    { slot: 'snack', time: '16:00', name: 'Välipala', description: 'Rahka & marjat', image: '/images/food/rahka-marjat.png', macro: { kcal: 250, protein: 22, carbs: 28, fat: 5 } },
    { slot: 'dinner', time: '19:15', name: 'Päivällinen', description: 'Kanawokki', image: '/images/food/kanawokki.png', macro: { kcal: 610, protein: 46, carbs: 62, fat: 18 }, prepMinutes: 20 },
    { slot: 'evening-snack', time: '21:30', name: 'Iltapala', description: 'Ruisleipä & avokado', image: '/images/food/ruisleipa-avokado.png', macro: { kcal: 310, protein: 12, carbs: 30, fat: 15 } },
  ],
  [
    { slot: 'breakfast', time: '07:30', name: 'Aamupala', description: 'Rahka & marjat', image: '/images/food/rahka-marjat.png', macro: { kcal: 380, protein: 34, carbs: 42, fat: 8 } },
    { slot: 'lunch', time: '12:15', name: 'Lounas', description: 'Uunilohi & juurekset', image: '/images/food/lohi-kasvikset.png', macro: { kcal: 640, protein: 44, carbs: 34, fat: 32 }, prepMinutes: 35 },
    { slot: 'snack', time: '15:45', name: 'Välipala', description: 'Kana-fetawrap, puolikas', image: '/images/food/kana-fetawrap.png', macro: { kcal: 310, protein: 26, carbs: 23, fat: 11 } },
    { slot: 'dinner', time: '19:00', name: 'Päivällinen', description: 'Jauhelihapasta', image: '/images/food/jauhelihapasta.png', macro: { kcal: 690, protein: 40, carbs: 78, fat: 24 }, prepMinutes: 30, alternatives: ['Kanapasta', 'Chili con carne'] },
    { slot: 'evening-snack', time: '21:15', name: 'Iltapala', description: 'Ruisleipä & avokado', image: '/images/food/ruisleipa-avokado.png', macro: { kcal: 310, protein: 12, carbs: 30, fat: 15 } },
  ],
  [
    { slot: 'breakfast', time: '08:15', name: 'Aamupala', description: 'Kaurapuuro, banaani & maapähkinävoi', image: '/images/food/kaurapuuro.png', macro: { kcal: 520, protein: 32, carbs: 68, fat: 16 } },
    { slot: 'lunch', time: '12:30', name: 'Lounas', description: 'Kana-riisikulho', image: '/images/food/kana-riisikulho.png', macro: { kcal: 680, protein: 48, carbs: 74, fat: 20 }, prepMinutes: 25 },
    { slot: 'snack', time: '16:00', name: 'Välipala', description: 'Rahka & marjat', image: '/images/food/rahka-marjat.png', macro: { kcal: 250, protein: 22, carbs: 28, fat: 5 } },
    { slot: 'dinner', time: '19:30', name: 'Päivällinen', description: 'Kanawokki', image: '/images/food/kanawokki.png', macro: { kcal: 610, protein: 46, carbs: 62, fat: 18 }, prepMinutes: 20 },
    { slot: 'evening-snack', time: '21:30', name: 'Iltapala', description: 'Kana-fetawrap, puolikas', image: '/images/food/kana-fetawrap.png', macro: { kcal: 310, protein: 26, carbs: 23, fat: 11 } },
  ],
  [
    { slot: 'breakfast', time: '09:00', name: 'Aamupala', description: 'Ruisleipä, avokado & keitetty muna', image: '/images/food/ruisleipa-avokado.png', macro: { kcal: 460, protein: 24, carbs: 38, fat: 22 } },
    { slot: 'lunch', time: '13:00', name: 'Lounas', description: 'Jauhelihapasta', image: '/images/food/jauhelihapasta.png', macro: { kcal: 690, protein: 40, carbs: 78, fat: 24 }, prepMinutes: 30 },
    { slot: 'snack', time: '16:30', name: 'Välipala', description: 'Rahka & marjat', image: '/images/food/rahka-marjat.png', macro: { kcal: 250, protein: 22, carbs: 28, fat: 5 } },
    { slot: 'dinner', time: '19:00', name: 'Päivällinen', description: 'Uunilohi & juurekset', image: '/images/food/lohi-kasvikset.png', macro: { kcal: 640, protein: 44, carbs: 34, fat: 32 }, prepMinutes: 35 },
    { slot: 'evening-snack', time: '21:45', name: 'Iltapala', description: 'Ruisleipä & avokado', image: '/images/food/ruisleipa-avokado.png', macro: { kcal: 310, protein: 12, carbs: 30, fat: 15 } },
  ],
  [
    { slot: 'breakfast', time: '09:30', name: 'Aamupala', description: 'Kaurapuuro, banaani & maapähkinävoi', image: '/images/food/kaurapuuro.png', macro: { kcal: 520, protein: 32, carbs: 68, fat: 16 } },
    { slot: 'lunch', time: '13:30', name: 'Lounas', description: 'Kanawokki', image: '/images/food/kanawokki.png', macro: { kcal: 610, protein: 46, carbs: 62, fat: 18 }, prepMinutes: 20 },
    { slot: 'snack', time: '16:30', name: 'Välipala', description: 'Kana-fetawrap, puolikas', image: '/images/food/kana-fetawrap.png', macro: { kcal: 310, protein: 26, carbs: 23, fat: 11 } },
    { slot: 'dinner', time: '18:30', name: 'Päivällinen', description: 'Kana-riisikulho', image: '/images/food/kana-riisikulho.png', macro: { kcal: 680, protein: 48, carbs: 74, fat: 20 }, prepMinutes: 25 },
    { slot: 'evening-snack', time: '21:00', name: 'Iltapala', description: 'Rahka & marjat', image: '/images/food/rahka-marjat.png', macro: { kcal: 250, protein: 22, carbs: 28, fat: 5 } },
  ],
]

export const weekPlan: DayPlan[] = weekMealTemplates.map((meals, i) => ({
  date: `2026-08-${String(10 + i).padStart(2, '0')}`,
  label: weekdayLabels[i],
  meals: meals.map((meal, j) => ({
    ...meal,
    id: `w${i}-${j}`,
    status: i === 0 ? (j < 2 ? 'eaten' : j === 2 ? 'planned' : 'suggested') : 'planned',
  })),
}))

export const recipes: Recipe[] = [
  {
    id: 'r1',
    slug: 'kanawokki',
    name: 'Kanawokki',
    image: '/images/food/kanawokki.png',
    macro: { kcal: 540, protein: 48, carbs: 52, fat: 16 },
    prepMinutes: 25,
    servings: 2,
    tags: ['Nopea', 'Runsasproteiininen', 'Lounas', 'Päivällinen'],
    ingredients: [
      { name: 'Kanan fileesuikale', amount: '300 g' },
      { name: 'Parsakaali', amount: '200 g' },
      { name: 'Paprika', amount: '1 kpl' },
      { name: 'Riisinuudeli', amount: '150 g' },
      { name: 'Soijakastike', amount: '3 rkl' },
      { name: 'Inkivääri', amount: '1 tl' },
      { name: 'Valkosipuli', amount: '2 kynttä' },
    ],
    instructions: [
      'Keitä riisinuudelit pakkauksen ohjeen mukaan ja valuta.',
      'Paista kanasuikaleet kuumalla pannulla kypsäksi.',
      'Lisää pilkotut kasvikset ja paista rapeiksi.',
      'Mausta soijakastikkeella, inkiväärillä ja valkosipulilla.',
      'Sekoita nuudelit joukkoon ja tarjoile kuumana.',
    ],
  },
  {
    id: 'r2',
    slug: 'kana-riisikulho',
    name: 'Kana-riisikulho',
    image: '/images/food/kana-riisikulho.png',
    macro: { kcal: 680, protein: 48, carbs: 74, fat: 20 },
    prepMinutes: 30,
    servings: 2,
    tags: ['Runsasproteiininen', 'Lounas'],
    ingredients: [
      { name: 'Kanan fileesuikale', amount: '300 g' },
      { name: 'Basmatiriisi', amount: '160 g' },
      { name: 'Kurkku', amount: '1 kpl' },
      { name: 'Avokado', amount: '1 kpl' },
      { name: 'Keitetty muna', amount: '2 kpl' },
      { name: 'Chilimajoneesi', amount: '2 rkl' },
    ],
    instructions: [
      'Keitä riisi kypsäksi.',
      'Mausta ja paista kana kypsäksi pannulla.',
      'Kokoa kulho riisin, kanan, kurkun ja avokadon kanssa.',
      'Lisää puolitettu keitetty muna ja tilkka chilimajoneesia.',
    ],
  },
  {
    id: 'r3',
    slug: 'jauhelihapasta',
    name: 'Jauhelihapasta',
    image: '/images/food/jauhelihapasta.png',
    macro: { kcal: 690, protein: 40, carbs: 78, fat: 24 },
    prepMinutes: 30,
    servings: 4,
    tags: ['Halpa', 'Päivällinen'],
    ingredients: [
      { name: 'Jauheliha', amount: '400 g' },
      { name: 'Täysjyvapasta', amount: '350 g' },
      { name: 'Tomaattimurska', amount: '400 g' },
      { name: 'Sipuli', amount: '1 kpl' },
      { name: 'Valkosipuli', amount: '2 kynttä' },
      { name: 'Parmesaani', amount: '50 g' },
    ],
    instructions: [
      'Ruskista jauheliha ja hienonnettu sipuli kattilassa.',
      'Lisää tomaattimurska ja valkosipuli, hauduta 15 minuuttia.',
      'Keitä pasta poreilevassa suolavedessä pakkauksen ohjeen mukaan.',
      'Sekoita pasta kastikkeen kanssa ja tarjoile parmesaanin kera.',
    ],
  },
  {
    id: 'r4',
    slug: 'lohi-kasvikset',
    name: 'Uunilohi & juurekset',
    image: '/images/food/lohi-kasvikset.png',
    macro: { kcal: 640, protein: 44, carbs: 34, fat: 32 },
    prepMinutes: 35,
    servings: 2,
    tags: ['Runsasproteiininen', 'Päivällinen'],
    ingredients: [
      { name: 'Lohifile', amount: '300 g' },
      { name: 'Porkkana', amount: '2 kpl' },
      { name: 'Palsternakka', amount: '1 kpl' },
      { name: 'Tilli', amount: '1 nippu' },
      { name: 'Sitruuna', amount: '1 kpl' },
      { name: 'Oliiviöljy', amount: '2 rkl' },
    ],
    instructions: [
      'Kuumenna uuni 200 asteeseen.',
      'Paloittele juurekset ja sekoita öljyn kanssa uunipellille.',
      'Paahda juureksia 15 minuuttia, lisää sitten lohi päälle.',
      'Paista noin 15 minuuttia, mausta tillillä ja sitruunalla.',
    ],
  },
  {
    id: 'r5',
    slug: 'kana-fetawrap',
    name: 'Kana-fetawrap',
    image: '/images/food/kana-fetawrap.png',
    macro: { kcal: 620, protein: 51, carbs: 46, fat: 22 },
    prepMinutes: 15,
    servings: 2,
    tags: ['Nopea', 'Runsasproteiininen', 'Lounas', 'Välipala'],
    ingredients: [
      { name: 'Täysjyvätortilla', amount: '2 kpl' },
      { name: 'Kanan fileesuikale', amount: '250 g' },
      { name: 'Fetajuusto', amount: '80 g' },
      { name: 'Tomaatti', amount: '1 kpl' },
      { name: 'Salaatti', amount: '1 kourallinen' },
      { name: 'Jogurttikastike', amount: '2 rkl' },
    ],
    instructions: [
      'Paista kanasuikaleet mausteiden kanssa kypsäksi.',
      'Levitä tortillan päälle salaatti, tomaatti ja feta.',
      'Lisää kana ja jogurttikastike, kääri tiiviisti.',
      'Halkaise ja tarjoile.',
    ],
  },
  {
    id: 'r6',
    slug: 'ruisleipa-avokado',
    name: 'Ruisleipä & avokado',
    image: '/images/food/ruisleipa-avokado.png',
    macro: { kcal: 460, protein: 24, carbs: 38, fat: 22 },
    prepMinutes: 10,
    servings: 1,
    tags: ['Nopea', 'Halpa', 'Aamupala', 'Välipala'],
    ingredients: [
      { name: 'Ruisleipä', amount: '3 viipaletta' },
      { name: 'Avokado', amount: '1 kpl' },
      { name: 'Keitetty muna', amount: '1 kpl' },
      { name: 'Kirsikkatomaatti', amount: '5 kpl' },
      { name: 'Suola & pippuri', amount: 'maun mukaan' },
    ],
    instructions: [
      'Soseuta avokado ja mausta suolalla ja pippurilla.',
      'Levitä ruisleivän päälle.',
      'Lisää siivutettu muna ja puolitetut tomaatit.',
    ],
  },
  {
    id: 'r7',
    slug: 'kaurapuuro',
    name: 'Kaurapuuro, banaani & maapähkinävoi',
    image: '/images/food/kaurapuuro.png',
    macro: { kcal: 520, protein: 32, carbs: 68, fat: 16 },
    prepMinutes: 10,
    servings: 1,
    tags: ['Nopea', 'Halpa', 'Aamupala'],
    ingredients: [
      { name: 'Kaurahiutale', amount: '80 g' },
      { name: 'Maito tai vesi', amount: '3 dl' },
      { name: 'Banaani', amount: '1 kpl' },
      { name: 'Maapähkinävoi', amount: '1 rkl' },
      { name: 'Kanelia', amount: 'maun mukaan' },
    ],
    instructions: [
      'Keitä kaurahiutaleet nesteen kanssa miedolla lämmöllä 5 minuuttia.',
      'Kaada kulhoon ja lisää viipaloitu banaani.',
      'Lusikoi päälle maapähkinävoi ja ripottele kanelia.',
    ],
  },
  {
    id: 'r8',
    slug: 'rahka-marjat',
    name: 'Rahka & marjat',
    image: '/images/food/rahka-marjat.png',
    macro: { kcal: 250, protein: 22, carbs: 28, fat: 5 },
    prepMinutes: 5,
    servings: 1,
    tags: ['Nopea', 'Halpa', 'Välipala'],
    ingredients: [
      { name: 'Rahka', amount: '200 g' },
      { name: 'Mustikka', amount: '50 g' },
      { name: 'Puolukka', amount: '50 g' },
      { name: 'Hunaja', amount: '1 tl' },
    ],
    instructions: [
      'Kaada rahka kulhoon.',
      'Lisää marjat päälle.',
      'Tilkka hunajaa halutessa.',
    ],
  },
]

export const groceryList: GroceryItem[] = [
  { id: 'g1', name: 'Banaani', quantity: '× 7', category: 'Hedelmät & vihannekset', checked: false, approxPrice: 2.1 },
  { id: 'g2', name: 'Parsakaali', quantity: '× 2', category: 'Hedelmät & vihannekset', checked: false, approxPrice: 3.2 },
  { id: 'g3', name: 'Tomaatti', quantity: '× 6', category: 'Hedelmät & vihannekset', checked: true, approxPrice: 2.8 },
  { id: 'g4', name: 'Avokado', quantity: '× 4', category: 'Hedelmät & vihannekset', checked: false, approxPrice: 4.4 },
  { id: 'g5', name: 'Kurkku', quantity: '× 2', category: 'Hedelmät & vihannekset', checked: false, approxPrice: 1.6 },
  { id: 'g6', name: 'Mustikka', quantity: '400 g', category: 'Hedelmät & vihannekset', checked: false, approxPrice: 3.9 },
  { id: 'g7', name: 'Kanan fileesuikale', quantity: '1 kg', category: 'Liha & kala', checked: false, approxPrice: 11.9 },
  { id: 'g8', name: 'Jauheliha', quantity: '400 g', category: 'Liha & kala', checked: false, approxPrice: 5.6 },
  { id: 'g9', name: 'Lohifile', quantity: '300 g', category: 'Liha & kala', checked: false, approxPrice: 8.5 },
  { id: 'g10', name: 'Rahka', quantity: '× 7', category: 'Maitotuotteet', checked: false, approxPrice: 9.8 },
  { id: 'g11', name: 'Maito', quantity: '2 l', category: 'Maitotuotteet', checked: true, approxPrice: 2.2 },
  { id: 'g12', name: 'Fetajuusto', quantity: '200 g', category: 'Maitotuotteet', checked: false, approxPrice: 3.4 },
  { id: 'g13', name: 'Kananmuna', quantity: '12 kpl', category: 'Maitotuotteet', checked: false, approxPrice: 3.1 },
  { id: 'g14', name: 'Riisi', quantity: '1 kg', category: 'Kuivat tuotteet', checked: false, approxPrice: 2.9 },
  { id: 'g15', name: 'Kaurahiutale', quantity: '1 kg', category: 'Kuivat tuotteet', checked: false, approxPrice: 1.8 },
  { id: 'g16', name: 'Täysjyvapasta', quantity: '500 g', category: 'Kuivat tuotteet', checked: false, approxPrice: 1.5 },
  { id: 'g17', name: 'Ruisleipä', quantity: '1 paketti', category: 'Kuivat tuotteet', checked: false, approxPrice: 3.2 },
]

export const weightHistory: WeightEntry[] = [
  { date: '2026-07-12', kg: 75.0 },
  { date: '2026-07-19', kg: 74.7 },
  { date: '2026-07-26', kg: 74.5 },
  { date: '2026-08-02', kg: 74.1 },
  { date: '2026-08-09', kg: 73.8 },
]

export const foodDatabase: FoodItem[] = [
  { id: 'f1', name: 'Kanafilee', category: 'Liha & kala', servingLabel: '100 g', gramsPerServing: 100, per100g: { kcal: 165, protein: 31, carbs: 0, fat: 3.6, fiber: 0 } },
  { id: 'f2', name: 'Kanan jauheliha', category: 'Liha & kala', servingLabel: '100 g', gramsPerServing: 100, per100g: { kcal: 143, protein: 27, carbs: 0, fat: 3.4, fiber: 0 } },
  { id: 'f3', name: 'Naudan jauheliha 10%', category: 'Liha & kala', servingLabel: '100 g', gramsPerServing: 100, per100g: { kcal: 174, protein: 20, carbs: 0, fat: 10, fiber: 0 } },
  { id: 'f4', name: 'Lohi', category: 'Liha & kala', servingLabel: '100 g', gramsPerServing: 100, per100g: { kcal: 208, protein: 20, carbs: 0, fat: 13, fiber: 0 } },
  { id: 'f5', name: 'Kananmuna', category: 'Maitotuotteet', servingLabel: '1 kpl (55 g)', gramsPerServing: 55, per100g: { kcal: 143, protein: 12.5, carbs: 0.7, fat: 10, fiber: 0 } },
  { id: 'f6', name: 'Kaurapuuro', category: 'Viljat', servingLabel: '100 g', gramsPerServing: 100, per100g: { kcal: 55, protein: 2, carbs: 9.5, fat: 1.2, fiber: 1.4 } },
  { id: 'f7', name: 'Rahka', category: 'Maitotuotteet', servingLabel: '100 g', gramsPerServing: 100, per100g: { kcal: 65, protein: 11, carbs: 4, fat: 0.2, fiber: 0 } },
  { id: 'f8', name: 'Ruisleipä', category: 'Viljat', servingLabel: '1 viipale (25 g)', gramsPerServing: 25, per100g: { kcal: 250, protein: 8, carbs: 45, fat: 2, fiber: 8 } },
  { id: 'f9', name: 'Peruna', category: 'Hedelmät & vihannekset', servingLabel: '100 g', gramsPerServing: 100, per100g: { kcal: 77, protein: 2, carbs: 17, fat: 0.1, fiber: 2.2 } },
  { id: 'f10', name: 'Riisi, keitetty', category: 'Viljat', servingLabel: '100 g', gramsPerServing: 100, per100g: { kcal: 130, protein: 2.7, carbs: 28, fat: 0.3, fiber: 0.4 } },
  { id: 'f11', name: 'Pasta, keitetty', category: 'Viljat', servingLabel: '100 g', gramsPerServing: 100, per100g: { kcal: 131, protein: 5, carbs: 25, fat: 1.1, fiber: 1.8 } },
  { id: 'f12', name: 'Banaani', category: 'Hedelmät & vihannekset', servingLabel: '1 kpl (120 g)', gramsPerServing: 120, per100g: { kcal: 89, protein: 1.1, carbs: 23, fat: 0.3, fiber: 2.6 } },
  { id: 'f13', name: 'Mustikka', category: 'Hedelmät & vihannekset', servingLabel: '100 g', gramsPerServing: 100, per100g: { kcal: 43, protein: 0.7, carbs: 9.7, fat: 0.4, fiber: 3 } },
  { id: 'f14', name: 'Avokado', category: 'Hedelmät & vihannekset', servingLabel: '100 g', gramsPerServing: 100, per100g: { kcal: 160, protein: 2, carbs: 8.5, fat: 14.7, fiber: 6.7 } },
]

export const onboardingGoals = [
  { id: 'lose', label: 'Pudottaa painoa', description: 'Vähennä kaloreita hallitusti ja säilytä energia arjessa.' },
  { id: 'gain', label: 'Kasvattaa lihasta', description: 'Riittävästi proteiinia ja pieni kalori-ylijäämä.' },
  { id: 'maintain', label: 'Ylläpitää painoa', description: 'Pysy tasapainossa nykyisellä painolla.' },
  { id: 'eat-better', label: 'Syödä paremmin', description: 'Enemmän rakennetta ja parempia raaka-aineita.' },
] as const

export const activityLevels = [
  { id: 'low', label: 'Vähän liikuntaa', description: 'Istumatyö, harvoin liikuntaa.' },
  { id: 'light', label: '1–2 kertaa viikossa', description: 'Kevyt liikunta muutaman kerran viikossa.' },
  { id: 'moderate', label: '3–4 kertaa viikossa', description: 'Säännöllinen liikunta useita kertoja viikossa.' },
  { id: 'high', label: '5+ kertaa viikossa', description: 'Aktiivinen arki ja usein liikuntaa.' },
] as const

export const budgetOptions = [
  { id: 'b1', label: 'Alle 50 €/viikko' },
  { id: 'b2', label: '50–75 €/viikko' },
  { id: 'b3', label: '75–100 €/viikko' },
  { id: 'b4', label: '100 €+/viikko' },
] as const
