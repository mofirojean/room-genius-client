export interface Room {
    room_type: string
    description: string
    image: string
}

export const HOTEL_ROOM: Room[] = [
    {
        room_type: "Family Room", 
        description: "Large room with two double beds and a pool view. Kids stay for free",
        image: "../../../assets/images/hootel_bed_1.jpg"
    },
    {
        room_type: "Standard Room",
        description: "Spacious room with a king size bed and a balcony overlooking the landscape of bamenda",
        image: "../../../assets/images/hotel_bed_2.jpg"
    },
    {
        room_type: "Luxury Suite",
        description: "Cozy room with a queen size bed abd a city view. Free Breakfast included",
        image: "../../../assets/images/hotel_bed_2.jpg"
    },
    {
        room_type: "Meeting Room",
        description: "Professional space with conference table and projector. Complementary",
        image: "../../../assets/images/hotel_bed_3.jpg"
    }
]

