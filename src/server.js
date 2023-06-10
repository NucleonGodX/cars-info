import { createServer, Model } from "miragejs"


createServer({
    models: {
        vans: Model,
    },

    seeds(server) {
        server.create("van", { id: "1", name: "Rolls-Royce Phantom", price: "50,000", description: "The grandest and greatest luxury conveyance in motordom was replaced by Rolls-Royce in 2017 and given a glittering five-star road test welcome by our road testers shortly thereafter. The Phantom was subsequently updated in 2022, given subtle design and equipment tweaks, and we expect to test the updated version very soon.", imageUrl: "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/rolls_royce_phantom_top_10.jpg?itok=P4JYsn-X", type: "Ultimate-Luxury" })
        server.create("van", { id: "4", name: "BMW i7", price: "20,000", description: "The BMW limousine has just taken a huge stride into the future with the introduction of the first electric 7 Series, called the BMW i7. While its street-tough styling doesn't quite level with the refined elegance of some the cars elsewhere on this list, there can be no denying its claims as a luxury operator. Lavish and refined to travel in, with on-board technology options that even Rolls-Royce, Bentley and Tesla don't offer, the i7 is probably the greatest luxury EV of the moment.", imageUrl: "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/bmw_i7_top_10.jpg?itok=_U_FkyCu", type: "Sports" })
        server.create("van", { id: "3", name: " Bentley Flying Spur", price: "20,000", description: "But the Flying Spur, now in its third generation, isn't so difficult to distinguish from the related two-door coupé, thanks to its prouder, more muscular design. Crewe's luxury saloon also benefits dramatically from a new platform, which was co-developed with Porsche and uses four-wheel steering and active anti-roll bars. It also better insulates the fantastically opulent cabin from the road and provides the basis for genuinely good driving dynamics. Grip, balance and steering are all noticeably improved.", imageUrl: "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/bentley_flying_spur_top_10.jpg?itok=S46_2hDH", type: "Sports" })
        server.create("van", { id: "5", name: "Mercedes-Maybach S-Class", price: "25,000", description: "To judge by appearances, you would say it was at least as much S-Class as Maybach, and that's the result of Daimler's strategic decision, taken a few years ago, to broaden the reach of the Maybach marque by creating 'halo' Maybach models across some of its more normal Mercedes car ranges. The ultra-rare, Simon Cowell-spec, Maybach-only 57 and 62 limousines were at the same time consigned to history.", imageUrl: "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/mercedes-maybach-s-class_top_10.jpg?itok=PZxoKqGW", type: "Comfort" })
        server.create("van", { id: "2", name: "Rolls-Royce Ghost", price: "30,000", description: "Now in its second generation, the Phantom's understudy has evolved substantially. Where the Ghost's mechanical underpinnings were once adapted from those of the BMW 7 Series, it now shares the same Architecture of Luxury platform as the Phantom and the Cullinan SUV. There are also innovations, such as Rolls-Royce's mass dampers for the front suspension and an active anti-roll bar for the rear axle, both of which help bring ride quality closer than ever to that of the Phantom.", imageUrl: "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/rolls_royce_ghost_top_10.jpg?itok=E8K24ujB", type: "Ultimate-Luxury" })
        server.create("van", { id: "6", name: "Range Rover", price: "10,000", description: "Goodwood's Marmite addition to the super-luxury segment arrived in 2018, in response to a significant amount of Rolls-Royce customer feedback that a more daily-usable, all-surface-capable, family-practical model would be a very welcome way to augment the firm's showroom range.", imageUrl: "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/range_rover_top_10.jpg?itok=OjZ_zfjq", type: "Comfort" })
    },

    routes() {
        this.namespace = "api"
        this.logging = false

        this.get("/vans", (schema, request) => {
            return schema.vans.all()
        })
        
        this.get("/vans/:id", (schema, request) => {
            const id = request.params.id
            return schema.vans.find(id)
        })
    }
})