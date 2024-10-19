export interface Category {
  id: number;
  name: string;
  children: Category[];
  parent: Category | null;
}

const categories = [
  {
    id: 1,
    name: "Почтовые отправления",
    children: [9, 9, 9, 9, 9, 9],
    parent: null,
  },
  {
    id: 2,
    name: "Почтовые переводы",
    children: [],
    parent: null,
  },
  {
    id: 3,
    name: "Платежи",
    children: [],
    parent: null,
  },
  {
    id: 4,
    name: "Стартовые пакеты мобильных операторов",
    children: [],
    parent: null,
  },
  {
    id: 5,
    name: "Товары народного потребления",
    children: [],
    parent: null,
  },
  {
    id: 6,
    name: "Подписка на газеты и журналы",
    children: [],
    parent: null,
  },
  {
    id: 7,
    name: "Написать заявление/обращение",
    children: [],
    parent: null,
  },
  {
    id: 8,
    name: "Выплата пенсий и пособий",
    children: [],
    parent: null,
  },
  {
    id: 9,
    name: "Отправить письменную корреспонденцию",
    children: [],
    parent: 1,
  },
];

export async function all(): Promise<Category[]> {
  return [
    {
      id: 1,
      name: "Почтовые отправления",
      children: [],
      parent: null,
    },
    {
      id: 2,
      name: "Почтовые переводы",
      children: [],
      parent: null,
    },
    {
      id: 3,
      name: "Платежи",
      children: [],
      parent: null,
    },
    {
      id: 4,
      name: "Стартовые пакеты мобильных операторов",
      children: [],
      parent: null,
    },
    {
      id: 5,
      name: "Товары народного потребления",
      children: [],
      parent: null,
    },
    {
      id: 6,
      name: "Подписка на газеты и журналы",
      children: [],
      parent: null,
    },
    {
      id: 7,
      name: "Написать заявление/обращение",
      children: [],
      parent: null,
    },
    {
      id: 8,
      name: "Выплата пенсий и пособий",
      children: [],
      parent: null,
    },
  ];
}

function getCat(id: Category["id"], skipParent: boolean = false): Category {
  const data = categories.find((c) => c.id == id)!;
  const children = data.children.map((c) => getCat(c));
  const parent = skipParent ? (data.parent ? getCat(data.parent) : null) : null;
  return {
    id: data.id,
    name: data.name,
    children,
    parent,
  };
}

export async function getCategory(id: Category["id"]): Promise<Category> {
  return getCat(id);
}
