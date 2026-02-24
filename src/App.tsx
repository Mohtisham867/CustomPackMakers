import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import Index from "./pages/Index";
import Industries from "./pages/Industries";
import ShapesStyles from "./pages/ShapesStyles";
import PrimaryPackaging from "./pages/PrimaryPackaging";
import PackagingHub from "./pages/PackagingHub";
import ApparelBoxes from "./pages/categories/ApparelBoxes";
import CustomShoeBoxes from "./pages/industry-pages/apparel-boxes/CustomShoeBoxes";
import TieBoxes from "./pages/industry-pages/apparel-boxes/TieBoxes";
import BeltBoxes from "./pages/industry-pages/apparel-boxes/BeltBoxes";
import CufflinkBoxes from "./pages/industry-pages/apparel-boxes/CufflinkBoxes";
import ClothingBoxes from "./pages/industry-pages/apparel-boxes/ClothingBoxes";
import LingerieBoxes from "./pages/industry-pages/apparel-boxes/LingerieBoxes";
import UnderwearBoxes from "./pages/industry-pages/apparel-boxes/UnderwearBoxes";
import TShirtBoxes from "./pages/industry-pages/apparel-boxes/TShirtBoxes";
import SocksBoxes from "./pages/industry-pages/apparel-boxes/SocksBoxes";
import ClothingHangTags from "./pages/industry-pages/apparel-boxes/ClothingHangTags";
import HatShippingBoxes from "./pages/industry-pages/apparel-boxes/HatShippingBoxes";
import SunglassesBoxes from "./pages/industry-pages/apparel-boxes/SunglassesBoxes";
import LuxuryApparelBoxes from "./pages/industry-pages/apparel-boxes/LuxuryApparelBoxes";
import ApparelGiftBoxes from "./pages/industry-pages/apparel-boxes/ApparelGiftBoxes";
import HoodiePackaging from "./pages/industry-pages/apparel-boxes/HoodiePackaging";
import WeddingDressBoxes from "./pages/industry-pages/apparel-boxes/WeddingDressBoxes";
import HatBoxes from "./pages/industry-pages/apparel-boxes/HatBoxes";
import AutomotiveBoxes from "./pages/categories/AutomotiveBoxes";
import CarAccessoriesBoxes from "./pages/industry-pages/automotive-boxes/CarAccessoriesBoxes";
import SparePartsBoxes from "./pages/industry-pages/automotive-boxes/SparePartsBoxes";
import LubricantPackagingBoxes from "./pages/industry-pages/automotive-boxes/LubricantPackagingBoxes";
import ElectronicComponentBoxes from "./pages/industry-pages/automotive-boxes/ElectronicComponentBoxes";
import BrakePadsPackaging from "./pages/industry-pages/automotive-boxes/BrakePadsPackaging";
import AirFilterBoxes from "./pages/industry-pages/automotive-boxes/AirFilterBoxes";
import ToolKitBoxes from "./pages/industry-pages/automotive-boxes/ToolKitBoxes";
import TireAccessoriesPackaging from "./pages/industry-pages/automotive-boxes/TireAccessoriesPackaging";
import HeadlightBoxes from "./pages/industry-pages/automotive-boxes/HeadlightBoxes";
import CarCleaningKitsBoxes from "./pages/industry-pages/automotive-boxes/CarCleaningKitsBoxes";
import BakeryBoxes from "./pages/categories/BakeryBoxes";
import CustomCakeBoxes from "./pages/industry-pages/bakery-boxes/CustomCakeBoxes";
import PastryBoxes from "./pages/industry-pages/bakery-boxes/PastryBoxes";
import DonutBoxes from "./pages/industry-pages/bakery-boxes/DonutBoxes";
import CookieBoxes from "./pages/industry-pages/bakery-boxes/CookieBoxes";
import CupcakeBoxes from "./pages/industry-pages/bakery-boxes/CupcakeBoxes";
import PieBoxes from "./pages/industry-pages/bakery-boxes/PieBoxes";
import MuffinBoxes from "./pages/industry-pages/bakery-boxes/MuffinBoxes";
import BreadPackaging from "./pages/industry-pages/bakery-boxes/BreadPackaging";
import MacaronBoxes from "./pages/industry-pages/bakery-boxes/MacaronBoxes";
import BakeryChocolateBoxes from "./pages/industry-pages/bakery-boxes/ChocolateBoxes";
import BeverageBoxes from "./pages/categories/BeverageBoxes";
import CoffeePackaging from "./pages/industry-pages/beverage-boxes/CoffeePackaging";
import TeaBoxes from "./pages/industry-pages/beverage-boxes/TeaBoxes";
import WineBoxes from "./pages/industry-pages/beverage-boxes/WineBoxes";
import BeerPackaging from "./pages/industry-pages/beverage-boxes/BeerPackaging";
import JuiceBoxes from "./pages/industry-pages/beverage-boxes/JuiceBoxes";
import SodaPackaging from "./pages/industry-pages/beverage-boxes/SodaPackaging";
import EnergyDrinkBoxes from "./pages/industry-pages/beverage-boxes/EnergyDrinkBoxes";
import WaterBottlePackaging from "./pages/industry-pages/beverage-boxes/WaterBottlePackaging";
import MilkPackaging from "./pages/industry-pages/beverage-boxes/MilkPackaging";
import SmoothiePackaging from "./pages/industry-pages/beverage-boxes/SmoothiePackaging";
import CandleBoxes from "./pages/categories/CandleBoxes";
import CustomCandleDisplayBoxes from "./pages/industry-pages/candle-boxes/CustomCandleDisplayBoxes";
import CustomCandleJarBoxes from "./pages/industry-pages/candle-boxes/CustomCandleJarBoxes";
import TwoPieceCandleBoxes from "./pages/industry-pages/candle-boxes/TwoPieceCandleBoxes";
import CandleShippingBoxes from "./pages/industry-pages/candle-boxes/CandleShippingBoxes";
import TaperCandleBoxes from "./pages/industry-pages/candle-boxes/TaperCandleBoxes";
import CandleBoxesWithInserts from "./pages/industry-pages/candle-boxes/CandleBoxesWithInserts";
import CandleLabels from "./pages/industry-pages/candle-boxes/CandleLabels";
import CandleBoxesWithWindow from "./pages/industry-pages/candle-boxes/CandleBoxesWithWindow";
import WaxMeltPackaging from "./pages/industry-pages/candle-boxes/WaxMeltPackaging";
import CandleSubscriptionBoxes from "./pages/industry-pages/candle-boxes/CandleSubscriptionBoxes";
import LuxuryCandleBoxes from "./pages/industry-pages/candle-boxes/LuxuryCandleBoxes";
import WishesCandleBoxes from "./pages/industry-pages/candle-boxes/WishesCandleBoxes";
import CandleDustCovers from "./pages/industry-pages/candle-boxes/CandleDustCovers";
import ArtisanChocolateBox from "./pages/industry-pages/chocolate-boxes/ArtisanChocolateBox";
import ChocolateMilkBoxes from "./pages/industry-pages/chocolate-boxes/ChocolateMilkBoxes";
import ChocolateCandyBoxes from "./pages/industry-pages/chocolate-boxes/ChocolateCandyBoxes";
import LuxuryChocolateBoxes from "./pages/industry-pages/chocolate-boxes/LuxuryChocolateBoxes";
import ChocolateBombBoxes from "./pages/industry-pages/chocolate-boxes/ChocolateBombBoxes";
import ChocolateGiftBoxes from "./pages/industry-pages/chocolate-boxes/ChocolateGiftBoxes";
import ChristmasChocolateBoxes from "./pages/industry-pages/chocolate-boxes/ChristmasChocolateBoxes";
import MushroomChocolateBarPackaging from "./pages/industry-pages/chocolate-boxes/MushroomChocolateBarPackaging";
import ChocolateBarPackaging from "./pages/industry-pages/chocolate-boxes/ChocolateBarPackaging";
import ChocolateSubscriptionBox from "./pages/industry-pages/chocolate-boxes/ChocolateSubscriptionBox";
import CannabisPackaging from "./pages/categories/CannabisPackaging";
import CannabisTinctureBoxes from "./pages/industry-pages/cannabis-packaging/CannabisTinctureBoxes";
import CannabisVapePackaging from "./pages/industry-pages/cannabis-packaging/CannabisVapePackaging";
import CannabisSeedPackaging from "./pages/industry-pages/cannabis-packaging/CannabisSeedPackaging";
import CannabisCigaretteBoxes from "./pages/industry-pages/cannabis-packaging/CannabisCigaretteBoxes";
import CannabisMylarBags from "./pages/industry-pages/cannabis-packaging/CannabisMylarBags";
import CannabisFlowerPackaging from "./pages/industry-pages/cannabis-packaging/CannabisFlowerPackaging";
import CannabisCartridgePackaging from "./pages/industry-pages/cannabis-packaging/CannabisCartridgePackaging";
import ChocolateBoxes from "./pages/categories/ChocolateBoxes";
import ChristmasBoxes from "./pages/categories/ChristmasBoxes";
import ChristmasChocolateBoxesPage from "./pages/industry-pages/christmas-boxes/ChristmasChocolateBoxes";
import ChristmasTags from "./pages/industry-pages/christmas-boxes/ChristmasTags";
import ChristmasGableBoxes from "./pages/industry-pages/christmas-boxes/ChristmasGableBoxes";
import ChristmasCupcakeBoxes from "./pages/industry-pages/christmas-boxes/ChristmasCupcakeBoxes";
import CustomChristmasCandyBoxes from "./pages/industry-pages/christmas-boxes/CustomChristmasCandyBoxes";
import ChristmasGiftBoxes from "./pages/industry-pages/christmas-boxes/ChristmasGiftBoxes";
import ChristmasEveBoxes from "./pages/industry-pages/christmas-boxes/ChristmasEveBoxes";
import ChristmasTreatBoxes from "./pages/industry-pages/christmas-boxes/ChristmasTreatBoxes";
import ChristmasPaperBags from "./pages/industry-pages/christmas-boxes/ChristmasPaperBags";
import ChristmasGiftBags from "./pages/industry-pages/christmas-boxes/ChristmasGiftBags";
import ChristmasFavorBoxes from "./pages/industry-pages/christmas-boxes/ChristmasFavorBoxes";
import ChristmasStickers from "./pages/industry-pages/christmas-boxes/ChristmasStickers";
import CustomAdventCalendarBoxes from "./pages/industry-pages/christmas-boxes/CustomAdventCalendarBoxes";
import CigaretteBoxes from "./pages/categories/CigaretteBoxes";
import CustomECigaretteBoxes from "./pages/industry-pages/cigarette-boxes/CustomECigaretteBoxes";
import CustomHempCigaretteBoxes from "./pages/industry-pages/cigarette-boxes/CustomHempCigaretteBoxes";
import PaperCigaretteBoxes from "./pages/industry-pages/cigarette-boxes/PaperCigaretteBoxes";
import CardboardCigaretteBoxes from "./pages/industry-pages/cigarette-boxes/CardboardCigaretteBoxes";
import BlankCigaretteBoxes from "./pages/industry-pages/cigarette-boxes/BlankCigaretteBoxes";
import DisposableCigaretteBoxes from "./pages/industry-pages/cigarette-boxes/DisposableCigaretteBoxes";
import LighterBoxes from "./pages/industry-pages/cigarette-boxes/LighterBoxes";
import EmptyCigaretteBoxes from "./pages/industry-pages/cigarette-boxes/EmptyCigaretteBoxes";
import CigaretteDisplayBoxes from "./pages/industry-pages/cigarette-boxes/CigaretteDisplayBoxes";
import CardboardCigarBoxes from "./pages/industry-pages/cigarette-boxes/CardboardCigarBoxes";
import CigaretteCartons from "./pages/industry-pages/cigarette-boxes/CigaretteCartons";
import CosmeticBoxes from "./pages/categories/CosmeticBoxes";
import CustomBeardOilBoxes from "./pages/industry-pages/cosmetic-boxes/CustomBeardOilBoxes";
import SerumBoxes from "./pages/industry-pages/cosmetic-boxes/SerumBoxes";
import HairColorBoxes from "./pages/industry-pages/cosmetic-boxes/HairColorBoxes";
import HairExtensionBoxes from "./pages/industry-pages/cosmetic-boxes/HairExtensionBoxes";
import HairSprayBoxes from "./pages/industry-pages/cosmetic-boxes/HairSprayBoxes";
import CustomLipGlossBoxes from "./pages/industry-pages/cosmetic-boxes/CustomLipGlossBoxes";
import CustomLipLinerBoxes from "./pages/industry-pages/cosmetic-boxes/CustomLipLinerBoxes";
import CustomLipstickBoxes from "./pages/industry-pages/cosmetic-boxes/CustomLipstickBoxes";
import MascaraBoxes from "./pages/industry-pages/cosmetic-boxes/MascaraBoxes";
import NailPolishBoxes from "./pages/industry-pages/cosmetic-boxes/NailPolishBoxes";
import CustomEyeShadowBoxes from "./pages/industry-pages/cosmetic-boxes/CustomEyeShadowBoxes";
import EyelashBoxes from "./pages/industry-pages/cosmetic-boxes/EyelashBoxes";
import EssentialOilBoxes from "./pages/industry-pages/cosmetic-boxes/EssentialOilBoxes";
import FoundationBoxes from "./pages/industry-pages/cosmetic-boxes/FoundationBoxes";
import LipBalmBoxes from "./pages/industry-pages/cosmetic-boxes/LipBalmBoxes";
import NailBoxes from "./pages/industry-pages/cosmetic-boxes/NailBoxes";
import CosmeticLabels from "./pages/industry-pages/cosmetic-boxes/CosmeticLabels";
import LipTintPackaging from "./pages/industry-pages/cosmetic-boxes/LipTintPackaging";
import CustomWigBoxes from "./pages/industry-pages/cosmetic-boxes/CustomWigBoxes";
import SkinCarePackaging from "./pages/industry-pages/cosmetic-boxes/SkinCarePackaging";
import CandyBoxes from "./pages/categories/CandyBoxes";
import CustomGummyBoxes from "@/pages/industry-pages/candy-boxes/CustomGummyBoxes";
import CustomLollipopBoxes from "@/pages/industry-pages/candy-boxes/CustomLollipopBoxes";
import CustomHardCandyBoxes from "@/pages/industry-pages/candy-boxes/CustomHardCandyBoxes";
import ChocolateBoxesPage from "@/pages/industry-pages/candy-boxes/ChocolateBoxes";
import CandyAppleBoxes from "@/pages/industry-pages/candy-boxes/CandyAppleBoxes";
import CandyBoxesWithWindow from "@/pages/industry-pages/candy-boxes/CandyBoxesWithWindow";
import CustomChristmasCandyBoxesPage from "@/pages/industry-pages/candy-boxes/CustomChristmasCandyBoxes";
import MylarBagsForCandies from "@/pages/industry-pages/candy-boxes/MylarBagsForCandies";
import CustomCandyDisplayBoxes from "@/pages/industry-pages/candy-boxes/CustomCandyDisplayBoxes";
import CbdBoxes from "./pages/categories/CbdBoxes";
import HempBoxes from "./pages/categories/HempBoxes";
import CustomCbdCapsuleBoxes from "./pages/industry-pages/cbd-packaging/CustomCbdCapsuleBoxes";
import CustomCbdCreamBoxes from "./pages/industry-pages/cbd-packaging/CustomCbdCreamBoxes";
import CustomCbdLotionBoxes from "./pages/industry-pages/cbd-packaging/CustomCbdLotionBoxes";
import CbdOilBoxes from "./pages/industry-pages/cbd-packaging/CbdOilBoxes";
import CbdEssentialOilBoxes from "./pages/industry-pages/cbd-packaging/EssentialOilBoxes";
import CustomCbdIsolateBoxes from "./pages/industry-pages/cbd-packaging/CustomCbdIsolateBoxes";
import CustomCbdPodBoxes from "./pages/industry-pages/cbd-packaging/CustomCbdPodBoxes";
import CbdLollipopBoxes from "./pages/industry-pages/cbd-packaging/CbdLollipopBoxes";
import CbdGummiesBoxes from "./pages/industry-pages/cbd-packaging/CbdGummiesBoxes";
import Delta8ThcBoxes from "./pages/industry-pages/cbd-packaging/Delta8ThcBoxes";
import CbdDisplayBoxes from "./pages/industry-pages/cbd-packaging/CbdDisplayBoxes";
import TinctureBoxes from "./pages/industry-pages/cbd-packaging/TinctureBoxes";
import BluntBoxes from "./pages/industry-pages/cbd-packaging/BluntBoxes";
import CustomCbdBottleBoxes from "./pages/industry-pages/cbd-packaging/CustomCbdBottleBoxes";
import CustomCbdFlowerBoxes from "./pages/industry-pages/cbd-packaging/CustomCbdFlowerBoxes";
import CbdChocolateBoxes from "./pages/industry-pages/cbd-packaging/CbdChocolateBoxes";
import CbdMailerBoxes from "./pages/industry-pages/cbd-packaging/CbdMailerBoxes";
import CbdHempOilBoxes from "./pages/industry-pages/cbd-packaging/CbdHempOilBoxes";
import CbdBathBombBoxes from "./pages/industry-pages/cbd-packaging/CbdBathBombBoxes";
import CbdCartridgeBoxes from "./pages/industry-pages/cbd-packaging/CbdCartridgeBoxes";
import CbdVapeBoxes from "./pages/industry-pages/cbd-packaging/CbdVapeBoxes";
import CbdPreRollBoxes from "./pages/industry-pages/cbd-packaging/CbdPreRollBoxes";
import ConcentratePackaging from "./pages/industry-pages/cbd-packaging/ConcentratePackaging";
import CustomCbdBoxesPage from "./pages/industry-pages/cbd-packaging/CustomCbdBoxes";
import HempPackaging from "./pages/industry-pages/cbd-packaging/HempPackaging";
import HempPaperBoxes from "./pages/industry-pages/custom-hemp-boxes/HempPaperBoxes";
import HempShippingBoxes from "./pages/industry-pages/custom-hemp-boxes/HempShippingBoxes";
import HempPreRollBoxes from "./pages/industry-pages/custom-hemp-boxes/HempPreRollBoxes";
import HempOilBoxes from "./pages/industry-pages/custom-hemp-boxes/HempOilBoxes";
import HempGiftBoxes from "./pages/industry-pages/custom-hemp-boxes/HempGiftBoxes";
import HempCardboardBoxes from "./pages/industry-pages/custom-hemp-boxes/HempCardboardBoxes";
import CustomHempCigaretteBoxesCategory from "./pages/industry-pages/custom-hemp-boxes/CustomHempCigaretteBoxes";
import ELiquidBoxes from "./pages/industry-pages/custom-hemp-boxes/ELiquidBoxes";
import HempTeaBags from "./pages/industry-pages/custom-hemp-boxes/HempTeaBags";
import CBDHempOilBoxes from "./pages/industry-pages/custom-hemp-boxes/CBDHempOilBoxes";
import EcommerceBoxes from "./pages/categories/EcommerceBoxes";
import CustomMailerBoxes from "./pages/industry-pages/ecommerce-packaging/CustomMailerBoxes";
import SubscriptionBoxesEcommerce from "./pages/industry-pages/ecommerce-packaging/SubscriptionBoxesEcommerce";
import ShippingBoxesEcommerce from "./pages/industry-pages/ecommerce-packaging/ShippingBoxesEcommerce";
import EcommerceProductBoxes from "./pages/industry-pages/ecommerce-packaging/EcommerceProductBoxes";
import CorrugatedBoxesEcommerce from "./pages/industry-pages/ecommerce-packaging/CorrugatedBoxesEcommerce";
import CustomInsertsDividers from "./pages/industry-pages/ecommerce-packaging/CustomInsertsDividers";
import ElectronicsBoxes from "./pages/categories/ElectronicsBoxes";
import HairDryerPackaging from "./pages/industry-pages/electronics-packaging/HairDryerPackaging";
import CellPhoneChargerBoxes from "./pages/industry-pages/electronics-packaging/CellPhoneChargerBoxes";
import BatteryPackaging from "./pages/industry-pages/electronics-packaging/BatteryPackaging";
import CDJackets from "./pages/industry-pages/electronics-packaging/CDJackets";
import CDCovers from "./pages/industry-pages/electronics-packaging/CDCovers";
import CameraPackaging from "./pages/industry-pages/electronics-packaging/CameraPackaging";
import PhoneBoxes from "./pages/industry-pages/electronics-packaging/PhoneBoxes";
import HeadphonePackaging from "./pages/industry-pages/electronics-packaging/HeadphonePackaging";
import SoftwareBoxes from "./pages/industry-pages/electronics-packaging/SoftwareBoxes";
import FoodBoxes from "./pages/categories/FoodBoxes";
import ChineseTakeoutBoxes from "./pages/industry-pages/food-boxes/ChineseTakeoutBoxes";
import FoodDonutBoxes from "./pages/industry-pages/food-boxes/DonutBoxes";
import CustomPopcornBoxes from "./pages/industry-pages/food-boxes/CustomPopcornBoxes";
import DietarySupplementPackaging from "./pages/industry-pages/food-boxes/DietarySupplementPackaging";
import CustomPizzaSliceBoxes from "./pages/industry-pages/food-boxes/CustomPizzaSliceBoxes";
import CustomFoodPaperFoodBags from "./pages/industry-pages/food-boxes/CustomPaperFoodBags";
import PaperFoodTrays from "./pages/industry-pages/food-boxes/PaperFoodTrays";
import MiniCerealBoxes from "./pages/industry-pages/food-boxes/MiniCerealBoxes";
import FragranceBoxes from "./pages/categories/FragranceBoxes";
import CustomPerfumeBoxes from "./pages/industry-pages/fragrance-boxes/CustomPerfumeBoxes";
import PerfumeSubscriptionBoxes from "./pages/industry-pages/fragrance-boxes/PerfumeSubscriptionBoxes";
import LuxuryPerfumePackaging from "./pages/industry-pages/fragrance-boxes/LuxuryPerfumePackaging";
import IncenseBoxes from "./pages/industry-pages/fragrance-boxes/IncenseBoxes";
import GameBoxes from "./pages/categories/GameBoxes";
import CustomToyBoxes from "./pages/industry-pages/game-boxes/CustomToyBoxes";
import PlayingCardBoxes from "./pages/industry-pages/game-boxes/PlayingCardBoxes";
import GamingSubscriptionBox from "./pages/industry-pages/game-boxes/GamingSubscriptionBox";
import CustomBoardGameBoxes from "./pages/industry-pages/game-boxes/CustomBoardGameBoxes";
import GiftBoxes from "./pages/categories/GiftBoxes";
import FavorBoxes from "./pages/industry-pages/gift-boxes/FavorBoxes";
import GiftCardBoxes from "./pages/industry-pages/gift-boxes/GiftCardBoxes";
import CustomPrintedGiftBoxes from "./pages/industry-pages/gift-boxes/CustomPrintedGiftBoxes";
import HempGiftBoxesCategory from "./pages/industry-pages/gift-boxes/HempGiftBoxes";
import CardboardGiftBoxes from "./pages/industry-pages/gift-boxes/CardboardGiftBoxes";
import ChocolateGiftBoxesCategory from "./pages/industry-pages/gift-boxes/ChocolateGiftBoxes";
import GiftTags from "./pages/industry-pages/gift-boxes/GiftTags";
import GableGiftBoxes from "./pages/industry-pages/gift-boxes/GableGiftBoxes";
import HolidayBoxes from "./pages/categories/HolidayBoxes";
import HolidayChristmasGiftBoxes from "./pages/industry-pages/holiday-boxes/ChristmasGiftBoxes";
import CustomHalloweenBoxes from "./pages/industry-pages/holiday-boxes/CustomHalloweenBoxes";
import HolidayGiftBoxes from "./pages/industry-pages/holiday-boxes/HolidayGiftBoxes";
import ThanksgivingBoxes from "./pages/industry-pages/holiday-boxes/ThanksgivingBoxes";
import ThanksgivingFoodBoxes from "./pages/industry-pages/holiday-boxes/ThanksgivingFoodBoxes";
import CustomValentinesBoxes from "./pages/industry-pages/holiday-boxes/CustomValentinesBoxes";
import HalloweenWindowBoxes from "./pages/industry-pages/holiday-boxes/HalloweenWindowBoxes";
import ChristmasPillowBoxes from "./pages/industry-pages/holiday-boxes/ChristmasPillowBoxes";
import JewelryBoxes from "./pages/categories/JewelryBoxes";
import MarijuanaPackaging from "./pages/categories/MarijuanaPackaging";
import PharmaPackaging from "./pages/categories/PharmaPackaging";
import PreRollBoxes from "./pages/categories/PreRollBoxes";
import RetailBoxes from "./pages/categories/RetailBoxes";
import SoapBoxes from "./pages/categories/SoapBoxes";
import SportsBoxes from "./pages/categories/SportsBoxes";
import StationeryBoxes from "./pages/categories/StationeryBoxes";
import DisplayBoxes from "./pages/categories/DisplayBoxes";
import MailerBoxes from "./pages/categories/MailerBoxes";
import GableBoxes from "./pages/categories/GableBoxes";
import RigidBoxes from "./pages/categories/RigidBoxes";
import TuckBoxes from "./pages/categories/TuckBoxes";
import CustomMylarBags from "./pages/categories/CustomMylarBags";
import CardboardBoxes from "./pages/categories/CardboardBoxes";
import SustainablePackaging from "./pages/categories/SustainablePackaging";
import TeaCoffeeCups from "./pages/categories/TeaCoffeeCups";
import ShippingBoxes from "./pages/categories/ShippingBoxes";
import VapeBoxes from "./pages/categories/VapeBoxes";
import WeedBoxes from "./pages/categories/WeedBoxes";
import SubscriptionBoxes from "./pages/categories/SubscriptionBoxes";
import CustomShapeBoxes from "./pages/categories/CustomShapeBoxes";
import StickersAndLabels from "./pages/categories/StickersAndLabels";
import SleevesAndTrays from "./pages/categories/SleevesAndTrays";
import CardstockBoxes from "./pages/categories/CardstockBoxes";
import ChildResistantPackaging from "./pages/categories/ChildResistantPackaging";
import CorrugatedBoxes from "./pages/categories/CorrugatedBoxes";
import CustomKraftBoxes from "./pages/categories/CustomKraftBoxes";
import CustomBags from "./pages/categories/CustomBags";
import HolographicBoxes from "./pages/categories/HolographicBoxes";
import CustomPaperBags from "./pages/categories/CustomPaperBags";
import HangTags from "./pages/categories/HangTags";
import PillowBoxes from "./pages/categories/PillowBoxes";
import WeedBags from "./pages/categories/WeedBags";
import WindowPackaging from "./pages/categories/WindowPackaging";
import GlassSerumBottle from "./pages/categories/GlassSerumBottle";
import PlasticCleanserTube from "./pages/categories/PlasticCleanserTube";
import PlasticMistBottle from "./pages/categories/PlasticMistBottle";
import GlassRollOnBottle from "./pages/categories/GlassRollOnBottle";
import PlasticShampooBottle from "./pages/categories/PlasticShampooBottle";
import PaperTubes from "./pages/categories/PaperTubes";
import GlassCandleJars from "./pages/categories/GlassCandleJars";
import GlassPerfumeBottle from "./pages/categories/GlassPerfumeBottle";
import PlasticCapsuleBottle from "./pages/categories/PlasticCapsuleBottle";
import MoisturizerJar from "./pages/categories/MoisturizerJar";
import PlasticLotionBottle from "./pages/categories/PlasticLotionBottle";
import GlassCreamJars from "./pages/categories/GlassCreamJars";
import CustomPreRollTubes from "./pages/categories/CustomPreRollTubes";
import DropperBottles from "./pages/categories/DropperBottles";
import CustomAutoBottomGableBags from "./pages/industry-pages/custom-paper-bags/CustomAutoBottomGableBags";
import CustomPaperFoodBags from "./pages/industry-pages/custom-paper-bags/CustomPaperFoodBags";
import CustomChristmasPaperBags from "./pages/industry-pages/custom-paper-bags/ChristmasPaperBags";
import CustomChristmasGiftBags from "./pages/industry-pages/custom-paper-bags/ChristmasGiftBags";
import CustomBrownPaperBags from "./pages/industry-pages/custom-paper-bags/CustomBrownPaperBags";
import PaperShoppingBags from "./pages/industry-pages/custom-paper-bags/PaperShoppingBags";
import WhitePaperBags from "./pages/industry-pages/custom-paper-bags/WhitePaperBags";
import PaperGiftBags from "./pages/industry-pages/custom-paper-bags/PaperGiftBags";
import PaperLunchBags from "./pages/industry-pages/custom-paper-bags/PaperLunchBags";
import FriesBag from "./pages/industry-pages/custom-paper-bags/FriesBag";
import GlassineBags from "./pages/industry-pages/custom-paper-bags/GlassineBags";
import CandyBags from "./pages/industry-pages/custom-paper-bags/CandyBags";
import BakeryBags from "./pages/industry-pages/custom-paper-bags/BakeryBags";
import CookieBags from "./pages/industry-pages/custom-paper-bags/CookieBags";
import GiftBags from "./pages/industry-pages/custom-paper-bags/GiftBags";
import CarryOutBags from "./pages/industry-pages/custom-paper-bags/CarryOutBags";
import ExoticWeedBag from "./pages/industry-pages/custom-paper-bags/ExoticWeedBag";
import PaperBagsWithHandles from "./pages/industry-pages/custom-paper-bags/PaperBagsWithHandles";
import JarsWithPump from "./pages/categories/JarsWithPump";
import BoxByMaterials from "./pages/BoxByMaterials";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <ScrollToTopButton />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/apparel-boxes" element={<ApparelBoxes />} />
          <Route path="/categories/apparel-boxes" element={<ApparelBoxes />} />
          <Route path="/industries/apparel-boxes/custom-shoe-boxes" element={<CustomShoeBoxes />} />
          <Route path="/industries/apparel-boxes/tie-boxes" element={<TieBoxes />} />
          <Route path="/industries/apparel-boxes/belt-boxes" element={<BeltBoxes />} />
          <Route path="/industries/apparel-boxes/cufflink-boxes" element={<CufflinkBoxes />} />
          <Route path="/industries/apparel-boxes/clothing-boxes" element={<ClothingBoxes />} />
          <Route path="/industries/apparel-boxes/lingerie-boxes" element={<LingerieBoxes />} />
          <Route path="/industries/apparel-boxes/underwear-boxes" element={<UnderwearBoxes />} />
          <Route path="/industries/apparel-boxes/t-shirt-boxes" element={<TShirtBoxes />} />
          <Route path="/industries/apparel-boxes/socks-boxes" element={<SocksBoxes />} />
          <Route path="/industries/apparel-boxes/clothing-hang-tags" element={<ClothingHangTags />} />
          <Route path="/industries/apparel-boxes/hat-shipping-boxes" element={<HatShippingBoxes />} />
          <Route path="/industries/apparel-boxes/sunglasses-boxes" element={<SunglassesBoxes />} />
          <Route path="/industries/apparel-boxes/luxury-apparel-boxes" element={<LuxuryApparelBoxes />} />
          <Route path="/industries/apparel-boxes/apparel-gift-boxes" element={<ApparelGiftBoxes />} />
          <Route path="/industries/apparel-boxes/hoodie-packaging" element={<HoodiePackaging />} />
          <Route path="/industries/apparel-boxes/wedding-dress-boxes" element={<WeddingDressBoxes />} />
          <Route path="/industries/apparel-boxes/hat-boxes" element={<HatBoxes />} />
          <Route path="/industries/automotive-boxes" element={<AutomotiveBoxes />} />
          <Route path="/industries/automotive-boxes/car-accessories-boxes" element={<CarAccessoriesBoxes />} />
          <Route path="/industries/automotive-boxes/spare-parts-boxes" element={<SparePartsBoxes />} />
          <Route path="/industries/automotive-boxes/lubricant-packaging-boxes" element={<LubricantPackagingBoxes />} />
          <Route path="/industries/automotive-boxes/electronic-component-boxes" element={<ElectronicComponentBoxes />} />
          <Route path="/industries/automotive-boxes/brake-pads-packaging" element={<BrakePadsPackaging />} />
          <Route path="/industries/automotive-boxes/air-filter-boxes" element={<AirFilterBoxes />} />
          <Route path="/industries/automotive-boxes/tool-kit-boxes" element={<ToolKitBoxes />} />
          <Route path="/industries/automotive-boxes/tire-accessories-packaging" element={<TireAccessoriesPackaging />} />
          <Route path="/industries/automotive-boxes/headlight-boxes" element={<HeadlightBoxes />} />
          <Route path="/industries/automotive-boxes/car-cleaning-kits-boxes" element={<CarCleaningKitsBoxes />} />
          <Route path="/industries/bakery-boxes" element={<BakeryBoxes />} />
          <Route path="/industries/bakery-boxes/custom-cake-boxes" element={<CustomCakeBoxes />} />
          <Route path="/industries/bakery-boxes/pastry-boxes" element={<PastryBoxes />} />
          <Route path="/industries/bakery-boxes/donut-boxes" element={<DonutBoxes />} />
          <Route path="/industries/bakery-boxes/cookie-boxes" element={<CookieBoxes />} />
          <Route path="/industries/bakery-boxes/cupcake-boxes" element={<CupcakeBoxes />} />
          <Route path="/industries/bakery-boxes/pie-boxes" element={<PieBoxes />} />
          <Route path="/industries/bakery-boxes/muffin-boxes" element={<MuffinBoxes />} />
          <Route path="/industries/bakery-boxes/bread-packaging" element={<BreadPackaging />} />
          <Route path="/industries/bakery-boxes/macaron-boxes" element={<MacaronBoxes />} />
          <Route path="/industries/bakery-boxes/chocolate-boxes" element={<BakeryChocolateBoxes />} />
          <Route path="/industries/beverage-boxes" element={<BeverageBoxes />} />
          <Route path="/industries/beverage-boxes/coffee-packaging" element={<CoffeePackaging />} />
          <Route path="/industries/beverage-boxes/tea-boxes" element={<TeaBoxes />} />
          <Route path="/industries/beverage-boxes/wine-boxes" element={<WineBoxes />} />
          <Route path="/industries/beverage-boxes/beer-packaging" element={<BeerPackaging />} />
          <Route path="/industries/beverage-boxes/juice-boxes" element={<JuiceBoxes />} />
          <Route path="/industries/beverage-boxes/soda-packaging" element={<SodaPackaging />} />
          <Route path="/industries/beverage-boxes/energy-drink-boxes" element={<EnergyDrinkBoxes />} />
          <Route path="/industries/beverage-boxes/water-bottle-packaging" element={<WaterBottlePackaging />} />
          <Route path="/industries/beverage-boxes/milk-packaging" element={<MilkPackaging />} />
          <Route path="/industries/beverage-boxes/smoothie-packaging" element={<SmoothiePackaging />} />
          <Route path="/industries/candle-boxes" element={<CandleBoxes />} />
          <Route path="/industries/candle-boxes/custom-candle-display-boxes" element={<CustomCandleDisplayBoxes />} />
          <Route path="/industries/candle-boxes/custom-candle-jar-boxes" element={<CustomCandleJarBoxes />} />
          <Route path="/industries/candle-boxes/two-piece-candle-boxes" element={<TwoPieceCandleBoxes />} />
          <Route path="/industries/candle-boxes/candle-shipping-boxes" element={<CandleShippingBoxes />} />
          <Route path="/industries/candle-boxes/taper-candle-boxes" element={<TaperCandleBoxes />} />
          <Route path="/industries/candle-boxes/candle-boxes-with-inserts" element={<CandleBoxesWithInserts />} />
          <Route path="/industries/candle-boxes/candle-labels" element={<CandleLabels />} />
          <Route path="/industries/candle-boxes/candle-boxes-window" element={<CandleBoxesWithWindow />} />
          <Route path="/industries/candle-boxes/wax-melt-packaging" element={<WaxMeltPackaging />} />
          <Route path="/industries/candle-boxes/candle-subscription-boxes" element={<CandleSubscriptionBoxes />} />
          <Route path="/industries/candle-boxes/luxury-candle-boxes" element={<LuxuryCandleBoxes />} />
          <Route path="/industries/candle-boxes/16-wishes-candle-boxes" element={<WishesCandleBoxes />} />
          <Route path="/industries/candle-boxes/candle-dust-covers" element={<CandleDustCovers />} />
          <Route path="/industries/cannabis-packaging" element={<CannabisPackaging />} />
          <Route path="/industries/cannabis-packaging/cannabis-tincture-boxes" element={<CannabisTinctureBoxes />} />
          <Route path="/industries/cannabis-packaging/cannabis-vape-packaging" element={<CannabisVapePackaging />} />
          <Route path="/industries/cannabis-packaging/cannabis-seed-packaging" element={<CannabisSeedPackaging />} />
          <Route path="/industries/cannabis-packaging/cannabis-cigarette-boxes" element={<CannabisCigaretteBoxes />} />
          <Route path="/industries/cannabis-packaging/cannabis-mylar-bags" element={<CannabisMylarBags />} />
          <Route path="/industries/cannabis-packaging/cannabis-flower-packaging" element={<CannabisFlowerPackaging />} />
          <Route path="/industries/cannabis-packaging/cannabis-cartridge-packaging" element={<CannabisCartridgePackaging />} />
          <Route path="/industries/cardboard-boxes" element={<CardboardBoxes />} />
          <Route path="/industries/chocolate-boxes" element={<ChocolateBoxes />} />
          <Route path="/industries/chocolate-boxes/artisan-chocolate-box" element={<ArtisanChocolateBox />} />
          <Route path="/industries/chocolate-boxes/chocolate-milk-boxes" element={<ChocolateMilkBoxes />} />
          <Route path="/industries/chocolate-boxes/chocolate-candy-boxes" element={<ChocolateCandyBoxes />} />
          <Route path="/industries/chocolate-boxes/luxury-chocolate-boxes" element={<LuxuryChocolateBoxes />} />
          <Route path="/industries/chocolate-boxes/chocolate-bomb-boxes" element={<ChocolateBombBoxes />} />
          <Route path="/industries/chocolate-boxes/chocolate-gift-boxes" element={<ChocolateGiftBoxes />} />
          <Route path="/industries/chocolate-boxes/christmas-chocolate-boxes" element={<ChristmasChocolateBoxes />} />
          <Route path="/industries/chocolate-boxes/mushroom-chocolate-bar-packaging" element={<MushroomChocolateBarPackaging />} />
          <Route path="/industries/chocolate-boxes/chocolate-bar-packaging" element={<ChocolateBarPackaging />} />
          <Route path="/industries/chocolate-boxes/chocolate-subscription-box" element={<ChocolateSubscriptionBox />} />
          <Route path="/industries/christmas-boxes" element={<ChristmasBoxes />} />
          <Route path="/industries/christmas-boxes/christmas-chocolate-boxes" element={<ChristmasChocolateBoxesPage />} />
          <Route path="/industries/christmas-boxes/christmas-tags" element={<ChristmasTags />} />
          <Route path="/industries/christmas-boxes/christmas-gable-boxes" element={<ChristmasGableBoxes />} />
          <Route path="/industries/christmas-boxes/christmas-cupcake-boxes" element={<ChristmasCupcakeBoxes />} />
          <Route path="/industries/christmas-boxes/custom-christmas-candy-boxes" element={<CustomChristmasCandyBoxes />} />
          <Route path="/industries/christmas-boxes/christmas-gift-boxes" element={<ChristmasGiftBoxes />} />
          <Route path="/industries/christmas-boxes/christmas-eve-boxes" element={<ChristmasEveBoxes />} />
          <Route path="/industries/christmas-boxes/christmas-treat-boxes" element={<ChristmasTreatBoxes />} />
          <Route path="/industries/christmas-boxes/christmas-paper-bags" element={<ChristmasPaperBags />} />
          <Route path="/industries/christmas-boxes/christmas-gift-bags" element={<ChristmasGiftBags />} />
          <Route path="/industries/christmas-boxes/christmas-favor-boxes" element={<ChristmasFavorBoxes />} />
          <Route path="/industries/christmas-boxes/christmas-stickers" element={<ChristmasStickers />} />
          <Route path="/industries/christmas-boxes/custom-advent-calendar-boxes" element={<CustomAdventCalendarBoxes />} />
          <Route path="/industries/cigarette-boxes" element={<CigaretteBoxes />} />
          <Route path="/industries/cigarette-boxes/custom-e-cigarette-boxes" element={<CustomECigaretteBoxes />} />
          <Route path="/industries/cigarette-boxes/custom-hemp-cigarette-boxes" element={<CustomHempCigaretteBoxes />} />
          <Route path="/industries/cigarette-boxes/paper-cigarette-boxes" element={<PaperCigaretteBoxes />} />
          <Route path="/industries/cigarette-boxes/cardboard-cigarette-boxes" element={<CardboardCigaretteBoxes />} />
          <Route path="/industries/cigarette-boxes/blank-cigarette-boxes" element={<BlankCigaretteBoxes />} />
          <Route path="/industries/cigarette-boxes/disposable-cigarette-boxes" element={<DisposableCigaretteBoxes />} />
          <Route path="/industries/cigarette-boxes/lighter-boxes" element={<LighterBoxes />} />
          <Route path="/industries/cigarette-boxes/empty-cigarette-boxes" element={<EmptyCigaretteBoxes />} />
          <Route path="/industries/cigarette-boxes/cigarette-display-boxes" element={<CigaretteDisplayBoxes />} />
          <Route path="/industries/cigarette-boxes/cardboard-cigar-boxes" element={<CardboardCigarBoxes />} />
          <Route path="/industries/cigarette-boxes/cigarette-cartons" element={<CigaretteCartons />} />
          <Route path="/industries/cosmetic-boxes" element={<CosmeticBoxes />} />
          <Route path="/industries/cosmetic-boxes/beard-oil-boxes" element={<CustomBeardOilBoxes />} />
          <Route path="/industries/cosmetic-boxes/serum-boxes" element={<SerumBoxes />} />
          <Route path="/industries/cosmetic-boxes/hair-color-boxes" element={<HairColorBoxes />} />
          <Route path="/industries/cosmetic-boxes/hair-extension-boxes" element={<HairExtensionBoxes />} />
          <Route path="/industries/cosmetic-boxes/hair-spray-boxes" element={<HairSprayBoxes />} />
          <Route path="/industries/cosmetic-boxes/lip-gloss-boxes" element={<CustomLipGlossBoxes />} />
          <Route path="/industries/cosmetic-boxes/lip-liner-boxes" element={<CustomLipLinerBoxes />} />
          <Route path="/industries/cosmetic-boxes/lipstick-boxes" element={<CustomLipstickBoxes />} />
          <Route path="/industries/cosmetic-boxes/mascara-boxes" element={<MascaraBoxes />} />
          <Route path="/industries/cosmetic-boxes/nail-polish-boxes" element={<NailPolishBoxes />} />
          <Route path="/industries/cosmetic-boxes/eye-shadow-boxes" element={<CustomEyeShadowBoxes />} />
          <Route path="/industries/cosmetic-boxes/eyelash-boxes" element={<EyelashBoxes />} />
          <Route path="/industries/cosmetic-boxes/essential-oil-boxes" element={<EssentialOilBoxes />} />
          <Route path="/industries/cosmetic-boxes/foundation-boxes" element={<FoundationBoxes />} />
          <Route path="/industries/cosmetic-boxes/lip-balm-boxes" element={<LipBalmBoxes />} />
          <Route path="/industries/cosmetic-boxes/nail-boxes" element={<NailBoxes />} />
          <Route path="/industries/cosmetic-boxes/cosmetic-labels" element={<CosmeticLabels />} />
          <Route path="/industries/cosmetic-boxes/lip-tint-packaging" element={<LipTintPackaging />} />
          <Route path="/industries/cosmetic-boxes/wig-boxes" element={<CustomWigBoxes />} />
          <Route path="/industries/cosmetic-boxes/skin-care-packaging" element={<SkinCarePackaging />} />
          <Route path="/industries/custom-candy-boxes" element={<CandyBoxes />} />
          <Route path="/industries/custom-candy-boxes/custom-gummy-boxes" element={<CustomGummyBoxes />} />
          <Route path="/industries/custom-candy-boxes/custom-lollipop-boxes" element={<CustomLollipopBoxes />} />
          <Route path="/industries/custom-candy-boxes/custom-hard-candy-boxes" element={<CustomHardCandyBoxes />} />
          <Route path="/industries/custom-candy-boxes/chocolate-boxes" element={<ChocolateBoxesPage />} />
          <Route path="/industries/custom-candy-boxes/candy-apple-boxes" element={<CandyAppleBoxes />} />
          <Route path="/industries/custom-candy-boxes/candy-boxes-window" element={<CandyBoxesWithWindow />} />
          <Route path="/industries/custom-candy-boxes/custom-christmas-candy-boxes" element={<CustomChristmasCandyBoxesPage />} />
          <Route path="/industries/custom-candy-boxes/mylar-bags-for-candies" element={<MylarBagsForCandies />} />
          <Route path="/industries/custom-candy-boxes/custom-candy-display-boxes" element={<CustomCandyDisplayBoxes />} />
          <Route path="/industries/custom-cbd-boxes" element={<CbdBoxes />} />
          <Route path="/industries/custom-hemp-boxes" element={<HempBoxes />} />
          <Route path="/industries/custom-hemp-boxes/hemp-paper-boxes" element={<HempPaperBoxes />} />
          <Route path="/industries/custom-hemp-boxes/hemp-shipping-boxes" element={<HempShippingBoxes />} />
          <Route path="/industries/custom-hemp-boxes/hemp-pre-roll-boxes" element={<HempPreRollBoxes />} />
          <Route path="/industries/custom-hemp-boxes/hemp-oil-boxes" element={<HempOilBoxes />} />
          <Route path="/industries/custom-hemp-boxes/hemp-gift-boxes" element={<HempGiftBoxes />} />
          <Route path="/industries/custom-hemp-boxes/hemp-cardboard-boxes" element={<HempCardboardBoxes />} />
          <Route path="/industries/custom-hemp-boxes/custom-hemp-cigarette-boxes" element={<CustomHempCigaretteBoxesCategory />} />
          <Route path="/industries/custom-hemp-boxes/e-liquid-boxes" element={<ELiquidBoxes />} />
          <Route path="/industries/custom-hemp-boxes/hemp-tea-bags" element={<HempTeaBags />} />
          <Route path="/industries/custom-hemp-boxes/cbd-hemp-oil-boxes" element={<CBDHempOilBoxes />} />
          <Route path="/industries/cbd-packaging/custom-cbd-capsule-boxes" element={<CustomCbdCapsuleBoxes />} />
          <Route path="/industries/cbd-packaging/custom-cbd-cream-boxes" element={<CustomCbdCreamBoxes />} />
          <Route path="/industries/cbd-packaging/custom-cbd-lotion-boxes" element={<CustomCbdLotionBoxes />} />
          <Route path="/industries/cbd-packaging/cbd-oil-boxes" element={<CbdOilBoxes />} />
          <Route path="/industries/cbd-packaging/essential-oil-boxes" element={<CbdEssentialOilBoxes />} />
          <Route path="/industries/cbd-packaging/custom-cbd-isolate-boxes" element={<CustomCbdIsolateBoxes />} />
          <Route path="/industries/cbd-packaging/custom-cbd-pod-boxes" element={<CustomCbdPodBoxes />} />
          <Route path="/industries/cbd-packaging/cbd-lollipop-boxes" element={<CbdLollipopBoxes />} />
          <Route path="/industries/cbd-packaging/cbd-gummies-boxes" element={<CbdGummiesBoxes />} />
          <Route path="/industries/cbd-packaging/delta-8-thc-boxes" element={<Delta8ThcBoxes />} />
          <Route path="/industries/cbd-packaging/cbd-display-boxes" element={<CbdDisplayBoxes />} />
          <Route path="/industries/cbd-packaging/tincture-boxes" element={<TinctureBoxes />} />
          <Route path="/industries/cbd-packaging/blunt-boxes" element={<BluntBoxes />} />
          <Route path="/industries/cbd-packaging/custom-cbd-bottle-boxes" element={<CustomCbdBottleBoxes />} />
          <Route path="/industries/cbd-packaging/custom-cbd-flower-boxes" element={<CustomCbdFlowerBoxes />} />
          <Route path="/industries/cbd-packaging/cbd-chocolate-boxes" element={<CbdChocolateBoxes />} />
          <Route path="/industries/cbd-packaging/cbd-mailer-boxes" element={<CbdMailerBoxes />} />
          <Route path="/industries/cbd-packaging/cbd-hemp-oil-boxes" element={<CbdHempOilBoxes />} />
          <Route path="/industries/cbd-packaging/cbd-bath-bomb-boxes" element={<CbdBathBombBoxes />} />
          <Route path="/industries/cbd-packaging/cbd-cartridge-boxes" element={<CbdCartridgeBoxes />} />
          <Route path="/industries/cbd-packaging/cbd-vape-boxes" element={<CbdVapeBoxes />} />
          <Route path="/industries/cbd-packaging/cbd-pre-roll-boxes" element={<CbdPreRollBoxes />} />
          <Route path="/industries/cbd-packaging/concentrate-packaging" element={<ConcentratePackaging />} />
          <Route path="/industries/cbd-packaging/custom-cbd-boxes" element={<CustomCbdBoxesPage />} />
          <Route path="/industries/cbd-packaging/hemp-packaging" element={<HempPackaging />} />
          <Route path="/industries/corrugated-boxes" element={<CorrugatedBoxes />} />
          <Route path="/industries/custom-kraft-boxes" element={<CustomKraftBoxes />} />
          <Route path="/industries/cardstock-boxes" element={<CardstockBoxes />} />
          <Route path="/industries/display-boxes" element={<DisplayBoxes />} />
          <Route path="/industries/e-commerce" element={<EcommerceBoxes />} />
          <Route path="/industries/e-commerce/custom-mailer-boxes" element={<CustomMailerBoxes />} />
          <Route path="/industries/e-commerce/subscription-boxes" element={<SubscriptionBoxesEcommerce />} />
          <Route path="/industries/e-commerce/shipping-boxes" element={<ShippingBoxesEcommerce />} />
          <Route path="/industries/e-commerce/e-commerce-product-boxes" element={<EcommerceProductBoxes />} />
          <Route path="/industries/e-commerce/corrugated-boxes" element={<CorrugatedBoxesEcommerce />} />
          <Route path="/industries/e-commerce/custom-inserts-dividers" element={<CustomInsertsDividers />} />
          <Route path="/industries/electronics-boxes" element={<ElectronicsBoxes />} />
          <Route path="/industries/electronics-boxes/hair-dryer-packaging" element={<HairDryerPackaging />} />
          <Route path="/industries/electronics-boxes/cell-phone-charger-boxes" element={<CellPhoneChargerBoxes />} />
          <Route path="/industries/electronics-boxes/battery-packaging" element={<BatteryPackaging />} />
          <Route path="/industries/electronics-boxes/cd-jackets" element={<CDJackets />} />
          <Route path="/industries/electronics-boxes/cd-covers" element={<CDCovers />} />
          <Route path="/industries/electronics-boxes/camera-packaging" element={<CameraPackaging />} />
          <Route path="/industries/electronics-boxes/phone-boxes" element={<PhoneBoxes />} />
          <Route path="/industries/electronics-boxes/headphone-packaging" element={<HeadphonePackaging />} />
          <Route path="/industries/electronics-boxes/software-boxes" element={<SoftwareBoxes />} />
          <Route path="/industries/food-boxes" element={<FoodBoxes />} />
          <Route path="/industries/food-boxes/chinese-takeout-boxes" element={<ChineseTakeoutBoxes />} />
          <Route path="/industries/food-boxes/donut-boxes" element={<FoodDonutBoxes />} />
          <Route path="/industries/food-boxes/custom-popcorn-boxes" element={<CustomPopcornBoxes />} />
          <Route path="/industries/food-boxes/dietary-supplement-packaging" element={<DietarySupplementPackaging />} />
          <Route path="/industries/food-boxes/custom-pizza-slice-boxes" element={<CustomPizzaSliceBoxes />} />
          <Route path="/industries/food-boxes/custom-paper-food-bags" element={<CustomFoodPaperFoodBags />} />
          <Route path="/industries/food-boxes/paper-food-trays" element={<PaperFoodTrays />} />
          <Route path="/industries/food-boxes/mini-cereal-boxes" element={<MiniCerealBoxes />} />
          <Route path="/industries/fragrance-boxes" element={<FragranceBoxes />} />
          <Route path="/industries/fragrance-boxes/custom-perfume-boxes" element={<CustomPerfumeBoxes />} />
          <Route path="/industries/fragrance-boxes/perfume-subscription-boxes" element={<PerfumeSubscriptionBoxes />} />
          <Route path="/industries/fragrance-boxes/luxury-perfume-packaging" element={<LuxuryPerfumePackaging />} />
          <Route path="/industries/fragrance-boxes/incense-boxes" element={<IncenseBoxes />} />
          <Route path="/industries/game-boxes" element={<GameBoxes />} />
          <Route path="/industries/game-boxes/custom-toy-boxes" element={<CustomToyBoxes />} />
          <Route path="/industries/game-boxes/playing-card-boxes" element={<PlayingCardBoxes />} />
          <Route path="/industries/game-boxes/gaming-subscription-box" element={<GamingSubscriptionBox />} />
          <Route path="/industries/game-boxes/custom-board-game-boxes" element={<CustomBoardGameBoxes />} />
          <Route path="/industries/gift-boxes" element={<GiftBoxes />} />
          <Route path="/industries/gift-boxes/favor-boxes" element={<FavorBoxes />} />
          <Route path="/industries/gift-boxes/gift-card-boxes" element={<GiftCardBoxes />} />
          <Route path="/industries/gift-boxes/custom-printed-gift-boxes" element={<CustomPrintedGiftBoxes />} />
          <Route path="/industries/gift-boxes/hemp-gift-boxes" element={<HempGiftBoxesCategory />} />
          <Route path="/industries/gift-boxes/cardboard-gift-boxes" element={<CardboardGiftBoxes />} />
          <Route path="/industries/gift-boxes/chocolate-gift-boxes" element={<ChocolateGiftBoxesCategory />} />
          <Route path="/industries/gift-boxes/gift-tags" element={<GiftTags />} />
          <Route path="/industries/gift-boxes/gable-gift-boxes" element={<GableGiftBoxes />} />
          <Route path="/industries/holographic-boxes" element={<HolographicBoxes />} />
          <Route path="/industries/holiday-boxes" element={<HolidayBoxes />} />
          <Route path="/industries/holiday-boxes/christmas-gift-boxes" element={<HolidayChristmasGiftBoxes />} />
          <Route path="/industries/holiday-boxes/custom-halloween-boxes" element={<CustomHalloweenBoxes />} />
          <Route path="/industries/holiday-boxes/holiday-gift-boxes" element={<HolidayGiftBoxes />} />
          <Route path="/industries/holiday-boxes/thanksgiving-boxes" element={<ThanksgivingBoxes />} />
          <Route path="/industries/holiday-boxes/thanksgiving-food-boxes" element={<ThanksgivingFoodBoxes />} />
          <Route path="/industries/holiday-boxes/custom-valentines-boxes" element={<CustomValentinesBoxes />} />
          <Route path="/industries/holiday-boxes/halloween-window-boxes" element={<HalloweenWindowBoxes />} />
          <Route path="/industries/holiday-boxes/christmas-pillow-boxes" element={<ChristmasPillowBoxes />} />
          <Route path="/industries/jewelry-boxes" element={<JewelryBoxes />} />
          <Route path="/industries/mailer-boxes" element={<MailerBoxes />} />
          <Route path="/industries/marijuana-packaging" element={<MarijuanaPackaging />} />
          <Route path="/categories/custom-mylar-bags" element={<CustomMylarBags />} />
          <Route path="/shapes-styles/weed-bags" element={<WeedBags />} />
          <Route path="/shapes-styles/pillow-boxes" element={<PillowBoxes />} />
          <Route path="/shapes-styles/window-packaging" element={<WindowPackaging />} />
          <Route path="/industries/custom-paper-bags" element={<CustomPaperBags />} />
          <Route path="/industries/custom-paper-bags/custom-auto-bottom-gable-bags" element={<CustomAutoBottomGableBags />} />
          <Route path="/industries/custom-paper-bags/custom-paper-food-bags" element={<CustomPaperFoodBags />} />
          <Route path="/industries/custom-paper-bags/christmas-paper-bags" element={<CustomChristmasPaperBags />} />
          <Route path="/industries/custom-paper-bags/christmas-gift-bags" element={<CustomChristmasGiftBags />} />
          <Route path="/industries/custom-paper-bags/custom-brown-paper-bags" element={<CustomBrownPaperBags />} />
          <Route path="/industries/custom-paper-bags/paper-shopping-bags" element={<PaperShoppingBags />} />
          <Route path="/industries/custom-paper-bags/white-paper-bags" element={<WhitePaperBags />} />
          <Route path="/industries/custom-paper-bags/paper-gift-bags" element={<PaperGiftBags />} />
          <Route path="/industries/custom-paper-bags/paper-lunch-bags" element={<PaperLunchBags />} />
          <Route path="/industries/custom-paper-bags/fries-bag" element={<FriesBag />} />
          <Route path="/industries/custom-paper-bags/glassine-bags" element={<GlassineBags />} />
          <Route path="/industries/custom-paper-bags/candy-bags" element={<CandyBags />} />
          <Route path="/industries/custom-paper-bags/bakery-bags" element={<BakeryBags />} />
          <Route path="/industries/custom-paper-bags/cookie-bags" element={<CookieBags />} />
          <Route path="/industries/custom-paper-bags/gift-bags" element={<GiftBags />} />
          <Route path="/industries/custom-paper-bags/carry-out-bags" element={<CarryOutBags />} />
          <Route path="/industries/custom-paper-bags/exotic-weed-bag" element={<ExoticWeedBag />} />
          <Route path="/industries/custom-paper-bags/paper-bags-with-handles" element={<PaperBagsWithHandles />} />
          <Route path="/shapes-styles/hang-tags" element={<HangTags />} />
          <Route path="/industries/pharma-packaging" element={<PharmaPackaging />} />
          <Route path="/industries/pre-roll-boxes" element={<PreRollBoxes />} />
          <Route path="/industries/retail-boxes" element={<RetailBoxes />} />
          <Route path="/industries/rigid-boxes" element={<RigidBoxes />} />
          <Route path="/industries/soap-boxes" element={<SoapBoxes />} />
          <Route path="/shapes-styles/shipping-boxes" element={<ShippingBoxes />} />
          <Route path="/industries/sports-boxes" element={<SportsBoxes />} />
          <Route path="/industries/stationery-boxes" element={<StationeryBoxes />} />
          <Route path="/shapes-styles/subscription-boxes" element={<SubscriptionBoxes />} />
          <Route path="/industries/sustainable-packaging" element={<SustainablePackaging />} />
          <Route path="/industries/tea-and-coffee-cups" element={<TeaCoffeeCups />} />
          <Route path="/industries/tuck-boxes" element={<TuckBoxes />} />
          <Route path="/industries/vape-boxes" element={<VapeBoxes />} />
          <Route path="/industries/weed-boxes" element={<WeedBoxes />} />
          <Route path="/shapes-styles/custom-shape-boxes" element={<CustomShapeBoxes />} />
          <Route path="/shapes-styles/stickers-and-labels" element={<StickersAndLabels />} />
          <Route path="/shapes-styles/sleeves-and-trays" element={<SleevesAndTrays />} />
          <Route path="/shapes-styles" element={<ShapesStyles />} />
          <Route path="/shapes-styles/gable-boxes" element={<GableBoxes />} />
          <Route path="/shapes-styles/child-resistant-packaging" element={<ChildResistantPackaging />} />
          <Route path="/shapes-styles/custom-bags" element={<CustomBags />} />
          <Route path="/packaging-hub" element={<PackagingHub />} />
          <Route path="/primary-packaging" element={<PrimaryPackaging />} />
          <Route path="/primary-packaging/glass-serum-bottle" element={<GlassSerumBottle />} />
          <Route path="/primary-packaging/plastic-cleanser-tube" element={<PlasticCleanserTube />} />
          <Route path="/primary-packaging/plastic-mist-bottle" element={<PlasticMistBottle />} />
          <Route path="/primary-packaging/glass-roll-on-bottle" element={<GlassRollOnBottle />} />
          <Route path="/primary-packaging/plastic-shampoo-bottle" element={<PlasticShampooBottle />} />
          <Route path="/primary-packaging/paper-tubes" element={<PaperTubes />} />
          <Route path="/primary-packaging/glass-candle-jars" element={<GlassCandleJars />} />
          <Route path="/primary-packaging/glass-perfume-bottle" element={<GlassPerfumeBottle />} />
          <Route path="/primary-packaging/plastic-capsule-bottle" element={<PlasticCapsuleBottle />} />
          <Route path="/primary-packaging/moisturizer-jar" element={<MoisturizerJar />} />
          <Route path="/primary-packaging/plastic-lotion-bottle" element={<PlasticLotionBottle />} />
          <Route path="/primary-packaging/glass-cream-jars" element={<GlassCreamJars />} />
          <Route path="/primary-packaging/custom-pre-roll-tubes" element={<CustomPreRollTubes />} />
          <Route path="/primary-packaging/dropper-bottles" element={<DropperBottles />} />
          <Route path="/primary-packaging/jars-with-pump" element={<JarsWithPump />} />
          <Route path="/box-by-materials" element={<BoxByMaterials />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
