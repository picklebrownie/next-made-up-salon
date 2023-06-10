export type Person = {
  id:string, 
  name:string, 
  role:string, 
  bio:string, 
  imageUrl:string
  phone:string,
  email:string,
  color:string
}

export type People = Array<Person>

export const people = [
    {
      name: 'Lily',
      id: 'lily',
      role: 'Precision Cut Expert',
      phone: '+1 (555) 905-2345',
      email: 'lily@madeup.com',
      color: 'emerald',
      imageUrl:
        '/headshot-lily.png',
      bio: 'With over a decade of experience in the industry, Lily is a master of precision cuts and skilled in creating modern and classic styles alike. She has a talent for bringing out the best in every client\'s hair and loves to stay up-to-date with the latest hair trends and techniques. Lily\'s dedication to her craft shines through in every cut she delivers, making her a trusted stylist for her many loyal clients..',
    },
    {
      name: 'Rose',
      id: 'rose',
      role: 'Color Specialist',
      phone: '+1 (555) 905-3456',
      email: 'rose@madeup.com',
      color: 'yellow',
      imageUrl:
        '/headshot-rose.png',
      bio: 'Rose is a color specialist with a keen eye for creating stunning color transformations. She has a passion for experimenting with different shades and techniques, from subtle highlights to bold, fashion-forward hues. With years of experience under her belt, Rose has honed her skills to deliver flawless color results every time. Her commitment to her clients and love for her craft make her an invaluable member of the Lily and Rose team..',
    },
  ]

  /* <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  435 Street Road
                  <br />
                  Upinthere, TN 34568
                </dd>
              </div>
              </dl> */