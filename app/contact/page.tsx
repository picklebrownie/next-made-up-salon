import { ContactCallout, ContactSection } from "../Components/Contact"
import { people } from "../utils/people"

export default function Contact() {
    return (
        <>
        <ContactSection people={people.slice(0, 2)} />
        </>
    )
}
