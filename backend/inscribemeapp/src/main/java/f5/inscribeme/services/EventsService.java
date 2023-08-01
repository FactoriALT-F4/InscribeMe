package f5.inscribeme.services;

import f5.inscribeme.models.Events;
import f5.inscribeme.repositories.EventsRepo;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

import java.util.Optional;

@Service
public class EventsService {

    private final EventsRepo eventsRepo;

    @Autowired
    public EventsService(EventsRepo eventsRepository) {
        this.eventsRepo = eventsRepository;
    }

    public List<Events> getAllEvents() {
        return eventsRepo.findAll();
    }

    public Events getEventById(Long id) {
        Optional<Events> optionalEvent = eventsRepo.findById(id);
        return optionalEvent.orElse(null);
    }

    public Events createEvent(Events event) {
        return eventsRepo.save(event);
    }

    public Events updateEvent(Long id, Events event) {
        Events existingEvent = getEventById(id);
        if (existingEvent != null) {
            event.setIdevents(existingEvent.getIdevents());
            return eventsRepo.save(event);
        } else {
            return null;
        }
    }

    public boolean deleteEvent(Long id) {
        if (getEventById(id) != null) {
            eventsRepo.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
    @PostConstruct
    public void insertInitialData() {
        List<Events> eventsList = Arrays.asList(
                new Events("OktoberFest", "¡Ven y disfruta de cervezas y comida en el Oktoberfest! La fiesta de la cerveza más grande del mundo te espera.", LocalDateTime.of(2023, 10, 1, 17, 0),
                        LocalDateTime.of(2023, 10, 2, 3, 0), LocalDateTime.of(2023, 7, 27, 10, 0), 21L, 100L, "/img/img1.jpg"),
                new Events("Summer Music", "¡Vive la mejor experiencia musical del verano en nuestro festival!", LocalDateTime.of(2023, 8, 3, 15, 0),
                        LocalDateTime.of(2023, 8, 4, 20, 0), LocalDateTime.of(2023, 7, 27, 11, 0), 70L, 120L, "/img/img2.jpg"),
                new Events("ArtCont", "¡Sumérgete en el fascinante mundo del arte contemporáneo en nuestra exposición!", LocalDateTime.of(2023, 8, 3, 15, 0),
                        LocalDateTime.of(2023, 8, 4, 20, 0), LocalDateTime.of(2023, 7, 27, 11, 0), 70L, 120L, "/img/img3.jpg"),
                new Events("World Foodies", "¡Saborea el mundo en nuestro Festival Gastronómico Internacional!", LocalDateTime.of(2023, 8, 3, 15, 0),
                        LocalDateTime.of(2023, 8, 4, 20, 0), LocalDateTime.of(2023, 7, 27, 11, 0), 70L, 120L, "/img/img4.jpg"),
                new Events("Cine Abierto", "¡Ven a disfrutar de una Noche de Cine al Aire Libre bajo las estrellas!", LocalDateTime.of(2023, 8, 3, 15, 0),
                        LocalDateTime.of(2023, 8, 4, 20, 0), LocalDateTime.of(2023, 7, 27, 11, 0), 70L, 120L, "/img/img5.jpg"),
                new Events("XI Feria del Libro", "¡Explora un mundo de palabras en nuestra Feria del Libro y la Lectura!", LocalDateTime.of(2023, 8, 3, 15, 0),
                        LocalDateTime.of(2023, 8, 4, 20, 0), LocalDateTime.of(2023, 7, 27, 11, 0), 70L, 120L, "/img/img6.jpg"),
                new Events("Cuidate", "¡Únete a la Fiesta de la Salud y el Bienestar!", LocalDateTime.of(2023, 8, 3, 15, 0),
                        LocalDateTime.of(2023, 8, 4, 20, 0), LocalDateTime.of(2023, 7, 27, 11, 0), 70L, 120L, "/img/img7.jpg"),
                new Events("Style Week", "¡Descubre la Pasarela de Moda y Tendencias más emocionante!", LocalDateTime.of(2023, 8, 3, 15, 0),
                        LocalDateTime.of(2023, 8, 4, 20, 0), LocalDateTime.of(2023, 7, 27, 11, 0), 70L, 120L, "/img/img8.jpg"),
                new Events("TechCon", "¡Asiste a la Conferencia de Tecnología e Innovación del futuro!", LocalDateTime.of(2023, 8, 3, 15, 0),
                        LocalDateTime.of(2023, 8, 4, 20, 0), LocalDateTime.of(2023, 7, 27, 11, 0), 70L, 120L, "/img/img9.jpg"),
                new Events("Vinotopia", "¡Embárcate en un viaje sensorial con nuestra Cata de Vinos de diferentes regiones!", LocalDateTime.of(2023, 8, 3, 15, 0),
                        LocalDateTime.of(2023, 8, 4, 20, 0), LocalDateTime.of(2023, 7, 27, 11, 0), 70L, 120L, "/img/img10.jpg"),
                new Events("FamilyFest: Carnaval", "¡Únete a FamilyFest: Carnaval de Diversión para Niños y Familias", LocalDateTime.of(2023, 8, 3, 15, 0),
                        LocalDateTime.of(2023, 8, 4, 20, 0), LocalDateTime.of(2023, 7, 27, 11, 0), 70L, 120L, "/img/img11.jpg"),
                new Events("ComedyFest", "¡Ríete a carcajadas en nuestro ComedyFest: Espectáculo de Comedia en Vivo!", LocalDateTime.of(2023, 8, 3, 15, 0),
                        LocalDateTime.of(2023, 8, 4, 20, 0), LocalDateTime.of(2023, 7, 27, 11, 0), 70L, 120L, "/img/img12.jpg"),
                new Events("DanceNight", "¡Ven a vivir una DanceNight: Noche de Baile y Música inolvidable!", LocalDateTime.of(2023, 8, 3, 15, 0),
                        LocalDateTime.of(2023, 8, 4, 20, 0), LocalDateTime.of(2023, 7, 27, 11, 0), 70L, 120L, "/img/img13.jpg"),
                new Events("HopeGala", "¡Únete a nuestra HopeGala: Gala Benéfica para Causas Sociales!", LocalDateTime.of(2023, 8, 3, 15, 0),
                        LocalDateTime.of(2023, 8, 4, 20, 0), LocalDateTime.of(2023, 7, 27, 11, 0), 70L, 120L, "/img/img14.jpg"),
                new Events("LocalSportFest", "¡Participa en nuestro LocalSportFest: Torneo de Deportes Locales!", LocalDateTime.of(2023, 8, 3, 15, 0),
                        LocalDateTime.of(2023, 8, 4, 20, 0), LocalDateTime.of(2023, 7, 27, 11, 0), 70L, 120L, "/img/img15.jpg"),
                new Events("Horror Fest", "¡Atrévete a vivir la HorrorFest: Noche del Terror y Películas de Horror!", LocalDateTime.of(2023, 8, 3, 15, 0),
                        LocalDateTime.of(2023, 8, 4, 20, 0), LocalDateTime.of(2023, 7, 27, 11, 0), 70L, 120L, "/img/img16.jpg"),
                new Events("SciTech", "¡Bienvenidos a nuestra SciTechExpo: Exposición Científica y Tecnológica!", LocalDateTime.of(2023, 8, 3, 15, 0),
                        LocalDateTime.of(2023, 8, 4, 20, 0), LocalDateTime.of(2023, 7, 27, 11, 0), 70L, 120L, "/img/img17.jpg"),
                new Events("Retro Car", "¡Descubre la RetroCarExpo: Exhibición de Autos Clásicos!", LocalDateTime.of(2023, 8, 3, 15, 0),
                        LocalDateTime.of(2023, 8, 4, 20, 0), LocalDateTime.of(2023, 7, 27, 11, 0), 70L, 120L, "/img/img18.jpg"),
                new Events("BeachBlast", "¡Ven y únete a la BeachBlast: Fiesta en la Playa con Música y Diversión! ", LocalDateTime.of(2023, 8, 3, 15, 0),
                        LocalDateTime.of(2023, 8, 4, 20, 0), LocalDateTime.of(2023, 7, 27, 11, 0), 70L, 120L, "/img/img19.jpg"),
                new Events("Art Spark", "¡Descubre tu creatividad en nuestro ArtSpark: Taller de Arte para Principiantes!", LocalDateTime.of(2023, 8, 3, 15, 0),
                        LocalDateTime.of(2023, 8, 4, 20, 0), LocalDateTime.of(2023, 7, 27, 11, 0), 70L, 120L, "/img/img20.jpg")

        );

        eventsRepo.saveAll(eventsList);
    }
}