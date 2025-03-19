"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Users,
  Landmark,
  Music,
  Palette,
  Sunset,
  Coffee,
  Wifi,
  Umbrella,
  Flower,
  UmbrellaOff,
  Waves,
  Utensils,
  ParkingCircle,
  Bed,
  Camera,
  Sunrise,
  Sun,
  Leaf,
  Snowflake,
} from "lucide-react";

interface VenueDetailsSectionProps {
  handleWhatsAppClick: () => void;
}

export default function VenueDetailsSection({
  handleWhatsAppClick,
}: VenueDetailsSectionProps) {
  // Remove the unused state variable

  return (
    <section
      id="venue"
      className="py-12 sm:py-16 text-black md:py-20 lg:py-28 bg-gradient-to-b from-white to-rose-50"
    >
      <div className="container px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16 space-y-2 sm:space-y-4">
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-6 sm:w-10 bg-rose-400"></div>
            <span className="text-rose-600 uppercase tracking-wider text-xs sm:text-sm font-medium">
              Venue Kami
            </span>
            <div className="h-px w-6 sm:w-10 bg-rose-400"></div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold tracking-tight text-gray-900">
            Jelajahi Keindahan Venue Kami
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700">
            Harmoni Wedding Venue menawarkan berbagai pilihan ruang yang dapat
            disesuaikan dengan kebutuhan pernikahan Anda.
          </p>
        </div>

        <Tabs defaultValue="indoor" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-6 sm:mb-8 p-1 bg-rose-100 rounded-full">
            <TabsTrigger
              value="indoor"
              className="rounded-full data-[state=active]:bg-white data-[state=active]:text-rose-600 data-[state=active]:shadow-sm py-2 sm:py-3 text-xs sm:text-sm"
            >
              Indoor
            </TabsTrigger>
            <TabsTrigger
              value="outdoor"
              className="rounded-full data-[state=active]:bg-white data-[state=active]:text-rose-600 data-[state=active]:shadow-sm py-2 sm:py-3 text-xs sm:text-sm"
            >
              Outdoor
            </TabsTrigger>
            <TabsTrigger
              value="facilities"
              className="rounded-full data-[state=active]:bg-white data-[state=active]:text-rose-600 data-[state=active]:shadow-sm py-2 sm:py-3 text-xs sm:text-sm"
            >
              Fasilitas Tambahan
            </TabsTrigger>
          </TabsList>

          <TabsContent value="indoor" className="space-y-8">
            <IndoorVenues />
          </TabsContent>

          <TabsContent value="outdoor" className="space-y-8">
            <OutdoorVenues />
          </TabsContent>

          <TabsContent value="facilities" className="space-y-8">
            <AdditionalFacilities />
          </TabsContent>
        </Tabs>

        <div className="text-center mt-8 sm:mt-12">
          <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
            Ingin melihat venue kami secara langsung?
          </p>
          <Button
            onClick={handleWhatsAppClick}
            variant="green"
            rounded="full"
            size="lg"
            className="gap-2 px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-lg"
          >
            Jadwalkan Kunjungan via WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}

function IndoorVenues() {
  const venues = [
    {
      name: "Grand Ballroom",
      description:
        "Ballroom utama kami adalah ruangan megah dengan luas 1.000 m² yang dapat menampung hingga 500 tamu. Dengan langit-langit tinggi 8 meter yang dihiasi chandelier kristal mewah, ruangan ini menawarkan kemewahan dan keanggunan untuk resepsi pernikahan Anda.",
      image: "/images/IMG_20240221_110848.jpg",
      features: [
        {
          icon: <Users className="h-4 w-4 sm:h-5 sm:w-5 text-rose-500" />,
          text: "Kapasitas: 500 tamu",
        },
        {
          icon: <Landmark className="h-4 w-4 sm:h-5 sm:w-5 text-rose-500" />,
          text: "Luas: 1.000 m²",
        },
        {
          icon: <Music className="h-4 w-4 sm:h-5 sm:w-5 text-rose-500" />,
          text: "Sistem audio premium",
        },
        {
          icon: <Palette className="h-4 w-4 sm:h-5 sm:w-5 text-rose-500" />,
          text: "Pencahayaan adjustable",
        },
      ],
      reverse: false,
    },
    {
      name: "Crystal Hall",
      description:
        "Crystal Hall adalah ruangan yang lebih intim dengan kapasitas 200 tamu. Dinding kaca yang menghadap ke taman memberikan pemandangan alam yang indah dan pencahayaan alami. Ruangan ini ideal untuk pernikahan dengan jumlah tamu yang lebih kecil atau untuk acara pre-wedding seperti lamaran atau akad nikah.",
      image: "/images/IMG_20240221_112743.jpg",
      features: [
        {
          icon: <Users className="h-4 w-4 sm:h-5 sm:w-5 text-rose-500" />,
          text: "Kapasitas: 200 tamu",
        },
        {
          icon: <Landmark className="h-4 w-4 sm:h-5 sm:w-5 text-rose-500" />,
          text: "Luas: 400 m²",
        },
        {
          icon: <Sunset className="h-4 w-4 sm:h-5 sm:w-5 text-rose-500" />,
          text: "Pemandangan taman",
        },
        {
          icon: <Palette className="h-4 w-4 sm:h-5 sm:w-5 text-rose-500" />,
          text: "Dinding kaca",
        },
      ],
      reverse: true,
    },
    {
      name: "Bridal Suite",
      description:
        "Bridal Suite kami adalah ruangan mewah yang dirancang khusus untuk persiapan pengantin. Dengan luas 100 m², ruangan ini dilengkapi dengan area rias dengan pencahayaan profesional, kamar ganti, kamar mandi pribadi, dan area santai untuk keluarga dekat. Ruangan ini juga menyediakan layanan katering khusus untuk pengantin dan keluarga.",
      image: "/images/SCF9146.jpg",
      features: [
        {
          icon: <Users className="h-4 w-4 sm:h-5 sm:w-5 text-rose-500" />,
          text: "Kapasitas: 20 orang",
        },
        {
          icon: <Landmark className="h-4 w-4 sm:h-5 sm:w-5 text-rose-500" />,
          text: "Luas: 100 m²",
        },
        {
          icon: <Coffee className="h-4 w-4 sm:h-5 sm:w-5 text-rose-500" />,
          text: "Layanan katering",
        },
        {
          icon: <Wifi className="h-4 w-4 sm:h-5 sm:w-5 text-rose-500" />,
          text: "WiFi kecepatan tinggi",
        },
      ],
      reverse: false,
    },
  ];

  return (
    <>
      {venues.map((venue, index) => (
        <div
          key={index}
          className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center mb-8 sm:mb-0"
        >
          <div
            className={`relative ${
              venue.reverse ? "order-2 md:order-1" : "order-2 md:order-2"
            }`}
          >
            {!venue.reverse && (
              <Image
                src={venue.image || "/placeholder.svg"}
                alt={venue.name}
                width={800}
                height={600}
                className="rounded-xl sm:rounded-2xl shadow-lg object-cover w-full h-auto"
              />
            )}
          </div>
          <div className="space-y-2 sm:space-y-4 order-1 md:order-1">
            <h3 className="text-xl sm:text-2xl font-serif font-bold">
              {venue.name}
            </h3>
            <p className="text-sm sm:text-base text-gray-700">
              {venue.description}
            </p>
            <div className="grid grid-cols-2 gap-2 sm:gap-4 mt-2 sm:mt-4">
              {venue.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-1 sm:gap-2">
                  {feature.icon}
                  <span className="text-xs sm:text-sm">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`relative ${
              venue.reverse ? "order-1 md:order-2" : "hidden md:block"
            }`}
          >
            {venue.reverse && (
              <Image
                src={venue.image || "/placeholder.svg"}
                alt={venue.name}
                width={800}
                height={600}
                className="rounded-xl sm:rounded-2xl shadow-lg object-cover w-full h-auto"
              />
            )}
          </div>
        </div>
      ))}
    </>
  );
}

function OutdoorVenues() {
  const venues = [
    {
      name: "Garden Pavilion",
      description:
        "Garden Pavilion kami adalah area outdoor yang dikelilingi oleh taman tropis yang indah. Dengan luas 800 m², area ini dapat menampung hingga 300 tamu. Paviliun utama dilengkapi dengan atap permanen yang elegan, sehingga acara Anda tetap berjalan lancar dalam segala cuaca. Area ini sangat populer untuk upacara pernikahan dengan latar belakang alam yang menakjubkan.",
      image: "/images/outdor.jpg",
      features: [
        {
          icon: <Users className="h-4 w-4 sm:h-5 sm:w-5 text-rose-500" />,
          text: "Kapasitas: 300 tamu",
        },
        {
          icon: <Landmark className="h-4 w-4 sm:h-5 sm:w-5 text-rose-500" />,
          text: "Luas: 800 m²",
        },
        {
          icon: <Umbrella className="h-4 w-4 sm:h-5 sm:w-5 text-rose-500" />,
          text: "Atap permanen",
        },
        {
          icon: <Flower className="h-4 w-4 sm:h-5 sm:w-5 text-rose-500" />,
          text: "Taman tropis",
        },
      ],
      reverse: false,
    },
    {
      name: "Lakeside Terrace",
      description:
        "Lakeside Terrace adalah area outdoor yang menghadap ke danau buatan dengan air mancur yang indah. Area ini dapat menampung hingga 150 tamu dan sangat ideal untuk cocktail reception atau acara intimate wedding. Pemandangan matahari terbenam di atas danau menciptakan latar belakang yang romantis untuk foto pernikahan Anda.",
      image:
        "/images/Snapinst.app_470917536_18015784175661142_1770618019330661764_n_1080.jpg",
      features: [
        {
          icon: <Users className="h-4 w-4 sm:h-5 sm:w-5 text-rose-500" />,
          text: "Kapasitas: 150 tamu",
        },
        {
          icon: <Landmark className="h-4 w-4 sm:h-5 sm:w-5 text-rose-500" />,
          text: "Luas: 350 m²",
        },
        {
          icon: <Waves className="h-4 w-4 sm:h-5 sm:w-5 text-rose-500" />,
          text: "Pemandangan danau",
        },
        {
          icon: <Sunset className="h-4 w-4 sm:h-5 sm:w-5 text-rose-500" />,
          text: "Sunset view",
        },
      ],
      reverse: true,
    },
    {
      name: "Rose Garden",
      description:
        "Rose Garden adalah area yang dikelilingi oleh berbagai jenis mawar yang indah. Dengan gazebo putih di tengahnya, area ini ideal untuk upacara pernikahan yang intim dengan kapasitas hingga 100 tamu. Aroma mawar yang menyegarkan dan keindahan bunga-bunga menciptakan suasana yang romantis dan mempesona.",
      image: "/images/1548244210.jpg",
      features: [
        {
          icon: <Users className="h-4 w-4 sm:h-5 sm:w-5 text-rose-500" />,
          text: "Kapasitas: 100 tamu",
        },
        {
          icon: <Landmark className="h-4 w-4 sm:h-5 sm:w-5 text-rose-500" />,
          text: "Luas: 250 m²",
        },
        {
          icon: <Flower className="h-4 w-4 sm:h-5 sm:w-5 text-rose-500" />,
          text: "Koleksi mawar",
        },
        {
          icon: <UmbrellaOff className="h-4 w-4 sm:h-5 sm:w-5 text-rose-500" />,
          text: "Gazebo putih",
        },
      ],
      reverse: false,
    },
  ];

  return (
    <>
      {venues.map((venue, index) => (
        <div
          key={index}
          className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center mb-8 sm:mb-0"
        >
          <div
            className={`relative ${
              venue.reverse ? "order-2 md:order-1" : "order-2 md:order-2"
            }`}
          >
            {!venue.reverse && (
              <Image
                src={venue.image || "/placeholder.svg"}
                alt={venue.name}
                width={800}
                height={600}
                className="rounded-xl sm:rounded-2xl shadow-lg object-cover w-full h-auto"
              />
            )}
          </div>
          <div className="space-y-2 sm:space-y-4 order-1 md:order-1">
            <h3 className="text-xl sm:text-2xl font-serif font-bold">
              {venue.name}
            </h3>
            <p className="text-sm sm:text-base text-gray-700">
              {venue.description}
            </p>
            <div className="grid grid-cols-2 gap-2 sm:gap-4 mt-2 sm:mt-4">
              {venue.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-1 sm:gap-2">
                  {feature.icon}
                  <span className="text-xs sm:text-sm">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`relative ${
              venue.reverse ? "order-1 md:order-2" : "hidden md:block"
            }`}
          >
            {venue.reverse && (
              <Image
                src={venue.image || "/placeholder.svg"}
                alt={venue.name}
                width={800}
                height={600}
                className="rounded-xl sm:rounded-2xl shadow-lg object-cover w-full h-auto"
              />
            )}
          </div>
        </div>
      ))}
    </>
  );
}

function AdditionalFacilities() {
  const facilities = [
    {
      icon: <Utensils className="h-4 w-4 sm:h-5 sm:w-5 text-rose-600" />,
      title: "Dapur Profesional",
      description:
        "Dapur profesional seluas 200 m² yang dilengkapi dengan peralatan modern untuk menyajikan hidangan kelas atas. Kami bekerja sama dengan chef ternama untuk menciptakan menu yang dapat disesuaikan dengan preferensi Anda.",
    },
    {
      icon: <ParkingCircle className="h-4 w-4 sm:h-5 sm:w-5 text-rose-600" />,
      title: "Area Parkir Luas",
      description:
        "Area parkir seluas 2.000 m² yang dapat menampung hingga 200 kendaraan. Kami juga menyediakan layanan valet parking dan shuttle bus dari lokasi parkir tambahan untuk kenyamanan tamu Anda.",
    },
    {
      icon: <Bed className="h-4 w-4 sm:h-5 sm:w-5 text-rose-600" />,
      title: "Penginapan",
      description:
        "Kami memiliki 5 villa mewah yang dapat digunakan untuk penginapan keluarga atau tamu VIP. Setiap villa dilengkapi dengan 2 kamar tidur, ruang tamu, dan fasilitas modern untuk kenyamanan maksimal.",
    },
    {
      icon: <Camera className="h-4 w-4 sm:h-5 sm:w-5 text-rose-600" />,
      title: "Photo Studio",
      description:
        "Studio foto profesional dengan berbagai backdrop dan pencahayaan studio. Ideal untuk sesi foto pre-wedding atau foto keluarga sebelum acara pernikahan dimulai.",
    },
    {
      icon: <Music className="h-4 w-4 sm:h-5 sm:w-5 text-rose-600" />,
      title: "Sistem Audio Visual",
      description:
        "Sistem audio visual terkini dengan speaker Bose, proyektor 4K, layar LED, dan pencahayaan yang dapat diprogram. Tim teknisi kami siap membantu untuk memastikan presentasi dan hiburan berjalan lancar.",
    },
    {
      icon: <Wifi className="h-4 w-4 sm:h-5 sm:w-5 text-rose-600" />,
      title: "Konektivitas",
      description:
        "WiFi kecepatan tinggi tersedia di seluruh area venue dengan bandwidth dedicated untuk live streaming pernikahan Anda. Kami juga menyediakan layanan IT support selama acara berlangsung.",
    },
  ];

  const seasons = [
    {
      icon: <Sunrise className="h-5 w-5 sm:h-6 sm:w-6 text-rose-600" />,
      title: "Musim Semi (Mar-Mei)",
      description:
        "Bunga-bunga bermekaran, suhu nyaman, ideal untuk outdoor wedding.",
    },
    {
      icon: <Sun className="h-5 w-5 sm:h-6 sm:w-6 text-rose-600" />,
      title: "Musim Panas (Jun-Agu)",
      description:
        "Matahari cerah, sunset yang indah, tersedia AC di semua ruangan indoor.",
    },
    {
      icon: <Leaf className="h-5 w-5 sm:h-6 sm:w-6 text-rose-600" />,
      title: "Musim Gugur (Sep-Nov)",
      description:
        "Dedaunan berwarna-warni, suhu sejuk, pemandangan fotogenik.",
    },
    {
      icon: <Snowflake className="h-5 w-5 sm:h-6 sm:w-6 text-rose-600" />,
      title: "Musim Dingin (Des-Feb)",
      description: "Dekorasi indoor mewah, pemanas ruangan, diskon musim sepi.",
    },
  ];

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {facilities.map((facility, index) => (
          <Card
            key={index}
            className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-xl sm:rounded-2xl overflow-hidden"
          >
            <CardHeader className="pb-1 sm:pb-2 pt-4 px-4 sm:pt-6 sm:px-6">
              <div className="bg-rose-100 p-2 sm:p-3 rounded-full w-fit mb-2">
                {facility.icon}
              </div>
              <CardTitle className="text-base sm:text-lg">
                {facility.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4 sm:px-6 sm:pb-6">
              <p className="text-xs sm:text-sm text-gray-700">
                {facility.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-rose-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 mt-6 sm:mt-8">
        <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
          Informasi Musiman
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {seasons.map((season, index) => (
            <div
              key={index}
              className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 flex flex-col items-center text-center"
            >
              <div className="bg-rose-50 p-2 sm:p-3 rounded-full mb-2 sm:mb-3">
                {season.icon}
              </div>
              <h4 className="font-medium mb-1 sm:mb-2 text-sm sm:text-base">
                {season.title}
              </h4>
              <p className="text-xs sm:text-sm text-gray-600">
                {season.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
