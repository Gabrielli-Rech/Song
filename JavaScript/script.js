// Referências aos elementos
const sidebar = document.getElementById("sidebar");
const toggleSidebarButton = document.getElementById("toggleSidebar");

// Alterna entre abrir e fechar a barra lateral
toggleSidebarButton.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");

    // Atualiza o ícone do botão
    if (sidebar.classList.contains("hidden")) {
        toggleSidebarButton.textContent = "☰"; // Ícone de abrir
    } else {
        toggleSidebarButton.textContent = "✕"; // Ícone de fechar
    }
});

// Atualiza o player (restante do script permanece igual)
const musicPlayer = document.getElementById("musicPlayer");
const musicTitle = document.getElementById("music-title");
const artistName = document.getElementById("artist-name");
const albumArt = document.getElementById("albumArt");
const quoteElement = document.getElementById("quote");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const tracks = [
    {
        title: "I Wanna Be Yours",
        artist: "Arctic Monkeys",
        src: "Musicas/Arctic-Monkeys-I-Wanna-Be-Yours-(RawPraise.ng).mp3",
        albumArt: "img/musica1.jpg",
        quote: "Quero ser a presença silenciosa que te envolve, a certeza constante em meio às incertezas, e a promessa de estar sempre ao teu lado."
    },
    {
        title: "I Took A Pill In Ibiza",
        artist: " Mike Posner",
        src: "Musicas/'I Took A Pill In Ibiza.mp3",
        albumArt: "img/musica2.jpg",
        quote: "Às vezes, é nas madrugadas solitárias que percebemos que o verdadeiro tesouro está no amor que encontramos, não na fama que buscamos."
    },
    {
        title: "Monster",
        artist: "Exo",
        src: "Musicas/Monster.mp3",
        albumArt: "img/musica3.webp",
        quote: "A verdadeira força não está em esconder quem você é, mas em abraçar suas feras interiores e usá-las para seguir em frente."
    },
    {
        title: "Girassóis de Van Gogh",
        artist: "Baco",
        src: "Musicas/Girassóis de Van Gogh.mp3",
        albumArt: "img/girassoeisdevangogh.jpg",
        quote: "Te carrego no pensamento, cada detalhe teu é uma lembrança que me mantém acordado na madrugada."
    },
    {
        title: "Another Brick In The Wall (Part 2)",
        artist: "Artista 3",
        src: "Musicas/Another Brick In The Wall (Part 2).mp3",
        albumArt: "img/musica5.jpg",
        quote: "Frase da terceira música."
    },
    {
        title: "Baggy Jeans",
        artist: "Artista 3",
        src: "Musicas/Baggy Jeans.mp3",
        albumArt: "img/musica6.jpg",
        quote: "Frase da terceira música."
    },
    {
        title: "Blood Sweat & Tears",
        artist: "BTS",
        src: "Musicas/Blood Sweat & Tears.mp3",
        albumArt: "img/musica7.jpg",
        quote: "Frase da terceira música."
    },
    {
        title: "Bohemian Rhapsody (Remastered 2011)",
        artist: "Quenn",
        src: "Musicas/Bohemian Rhapsody (Remastered 2011).mp3",
        albumArt: "img/musica8.jpg",
        quote: "Frase da terceira música."
    },
    {
        title: "CALL ME BABY",
        artist: "Artista 3",
        src: "Musicas/CALL ME BABY.mp3",
        albumArt: "img/musica9.jpg",
        quote: "Frase da terceira música."
    },
    {
        title: "DNA",
        artist: "BTS",
        src: "Musicas/DNA.mp3",
        albumArt: "img/musica10.jpg",
        quote: "Frase da terceira música."
    },
    {
        title: "FAKE LOVE",
        artist: "BTS",
        src: "Musicas/FAKE LOVE.mp3",
        albumArt: "img/musica11.webp",
        quote: "Frase da terceira música."
    },
    {
        title: "Música 3",
        artist: "Artista 3",
        src: "musica3.mp3",
        albumArt: "img/musica14.webp",
        quote: "Frase da terceira música."
    },
    {
        title: "Música 3",
        artist: "Artista 3",
        src: "musica3.mp3",
        albumArt: "img/musica15.webp",
        quote: "Frase da terceira música."
    },
    {
        title: "Música 3",
        artist: "Artista 3",
        src: "musica3.mp3",
        albumArt: "img/musica16.webp",
        quote: "Frase da terceira música."
    },
    {
        title: "Música 3",
        artist: "Artista 3",
        src: "musica3.mp3",
        albumArt: "img/musica17.jpg",
        quote: "Frase da terceira música."
    },
    {
        title: "Música 3",
        artist: "Artista 3",
        src: "musica3.mp3",
        albumArt: "img/musica18.avif",
        quote: "Frase da terceira música."
    },
    {
        title: "Música 3",
        artist: "Artista 3",
        src: "musica3.mp3",
        albumArt: "img/musica19.jpg",
        quote: "Frase da terceira música."
    },
    {
        title: "Música 3",
        artist: "Artista 3",
        src: "musica3.mp3",
        albumArt: "img/musica20.jpg",
        quote: "Frase da terceira música."
    },
    {
        title: "Música 3",
        artist: "Artista 3",
        src: "musica3.mp3",
        albumArt: "album3.jpg",
        quote: "Frase da terceira música."
    },
    {
        title: "Música 3",
        artist: "Artista 3",
        src: "musica3.mp3",
        albumArt: "album3.jpg",
        quote: "Frase da terceira música."
    },
    {
        title: "Música 3",
        artist: "Artista 3",
        src: "musica3.mp3",
        albumArt: "album3.jpg",
        quote: "Frase da terceira música."
    },
    {
        title: "Música 3",
        artist: "Artista 3",
        src: "musica3.mp3",
        albumArt: "album3.jpg",
        quote: "Frase da terceira música."
    },
    {
        title: "Música 3",
        artist: "Artista 3",
        src: "musica3.mp3",
        albumArt: "album3.jpg",
        quote: "Frase da terceira música."
    },
    {
        title: "Música 3",
        artist: "Artista 3",
        src: "musica3.mp3",
        albumArt: "album3.jpg",
        quote: "Frase da terceira música."
    },
    {
        title: "Música 3",
        artist: "Artista 3",
        src: "musica3.mp3",
        albumArt: "album3.jpg",
        quote: "Frase da terceira música."
    },
    {
        title: "Música 3",
        artist: "Artista 3",
        src: "musica3.mp3",
        albumArt: "album3.jpg",
        quote: "Frase da terceira música."
    },
    {
        title: "Música 3",
        artist: "Artista 3",
        src: "musica3.mp3",
        albumArt: "album3.jpg",
        quote: "Frase da terceira música."
    },
    {
        title: "Música 3",
        artist: "Artista 3",
        src: "musica3.mp3",
        albumArt: "album3.jpg",
        quote: "Frase da terceira música."
    },
    {
        title: "Música 3",
        artist: "Artista 3",
        src: "musica3.mp3",
        albumArt: "album3.jpg",
        quote: "Frase da terceira música."
    },
    {
        title: "Música 3",
        artist: "Artista 3",
        src: "musica3.mp3",
        albumArt: "album3.jpg",
        quote: "Frase da terceira música."
    },
    {
        title: "Música 3",
        artist: "Artista 3",
        src: "musica3.mp3",
        albumArt: "album3.jpg",
        quote: "Frase da terceira música."
    },
    {
        title: "Música 3",
        artist: "Artista 3",
        src: "musica3.mp3",
        albumArt: "album3.jpg",
        quote: "Frase da terceira música."
    },
    {
        title: "Música 3",
        artist: "Artista 3",
        src: "musica3.mp3",
        albumArt: "album3.jpg",
        quote: "Frase da terceira música."
    },
    {
        title: "Música 3",
        artist: "Artista 3",
        src: "musica3.mp3",
        albumArt: "album3.jpg",
        quote: "Frase da terceira música."
    },
    {
        title: "Música 3",
        artist: "Artista 3",
        src: "musica3.mp3",
        albumArt: "album3.jpg",
        quote: "Frase da terceira música."
    },
    {
        title: "Música 3",
        artist: "Artista 3",
        src: "musica3.mp3",
        albumArt: "album3.jpg",
        quote: "Frase da terceira música."
    },
    {
        title: "Música 3",
        artist: "Artista 3",
        src: "musica3.mp3",
        albumArt: "album3.jpg",
        quote: "Frase da terceira música."
    },
    {
        title: "Música 3",
        artist: "Artista 3",
        src: "musica3.mp3",
        albumArt: "album3.jpg",
        quote: "Frase da terceira música."
    },
    {
        title: "Música 3",
        artist: "Artista 3",
        src: "musica3.mp3",
        albumArt: "album3.jpg",
        quote: "Frase da terceira música."
    },
    {
        title: "Música 3",
        artist: "Artista 3",
        src: "musica3.mp3",
        albumArt: "album3.jpg",
        quote: "Frase da terceira música."
    },
    {
        title: "Música 3",
        artist: "Artista 3",
        src: "musica3.mp3",
        albumArt: "album3.jpg",
        quote: "Frase da terceira música."
    },
    {
        title: "Música 3",
        artist: "Artista 3",
        src: "musica3.mp3",
        albumArt: "album3.jpg",
        quote: "Frase da terceira música."
    },
    {
        title: "Música 3",
        artist: "Artista 3",
        src: "musica3.mp3",
        albumArt: "album3.jpg",
        quote: "Frase da terceira música."
    },
    {
        title: "Música 3",
        artist: "Artista 3",
        src: "musica3.mp3",
        albumArt: "album3.jpg",
        quote: "Frase da terceira música."
    },
    {
        title: "Música 3",
        artist: "Artista 3",
        src: "musica3.mp3",
        albumArt: "album3.jpg",
        quote: "Frase da terceira música."
    },
    {
        title: "Música 3",
        artist: "Artista 3",
        src: "musica3.mp3",
        albumArt: "album3.jpg",
        quote: "Frase da terceira música."
    },
    {
        title: "Música 3",
        artist: "Artista 3",
        src: "musica3.mp3",
        albumArt: "album3.jpg",
        quote: "Frase da terceira música."
    },
    {
        title: "Música 3",
        artist: "Artista 3",
        src: "musica3.mp3",
        albumArt: "album3.jpg",
        quote: "Frase da terceira música."
    },
    {
        title: "Música 3",
        artist: "Artista 3",
        src: "musica3.mp3",
        albumArt: "album3.jpg",
        quote: "Frase da terceira música."
    },
    {
        title: "Música 3",
        artist: "Artista 3",
        src: "musica3.mp3",
        albumArt: "album3.jpg",
        quote: "Frase da terceira música."
    },
    {
        title: "Música 3",
        artist: "Artista 3",
        src: "musica3.mp3",
        albumArt: "album3.jpg",
        quote: "Frase da terceira música."
    },
    {
        title: "Música 3",
        artist: "Artista 3",
        src: "musica3.mp3",
        albumArt: "album3.jpg",
        quote: "Frase da terceira música."
    }
];

let currentTrack = 0;

function updatePlayer() {
    const track = tracks[currentTrack];
    musicTitle.textContent = track.title;
    artistName.textContent = track.artist;
    albumArt.src = track.albumArt;
    musicPlayer.src = track.src;
    quoteElement.textContent = track.quote;
}

// Event listeners para os botões de navegação
document.getElementById('prevButton').addEventListener('click', () => {
    currentTrack = (currentTrack - 1 + tracks.length) % tracks.length; // Vai para a música anterior
    updatePlayer();
});

document.getElementById('nextButton').addEventListener('click', () => {
    currentTrack = (currentTrack + 1) % tracks.length; // Vai para a próxima música
    updatePlayer();
});

// Atualiza o player na primeira carga da página
updatePlayer();

// Atualiza o player automaticamente ao final da música
musicPlayer.addEventListener("ended", () => {
    currentTrack = (currentTrack + 1) % tracks.length;
    updatePlayer();
});
