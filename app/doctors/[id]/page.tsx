





// type Doctor {
//     id : number
//     name : string
//     depaetment : string
//     designation : string
//     img : string
// }



export default async function DoctorDetails(
  { params }: { params: Promise<{ id: string }> }
) {

    const { id } = await params   // 👈 THIS IS THE FIX

    const res = await fetch("http://localhost:3000/data/doctors.json", {
        cache: "no-store"
    })

    const doctors = await res.json()

    const doctor = doctors.find((d: any) => String(d.id) === String(id))

    if (!doctor) {
        return <h1>Doctor Not Found</h1>
    }

    return (
        <main className="p-10">
            <h1>{doctor.name}</h1>
            <p>{doctor.department}</p>
            <p>{doctor.designation}</p>
            <img src={doctor.image} alt={doctor.name} />
        </main>
    )
}