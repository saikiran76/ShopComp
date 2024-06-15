import { BiSolidCoffeeTogo } from "react-icons/bi";

export const Bar = () =>{
    const Liquids = [{
        id:1,
        liquid: "Ice Coffee",
        render:<BiSolidCoffeeTogo/>

    }, {
        id:2,
        liquid: "Hot Coffee",
        render:<BiSolidCoffeeTogo/>
    }, {
        id:3,
        liquid: "Artisan Tea",
        render:<BiSolidCoffeeTogo/>
    }, {
        id:4,
        liquid:"Ice Mojito",
        render:<BiSolidCoffeeTogo/>
    }, {
        id:5,
        liquid:"Beverage",
        render:<BiSolidCoffeeTogo/>
    },
    {
      id:6,
      liquid:"Drinks",
      render:<BiSolidCoffeeTogo/>
    },
    {
      id:7,
      liquid:"Juice",
      render:<BiSolidCoffeeTogo/>
    }
  ]

    return (
        <div className="flex gap-3 m-3 mb-5 overflow-x-auto">
          {Liquids.map((item) => (
            <div className="p-2 flex gap-3 items-center bg-white rounded hover:text-white cursor-pointer hover:bg-[#89A9D1] shadow-lg duration-500" key={item.id}>
              <p className="text-[0.55rem] md:text-sm font-bold flex items-center gap-1">
                {item.render}
                {item.liquid}
              </p>
            </div>
          ))}
        </div>
      );
}