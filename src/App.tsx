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
import CustomCandleJarBoxes from "./pages/industry-pages/candle-boxes/CustomCandleJarBoxes";
import TwoPieceCandleBoxes from "./pages/industry-pages/candle-boxes/TwoPieceCandleBoxes";
import CandleShippingBoxes from "./pages/industry-pages/candle-boxes/CandleShippingBoxes";
import TaperCandleBoxes from "./pages/industry-pages/candle-boxes/TaperCandleBoxes";
import CandleBoxesWithInserts from "./pages/industry-pages/candle-boxes/CandleBoxesWithInserts";
import CandleLabels from "./pages/industry-pages/candle-boxes/CandleLabels";
import CandleBoxesWithWindow from "./pages/industry-pages/candle-boxes/CandleBoxesWithWindow";
import WaxMeltPackaging from "./pages/industry-pages/candle-boxes/WaxMeltPackaging";
import CandleSubscriptionBoxesIndustry from "./pages/industry-pages/candle-boxes/CandleSubscriptionBoxes";
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
import ChocolateSubscriptionBoxIndustry from "./pages/industry-pages/chocolate-boxes/ChocolateSubscriptionBox";
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
import JewelryBoxes from "./pages/categories/JewelryBoxes";
import BraceletSquareBoxes from "./pages/industry-pages/jewelry-boxes/BraceletSquareBoxes";
import CustomNecklaceLidOffPackaging from "@/pages/industry-pages/jewelry-boxes/CustomNecklaceLidOffPackaging";
import PendantBoxes from "@/pages/industry-pages/jewelry-boxes/PendantBoxes";
import BraceletBoxes from "@/pages/industry-pages/jewelry-boxes/BraceletBoxes";
import RingBoxes from "@/pages/industry-pages/jewelry-boxes/RingBoxes";
import EarringBoxes from "@/pages/industry-pages/jewelry-boxes/EarringBoxes";
import LuxuryJewelryBoxes from "@/pages/industry-pages/jewelry-boxes/LuxuryJewelryBoxes";
import NecklaceBoxes from "@/pages/industry-pages/jewelry-boxes/NecklaceBoxes";
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
import MarijuanaPackaging from "./pages/categories/MarijuanaPackaging";
import PharmaPackaging from "./pages/categories/PharmaPackaging";
import PreRollBoxes from "./pages/categories/PreRollBoxes";
import HempPreRollBoxesCategory from "./pages/industry-pages/pre-roll-boxes/HempPreRollBoxes";
import PreRollPackagingLabels from "./pages/industry-pages/pre-roll-boxes/PreRollPackagingLabels";
import LuxuryPreRollPackaging from "./pages/industry-pages/pre-roll-boxes/LuxuryPreRollPackaging";
import CustomPreRollConePackaging from "./pages/industry-pages/pre-roll-boxes/CustomPreRollConePackaging";
import PreRollJointBoxes from "./pages/industry-pages/pre-roll-boxes/PreRollJointBoxes";
import ChildResistantPreRollBoxCategory from "./pages/industry-pages/pre-roll-boxes/ChildResistantPreRollBox";
import RetailBoxes from "./pages/categories/RetailBoxes";
import CustomBusinessCards from "./pages/industry-pages/retail-boxes/CustomBusinessCards";
import CustomMatchBoxes from "./pages/industry-pages/retail-boxes/CustomMatchBoxes";
import DietarySupplementPackagingRetail from "./pages/industry-pages/retail-boxes/DietarySupplementPackaging";
import BusinessLabels from "./pages/industry-pages/retail-boxes/BusinessLabels";
import CustomBoxesWithLogo from "./pages/industry-pages/retail-boxes/CustomBoxesWithLogo";
import ClamshellBoxes from "./pages/industry-pages/retail-boxes/ClamshellBoxes";
import BarbieBoxes from "./pages/industry-pages/retail-boxes/BarbieBoxes";
import FoldingCartons from "./pages/industry-pages/retail-boxes/FoldingCartons";
import SoapBoxes from "./pages/categories/SoapBoxes";
import BathBombPackaging from "./pages/industry-pages/soap-boxes/BathBombPackaging";
import CustomHandmadeSoapBoxes from "./pages/industry-pages/soap-boxes/CustomHandmadeSoapBoxes";
import CustomKraftSoapBoxes from "./pages/industry-pages/soap-boxes/CustomKraftSoapBoxes";
import CustomSoapBarBoxes from "./pages/industry-pages/soap-boxes/CustomSoapBarBoxes";
import CustomSoapWrappingPaper from "./pages/industry-pages/soap-boxes/CustomSoapWrappingPaper";
import LuxurySoapPackaging from "./pages/industry-pages/soap-boxes/LuxurySoapPackaging";
import SoapBarLabels from "./pages/industry-pages/soap-boxes/SoapBarLabels";
import SoapSleeves from "./pages/industry-pages/soap-boxes/SoapSleeves";
import SquareSoapBoxes from "./pages/industry-pages/soap-boxes/SquareSoapBoxes";
import SportsBoxes from "./pages/categories/SportsBoxes";
import CustomBaseballBoxes from "./pages/industry-pages/sports-boxes/CustomBaseballBoxes";
import CustomGolfBallBoxes from "./pages/industry-pages/sports-boxes/CustomGolfBallBoxes";
import FootballBoxes from "./pages/industry-pages/sports-boxes/FootballBoxes";
import BasketballBoxes from "./pages/industry-pages/sports-boxes/BasketballBoxes";
import TennisBallBoxes from "./pages/industry-pages/sports-boxes/TennisBallBoxes";
import StationeryBoxes from "./pages/categories/StationeryBoxes";
import CustomBusinessCardsStationery from "./pages/industry-pages/stationery-boxes/CustomBusinessCards";
import DocumentFolder from "./pages/industry-pages/stationery-boxes/DocumentFolder";
import PenGiftBoxes from "./pages/industry-pages/stationery-boxes/PenGiftBoxes";
import MailingEnvelopes from "./pages/industry-pages/stationery-boxes/MailingEnvelopes";
import InvitationBoxes from "./pages/industry-pages/stationery-boxes/InvitationBoxes";
import MarkerBoxes from "./pages/industry-pages/stationery-boxes/MarkerBoxes";
import StapleBoxes from "./pages/industry-pages/stationery-boxes/StapleBoxes";
import CardboardPencilBoxes from "./pages/industry-pages/stationery-boxes/CardboardPencilBoxes";
import PackagingInserts from "./pages/industry-pages/stationery-boxes/PackagingInserts";
import PencilBoxes from "./pages/industry-pages/stationery-boxes/PencilBoxes";
import CustomBookmarks from "./pages/industry-pages/stationery-boxes/CustomBookmarks";
import BookBoxes from "./pages/industry-pages/stationery-boxes/BookBoxes";
import DisplayBoxes from "./pages/categories/DisplayBoxes";
import MailerBoxes from "./pages/categories/MailerBoxes";

// Mailer Boxes Shapes & Styles
import BlackMailerBoxes from "./pages/shapes-styles/mailer-boxes/BlackMailerBoxes";
import BubbleMailers from "./pages/shapes-styles/mailer-boxes/BubbleMailers";
import ColoredMailerBoxes from "./pages/shapes-styles/mailer-boxes/ColoredMailerBoxes";
import CorrugatedMailerBoxes from "./pages/shapes-styles/mailer-boxes/CorrugatedMailerBoxes";
import EarLockMailerBox from "./pages/shapes-styles/mailer-boxes/EarLockMailerBox";
import FourByEightBubbleMailers from "./pages/shapes-styles/mailer-boxes/FourByEightBubbleMailers";
import KraftBubbleMailers from "./pages/shapes-styles/mailer-boxes/KraftBubbleMailers";
import KraftMailerBoxes from "./pages/shapes-styles/mailer-boxes/KraftMailerBoxes";
import PolyBubbleMailers from "./pages/shapes-styles/mailer-boxes/PolyBubbleMailers";
import TuckTopMailerBoxes from "./pages/shapes-styles/mailer-boxes/TuckTopMailerBoxes";
import VinylRecordMailers from "./pages/shapes-styles/mailer-boxes/VinylRecordMailers";
import WhiteMailerBoxes from "./pages/shapes-styles/mailer-boxes/WhiteMailerBoxes";
import GableBoxes from "./pages/categories/GableBoxes";
import RigidBoxes from "./pages/categories/RigidBoxes";
import TuckBoxes from "./pages/categories/TuckBoxes";
import CustomMylarBags from "./pages/categories/CustomMylarBags";
import CardboardBoxes from "./pages/categories/CardboardBoxes";
import SustainablePackaging from "./pages/categories/SustainablePackaging";
import TeaCoffeeCups from "./pages/categories/TeaCoffeeCups";
import ShippingBoxes from "./pages/categories/ShippingBoxes";
// Shipping Boxes Shapes & Styles
import ChineseTakeoutBoxesShipping from "./pages/shapes-styles/shipping-boxes/ChineseTakeoutBoxes";
import DoubleWallTuckFrontShipping from "./pages/shapes-styles/shipping-boxes/DoubleWallTuckFront";
import HempShippingBoxesShape from "./pages/shapes-styles/shipping-boxes/HempShippingBoxes";
import CandleShippingBoxesShape from "./pages/shapes-styles/shipping-boxes/CandleShippingBoxes";
import HatShippingBoxesShape from "./pages/shapes-styles/shipping-boxes/HatShippingBoxes";
import EightBySixByFourShippingBoxes from "./pages/shapes-styles/shipping-boxes/EightBySixByFourShippingBoxes";
import FiveByFiveByFiveBoxes from "./pages/shapes-styles/shipping-boxes/FiveByFiveByFiveBoxes";
import WineShippingBoxes from "./pages/shapes-styles/shipping-boxes/WineShippingBoxes";
import LongNarrowShippingBoxes from "./pages/shapes-styles/shipping-boxes/LongNarrowShippingBoxes";
import ShippingLabelsShape from "./pages/shapes-styles/shipping-boxes/ShippingLabels";
import WhiteShippingBoxesShipping from "./pages/shapes-styles/shipping-boxes/WhiteShippingBoxes";
import DeliveryBoxesShipping from "./pages/shapes-styles/shipping-boxes/DeliveryBoxes";
import VapeBoxes from "./pages/categories/VapeBoxes";
import WeedBoxes from "./pages/categories/WeedBoxes";
import WeedSubscriptionBox from "./pages/industry-pages/weed-boxes/WeedSubscriptionBox";
import WeedMysteryBoxes from "./pages/industry-pages/weed-boxes/WeedMysteryBoxes";
import MonthlyWeedBoxes from "./pages/industry-pages/weed-boxes/MonthlyWeedBoxes";
import WeedGiftBoxes from "./pages/industry-pages/weed-boxes/WeedGiftBoxes";
import SubscriptionBoxes from "./pages/categories/SubscriptionBoxes";
import CustomShapeBoxes from "./pages/categories/CustomShapeBoxes";
import StickersAndLabels from "./pages/categories/StickersAndLabels";
import SleevesAndTrays from "./pages/categories/SleevesAndTrays";
import CardstockBoxes from "./pages/categories/CardstockBoxes";
import ChildResistantPackaging from "./pages/categories/ChildResistantPackaging";
import ChildResistantMylarBags from "./pages/shapes-styles/child-resistant-packaging/ChildResistantMylarBags";
import DispensaryMylarBags from "./pages/shapes-styles/custom-mylar-bags/DispensaryMylarBags";
import DieCutMylarBags from "./pages/shapes-styles/custom-mylar-bags/DieCutMylarBags";
import MylarVacuumSealBags from "./pages/shapes-styles/custom-mylar-bags/MylarVacuumSealBags";
import MylarFoodStorageBags from "./pages/shapes-styles/custom-mylar-bags/MylarFoodStorageBags";
import BlackMylarBags from "./pages/shapes-styles/custom-mylar-bags/BlackMylarBags";
import SmellProofMylarBags from "./pages/shapes-styles/custom-mylar-bags/SmellProofMylarBags";
import ChildResistantMylarBagsCategory from "./pages/shapes-styles/custom-mylar-bags/ChildResistantMylarBags";
import ExoticMylarBags from "./pages/shapes-styles/custom-mylar-bags/ExoticMylarBags";
import SmallMylarBags from "./pages/shapes-styles/custom-mylar-bags/SmallMylarBags";
import HolographicMylarBags from "./pages/shapes-styles/custom-mylar-bags/HolographicMylarBags";
import KraftMylarBags from "./pages/shapes-styles/custom-mylar-bags/KraftMylarBags";
import MylarZiplockBags from "./pages/shapes-styles/custom-mylar-bags/MylarZiplockBags";
import ClearMylarBags from "./pages/shapes-styles/custom-mylar-bags/ClearMylarBags";
import ChildResistantBluntPackaging from "./pages/shapes-styles/child-resistant-packaging/ChildResistantBluntPackaging";
import ChildResistantCigaretteBoxes from "./pages/shapes-styles/child-resistant-packaging/ChildResistantCigaretteBoxes";
import ChildResistantJointPackaging from "./pages/shapes-styles/child-resistant-packaging/ChildResistantJointPackaging";
import ChildResistantPreRollBox from "./pages/shapes-styles/child-resistant-packaging/ChildResistantPreRollBox";
import CorrugatedBoxes from "./pages/categories/CorrugatedBoxes";
import CustomKraftBoxes from "./pages/categories/CustomKraftBoxes";
import CustomBags from "./pages/categories/CustomBags";
import HeatSealMylarBags from "./pages/shapes-styles/custom-bags/HeatSealMylarBags";
import WeedMylarBags from "./pages/shapes-styles/custom-bags/WeedMylarBags";
import EdibleMylarBags from "./pages/shapes-styles/custom-bags/EdibleMylarBags";
import PaperBagsWithHandlesCustomBags from "./pages/shapes-styles/custom-bags/PaperBagsWithHandles";
import HolographicBagsCustomBags from "./pages/shapes-styles/custom-bags/HolographicBags";
import KraftBags from "./pages/shapes-styles/custom-bags/KraftBags";
import TakeOutBags from "./pages/shapes-styles/custom-bags/TakeOutBags";
import TShirtBags from "./pages/shapes-styles/custom-bags/TShirtBags";
import PaperGroceryBags from "./pages/shapes-styles/custom-bags/PaperGroceryBags";
import VacuumSealWeedBags from "./pages/shapes-styles/custom-bags/VacuumSealWeedBags";
import SachetPackaging from "./pages/shapes-styles/custom-bags/SachetPackaging";
import CoffeeBags from "./pages/shapes-styles/custom-bags/CoffeeBags";
import FlatBottomBags from "./pages/shapes-styles/custom-bags/FlatBottomBags";
import TinTiePaperBags from "./pages/shapes-styles/custom-bags/TinTiePaperBags";
import CustomHandleBoxes from "./pages/shapes-styles/custom-shape-boxes/CustomHandleBoxes";
import CustomPieBoxes from "./pages/shapes-styles/custom-shape-boxes/CustomPieBoxes";
import BraceletSquareBoxesCustomShape from "./pages/shapes-styles/custom-shape-boxes/BraceletSquareBoxes";
import CustomDieCutBoxes from "./pages/shapes-styles/custom-shape-boxes/CustomDieCutBoxes";
import SquareSoapBoxesCustomShape from "./pages/shapes-styles/custom-shape-boxes/SquareSoapBoxes";
import CustomPyramidBoxes from "./pages/shapes-styles/custom-shape-boxes/CustomPyramidBoxes";
import HexagonBoxes from "./pages/shapes-styles/custom-shape-boxes/HexagonBoxes";
import RectangularBoxes from "./pages/shapes-styles/custom-shape-boxes/RectangularBoxes";
import TriangleBoxes from "./pages/shapes-styles/custom-shape-boxes/TriangleBoxes";
import OctagonBoxes from "./pages/shapes-styles/custom-shape-boxes/OctagonBoxes";
import SquareBoxes from "./pages/shapes-styles/custom-shape-boxes/SquareBoxes";
import CubeBoxes from "./pages/shapes-styles/custom-shape-boxes/CubeBoxes";
import CigaretteDisplayBoxes from "./pages/shapes-styles/display-boxes/CigaretteDisplayBoxes";
import CosmeticDisplayBoxes from "./pages/shapes-styles/display-boxes/CosmeticDisplayBoxes";
import ClearLidBoxes from "./pages/shapes-styles/display-boxes/ClearLidBoxes";
import ProductDisplayBoxes from "./pages/shapes-styles/display-boxes/ProductDisplayBoxes";
import CountertopDisplayBoxes from "./pages/shapes-styles/display-boxes/CountertopDisplayBoxes";
import WatchDisplayBoxes from "./pages/shapes-styles/display-boxes/WatchDisplayBoxes";
import HealthCounterDisplayBoxes from "./pages/shapes-styles/display-boxes/HealthCounterDisplayBoxes";
import CandyDisplayBoxes from "./pages/shapes-styles/display-boxes/CandyDisplayBoxes";
import CardboardDisplayBoxes from "./pages/shapes-styles/display-boxes/CardboardDisplayBoxes";
import CBDDisplayBoxes from "./pages/shapes-styles/display-boxes/CBDDisplayBoxes";
import CounterDisplayBoxes from "./pages/shapes-styles/display-boxes/CounterDisplayBoxes";
import JewelryDisplayBoxes from "./pages/shapes-styles/display-boxes/JewelryDisplayBoxes";
import LollipopDisplayBoxes from "./pages/shapes-styles/display-boxes/LollipopDisplayBoxes";
import BrochureDisplayHolder from "./pages/shapes-styles/display-boxes/BrochureDisplayHolder";
import CustomCandleDisplayBoxes from "./pages/shapes-styles/display-boxes/CustomCandleDisplayBoxes";
import CustomPreRollDisplayBoxes from "./pages/shapes-styles/display-boxes/CustomPreRollDisplayBoxes";
import HolographicBoxes from "./pages/categories/HolographicBoxes";
import CustomPaperBags from "./pages/categories/CustomPaperBags";
import HangTags from "./pages/categories/HangTags";
import PillowBoxes from "./pages/categories/PillowBoxes";
import WeedBags from "./pages/categories/WeedBags";

// Weed Bags - Shapes & Styles
import ExoticWeedBag from "./pages/shapes-styles/weed-bags/ExoticWeedBag";
import SmellProofWeedBags from "./pages/shapes-styles/weed-bags/SmellProofWeedBags";
import WeedBags35 from "./pages/shapes-styles/weed-bags/WeedBags35";
import ZipWeedBags from "./pages/shapes-styles/weed-bags/ZipWeedBags";
import WeedPoundBags from "./pages/shapes-styles/weed-bags/WeedPoundBags";

import WindowPackaging from "./pages/categories/WindowPackaging";

// Window Packaging - Shapes & Styles
import CandleBoxesWithWindowWP from "./pages/shapes-styles/window-packaging/CandleBoxesWithWindow";
import GableBoxesWithWindowWP from "./pages/shapes-styles/window-packaging/GableBoxesWithWindow";
import HalloweenWindowBoxesWP from "./pages/shapes-styles/window-packaging/HalloweenWindowBoxes";
import SoapBoxesWithWindowWP from "./pages/shapes-styles/window-packaging/SoapBoxesWithWindow";
import PillowBoxesWithWindowWP from "./pages/shapes-styles/window-packaging/PillowBoxesWithWindow";
import KraftPaperBoxesWithWindowWP from "./pages/shapes-styles/window-packaging/KraftPaperBoxesWithWindow";
import CandyBoxesWithWindowWP from "./pages/shapes-styles/window-packaging/CandyBoxesWithWindow";
import CookieBoxesWithWindowWP from "./pages/shapes-styles/window-packaging/CookieBoxesWithWindow";

import GlassSerumBottle from "./pages/primary-packaging/GlassSerumBottle";
import PlasticCleanserTube from "./pages/primary-packaging/PlasticCleanserTube";
import PlasticMistBottle from "./pages/primary-packaging/PlasticMistBottle";
import GlassRollOnBottle from "./pages/primary-packaging/GlassRollOnBottle";
import PlasticShampooBottle from "./pages/primary-packaging/PlasticShampooBottle";
import PaperTubes from "./pages/primary-packaging/PaperTubes";
import GlassCandleJars from "./pages/primary-packaging/GlassCandleJars";
import GlassPerfumeBottle from "./pages/primary-packaging/GlassPerfumeBottle";
import PlasticCapsuleBottle from "./pages/primary-packaging/PlasticCapsuleBottle";
import MoisturizerJar from "./pages/primary-packaging/MoisturizerJar";
import PlasticLotionBottle from "./pages/primary-packaging/PlasticLotionBottle";
import GlassCreamJars from "./pages/primary-packaging/GlassCreamJars";
import CustomPreRollTubes from "./pages/primary-packaging/CustomPreRollTubes";
import DropperBottles from "./pages/primary-packaging/DropperBottles";
import CustomAutoBottomGableBags from "./pages/shapes-styles/custom-paper-bags/CustomAutoBottomGableBags";
import CustomPaperFoodBags from "./pages/shapes-styles/custom-paper-bags/CustomPaperFoodBags";
import CustomChristmasPaperBags from "./pages/shapes-styles/custom-paper-bags/ChristmasPaperBags";
import CustomChristmasGiftBags from "./pages/shapes-styles/custom-paper-bags/ChristmasGiftBags";
import CustomBrownPaperBags from "./pages/shapes-styles/custom-paper-bags/CustomBrownPaperBags";
import PaperShoppingBags from "./pages/shapes-styles/custom-paper-bags/PaperShoppingBags";
import WhitePaperBags from "./pages/shapes-styles/custom-paper-bags/WhitePaperBags";
import PaperGiftBags from "./pages/shapes-styles/custom-paper-bags/PaperGiftBags";
import PaperLunchBags from "./pages/shapes-styles/custom-paper-bags/PaperLunchBags";
import FriesBag from "./pages/shapes-styles/custom-paper-bags/FriesBag";
import GlassineBags from "./pages/shapes-styles/custom-paper-bags/GlassineBags";
import CandyBags from "./pages/shapes-styles/custom-paper-bags/CandyBags";
import BakeryBags from "./pages/shapes-styles/custom-paper-bags/BakeryBags";
import CookieBags from "./pages/shapes-styles/custom-paper-bags/CookieBags";
import GiftBags from "./pages/shapes-styles/custom-paper-bags/GiftBags";
import CarryOutBags from "./pages/shapes-styles/custom-paper-bags/CarryOutBags";
import PaperBagsWithHandles from "./pages/shapes-styles/custom-paper-bags/PaperBagsWithHandles";
import JarsWithPump from "./pages/primary-packaging/JarsWithPump";

import KraftGableBoxes from "./pages/shapes-styles/gable-boxes/KraftGableBoxes";
import ChristmasGableBoxesShapes from "./pages/shapes-styles/gable-boxes/ChristmasGableBoxes";
import WhiteGableBoxes from "./pages/shapes-styles/gable-boxes/WhiteGableBoxes";
import LargeGableBoxes from "./pages/shapes-styles/gable-boxes/LargeGableBoxes";
import GableGiftBoxesShapes from "./pages/shapes-styles/gable-boxes/GableGiftBoxes";
import BlackGableBoxes from "./pages/shapes-styles/gable-boxes/BlackGableBoxes";
import GableBoxesWithWindow from "./pages/shapes-styles/gable-boxes/GableBoxesWithWindow";
import GableBags from "./pages/shapes-styles/gable-boxes/GableBags";
import BlueGableBoxes from "./pages/shapes-styles/gable-boxes/BlueGableBoxes";
import CardboardGableBoxes from "./pages/shapes-styles/gable-boxes/CardboardGableBoxes";
import RedGableBoxes from "./pages/shapes-styles/gable-boxes/RedGableBoxes";
import KraftPaperGableBox from "./pages/shapes-styles/gable-boxes/KraftPaperGableBox";
import CustomDoorHangers from "./pages/shapes-styles/hang-tags/CustomDoorHangers";
import HangTagsChristmasTags from "./pages/shapes-styles/hang-tags/ChristmasTags";
import HangTagsGiftTags from "./pages/shapes-styles/hang-tags/GiftTags";
import PaperTags from "./pages/shapes-styles/hang-tags/PaperTags";
import ShapesStylesClothingHangTags from "./pages/shapes-styles/hang-tags/ClothingHangTags";
import ShapesStylesJewelryHangTags from "./pages/shapes-styles/hang-tags/JewelryHangTags";
import HangTagsCustomBookmarks from "./pages/shapes-styles/hang-tags/CustomBookmarks";
import ShippingTags from "./pages/shapes-styles/hang-tags/ShippingTags";

// Pillow Boxes Shapes & Styles
import WhitePillowBoxes from "./pages/shapes-styles/pillow-boxes/WhitePillowBoxes";
import SmallPillowBoxes from "./pages/shapes-styles/pillow-boxes/SmallPillowBoxes";
import KraftPillowBoxes from "./pages/shapes-styles/pillow-boxes/KraftPillowBoxes";
import LargePillowBoxes from "./pages/shapes-styles/pillow-boxes/LargePillowBoxes";
import PillowBoxesWithHandle from "./pages/shapes-styles/pillow-boxes/PillowBoxesWithHandle";
import BlackPillowBoxes from "./pages/shapes-styles/pillow-boxes/BlackPillowBoxes";
import PillowBoxesWithWindow from "./pages/shapes-styles/pillow-boxes/PillowBoxesWithWindow";
import CardboardPillowBoxes from "./pages/shapes-styles/pillow-boxes/CardboardPillowBoxes";
import PaperPillowBox from "./pages/shapes-styles/pillow-boxes/PaperPillowBox";
import PillowGiftBoxes from "./pages/shapes-styles/pillow-boxes/PillowGiftBoxes";

// Shapes & Styles -> Rigid Boxes 

import WalletBoxes from './pages/shapes-styles/rigid-boxes/WalletBoxes';
import FlipTopBoxes from './pages/shapes-styles/rigid-boxes/FlipTopBoxes';
import RigidGiftBoxes from './pages/shapes-styles/rigid-boxes/RigidGiftBoxes';
import CreditCardBoxes from './pages/shapes-styles/rigid-boxes/CreditCardBoxes';
import RigidSetupBoxes from './pages/shapes-styles/rigid-boxes/RigidSetupBoxes';
import RibbonBoxes from './pages/shapes-styles/rigid-boxes/RibbonBoxes';
import MagneticClosureBoxes from './pages/shapes-styles/rigid-boxes/MagneticClosureBoxes';
import RigidPaperBoxes from './pages/shapes-styles/rigid-boxes/RigidPaperBoxes';
import FlipTopBoxesWithMagneticClosure from './pages/shapes-styles/rigid-boxes/FlipTopBoxesWithMagneticClosure';



import BoxByMaterials from "./pages/BoxByMaterials";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";

import MarijuanaEdiblesPackaging from "@/pages/industry-pages/marijuana-packaging/MarijuanaEdiblesPackaging";
import MarijuanaLabels from "@/pages/industry-pages/marijuana-packaging/MarijuanaLabels";
import MedicalMarijuanaPackaging from "@/pages/industry-pages/marijuana-packaging/MedicalMarijuanaPackaging";
import MarijuanaCartridgePackaging from "@/pages/industry-pages/marijuana-packaging/MarijuanaCartridgePackaging";

import CustomPillBoxes from "./pages/industry-pages/pharma-packaging/CustomPillBoxes";
import CustomDispenserBoxes from "./pages/industry-pages/pharma-packaging/CustomDispenserBoxes";
import DietarySupplementPackagingPharma from "./pages/industry-pages/pharma-packaging/DietarySupplementPackaging";
import CustomMedicineBoxes from "./pages/industry-pages/pharma-packaging/CustomMedicineBoxes";
import OliveOilBoxes from "./pages/industry-pages/pharma-packaging/OliveOilBoxes";
import CondomBoxes from "./pages/industry-pages/pharma-packaging/CondomBoxes";
import GlovesBoxes from "./pages/industry-pages/pharma-packaging/GlovesBoxes";
import BandageBoxes from "./pages/industry-pages/pharma-packaging/BandageBoxes";

import SustainableCustomKraftSoapBoxes from "./pages/industry-pages/sustainable-packaging/CustomKraftSoapBoxes";
import SustainableKraftGiftBoxes from "./pages/industry-pages/sustainable-packaging/KraftGiftBoxes";
import SustainableKraftMylarBags from "./pages/industry-pages/sustainable-packaging/KraftMylarBags";
import SustainableKraftFoodBoxes from "./pages/industry-pages/sustainable-packaging/KraftFoodBoxes";
import SustainableKraftPieBoxes from "./pages/industry-pages/sustainable-packaging/KraftPieBoxes";
import SustainableKraftTuckTopBoxes from "./pages/industry-pages/sustainable-packaging/KraftTuckTopBoxes";
import SustainableKraftMailerBoxes from "./pages/industry-pages/sustainable-packaging/KraftMailerBoxes";

import CustomTeaBoxes from "./pages/industry-pages/tea-coffee-cups/CustomTeaBoxes";
import CustomPrintedCoffeePackaging from "./pages/industry-pages/tea-coffee-cups/CustomPrintedCoffeePackaging";
import CoffeeSleeves from "./pages/industry-pages/tea-coffee-cups/CoffeeSleeves";
import CoffeeCupsWithLids from "./pages/industry-pages/tea-coffee-cups/CoffeeCupsWithLids";
import DisposableCoffeeCups from "./pages/industry-pages/tea-coffee-cups/DisposableCoffeeCups";
import PaperCoffeeCups from "./pages/industry-pages/tea-coffee-cups/PaperCoffeeCups";
import ToGoCoffeeCups from "./pages/industry-pages/tea-coffee-cups/ToGoCoffeeCups";
import CuteCoffeeCups from "./pages/industry-pages/tea-coffee-cups/CuteCoffeeCups";
import CompostableCoffeeCups from "./pages/industry-pages/tea-coffee-cups/CompostableCoffeeCups";
import DoubleWallCoffeeCups from "./pages/industry-pages/tea-coffee-cups/DoubleWallCoffeeCups";
import RestaurantCoffeeCups from "./pages/industry-pages/tea-coffee-cups/RestaurantCoffeeCups";

import CustomECigaretteBoxesVapeBoxes from "./pages/industry-pages/vape-boxes/CustomECigaretteBoxes";
import CustomVapeCartridgeBoxes from "./pages/industry-pages/vape-boxes/CustomVapeCartridgeBoxes";
import VapePenBoxes from "./pages/industry-pages/vape-boxes/VapePenBoxes";
import CannabisVapePackagingVapeBoxes from "./pages/industry-pages/vape-boxes/CannabisVapePackaging";
import OneMlVapeCartridgeBoxes from "./pages/industry-pages/vape-boxes/OneMlVapeCartridgeBoxes";
import VapeDisplayBoxes from "./pages/industry-pages/vape-boxes/VapeDisplayBoxes";
import DisposableVapeBoxes from "./pages/industry-pages/vape-boxes/DisposableVapeBoxes";
import EmptyVapeCartridgeBoxes from "./pages/industry-pages/vape-boxes/EmptyVapeCartridgeBoxes";
import DankVapePackaging from "./pages/industry-pages/vape-boxes/DankVapePackaging";
import CBDVapeBoxesCategory from "./pages/industry-pages/vape-boxes/CBDVapeBoxes";
import VapeJuiceBoxes from "./pages/industry-pages/vape-boxes/VapeJuiceBoxes";
import JuulPackaging from "./pages/industry-pages/vape-boxes/JuulPackaging";
import RollEndTraySleeves from "./pages/shapes-styles/sleeves-trays/RollEndTray";
import CustomBowlSleevesSleeves from "./pages/shapes-styles/sleeves-trays/CustomBowlSleeves";
import CustomDrawerPaperBoxesSleeves from "./pages/shapes-styles/sleeves-trays/CustomDrawerPaperBoxes";
import PaperFoodTraysSleeves from "./pages/shapes-styles/sleeves-trays/PaperFoodTrays";
import HotDogSleevesSleeves from "./pages/shapes-styles/sleeves-trays/HotDogSleeves";
import CupSleevesSleeves from "./pages/shapes-styles/sleeves-trays/CupSleeves";
import CoffeeSleevesSleeves from "./pages/shapes-styles/sleeves-trays/CoffeeSleeves";
import PackagingSleevesSleeves from "./pages/shapes-styles/sleeves-trays/PackagingSleeves";
import SoapSleevesSleeves from "./pages/shapes-styles/sleeves-trays/SoapSleeves";
import GiftCardSleevesSleeves from "./pages/shapes-styles/sleeves-trays/GiftCardSleeves";
import PackagingInsertsSleeves from "./pages/shapes-styles/sleeves-trays/PackagingInserts";
import FoamInsertsSleeves from "./pages/shapes-styles/sleeves-trays/FoamInserts";
import SlideBoxesSleeves from "./pages/shapes-styles/sleeves-trays/SlideBoxes";
import SleeveBoxesSleeves from "./pages/shapes-styles/sleeves-trays/SleeveBoxes";
import CustomShrinkSleevesSleeves from "./pages/shapes-styles/sleeves-trays/CustomShrinkSleeves";
import SoapPackagingSleevesSleeves from "./pages/shapes-styles/sleeves-trays/SoapPackagingSleeves";
import TrayBoxesSleeves from "./pages/shapes-styles/sleeves-trays/TrayBoxes";
import KraftSleeveBoxesSleeves from "./pages/shapes-styles/sleeves-trays/KraftSleeveBoxes";
import CustomConeSleeveSleeves from "./pages/shapes-styles/sleeves-trays/CustomConeSleeve";
import BagLabelsStickers from "./pages/shapes-styles/stickers-labels/BagLabels";
import BathBombLabelsStickers from "./pages/shapes-styles/stickers-labels/BathBombLabels";
import BodyButterLabelsStickers from "./pages/shapes-styles/stickers-labels/BodyButterLabels";
import BottleLabelsStickers from "./pages/shapes-styles/stickers-labels/BottleLabels";
import BusinessLabelsStickers from "./pages/shapes-styles/stickers-labels/business-labels";
import BusinessStickersStickers from "./pages/shapes-styles/stickers-labels/BusinessStickers";
import CandleLabelsStickers from "./pages/shapes-styles/stickers-labels/CandleLabels";
import ChapstickLabelsStickers from "./pages/shapes-styles/stickers-labels/ChapstickLabels";
import ChristmasStickersStickers from "./pages/shapes-styles/stickers-labels/christmas-stickers";
import CircleLabelsStickers from "./pages/shapes-styles/stickers-labels/circle-labels";
import CircleStickersStickers from "./pages/shapes-styles/stickers-labels/circle-stickers";
import ColorLabelsStickers from "./pages/shapes-styles/stickers-labels/ColorLabels";
import CookieLabelsStickers from "./pages/shapes-styles/stickers-labels/CookieLabels";
import CosmeticLabelsStickers from "./pages/shapes-styles/stickers-labels/CosmeticLabels";
import CustomRollLabelsStickers from "./pages/shapes-styles/stickers-labels/CustomRollLabels";
import DecalsStickers from "./pages/shapes-styles/stickers-labels/Decals";
import DieCutStickersStickers from "./pages/shapes-styles/stickers-labels/die-cut-stickers";
import FoodLabelsStickers from "./pages/shapes-styles/stickers-labels/food-labels";
import HoneyLabelsStickers from "./pages/shapes-styles/stickers-labels/HoneyLabels";
import IceCreamLabelsStickers from "./pages/shapes-styles/stickers-labels/IceCreamLabels";
import KraftLabelsStickers from "./pages/shapes-styles/stickers-labels/KraftLabels";
import LipBalmLabelsStickers from "./pages/shapes-styles/stickers-labels/LipBalmLabels";
import LotionLabelsStickers from "./pages/shapes-styles/stickers-labels/LotionLabels";
import MetallicLabelsStickers from "./pages/shapes-styles/stickers-labels/MetallicLabels";
import PackagingLabelsStickers from "./pages/shapes-styles/stickers-labels/PackagingLabels";
import PaperStickersStickers from "./pages/shapes-styles/stickers-labels/paper-stickers";
import PreRollPackagingLabelsStickers from "./pages/shapes-styles/stickers-labels/pre-roll-packaging-labels";
import PrivateLabelPackagingStickers from "./pages/shapes-styles/stickers-labels/PrivateLabelPackaging";
import SoapBarLabelsStickers from "./pages/shapes-styles/stickers-labels/soap-bar-labels";
import SoapLabelsStickers from "./pages/shapes-styles/stickers-labels/SoapLabels";
import SprayBottleLabelsStickers from "./pages/shapes-styles/stickers-labels/SprayBottleLabels";
import TableTentsStickers from "./pages/shapes-styles/stickers-labels/table-tents";
import VinylStickersStickers from "./pages/shapes-styles/stickers-labels/VinylStickers";
import WaterproofLabelsStickers from "./pages/shapes-styles/stickers-labels/WaterproofLabels";
import WineLabelsStickers from "./pages/shapes-styles/stickers-labels/WineLabels";

// Subscription Boxes - Shapes & Styles
import CandleSubscriptionBoxes from "./pages/shapes-styles/subscription-boxes/CandleSubscriptionBoxes";
import CBDSubscriptionBoxes from "./pages/shapes-styles/subscription-boxes/CBDSubscriptionBoxes";
import ChocolateSubscriptionBox from "./pages/shapes-styles/subscription-boxes/ChocolateSubscriptionBox";
import CosmeticSubscriptionBoxes from "./pages/shapes-styles/subscription-boxes/CosmeticSubscriptionBoxes";
import SoapSubscriptionBoxes from "./pages/shapes-styles/subscription-boxes/SoapSubscriptionBoxes";
import StationerySubscriptionBox from "./pages/shapes-styles/subscription-boxes/StationerySubscriptionBox";
import SubscriptionBoxesForMen from "./pages/shapes-styles/subscription-boxes/SubscriptionBoxesForMen";
import SubscriptionBoxesForKids from "./pages/shapes-styles/subscription-boxes/SubscriptionBoxesForKids";
import FoodSubscriptionBoxes from "./pages/shapes-styles/subscription-boxes/FoodSubscriptionBoxes";
import MysterySubscriptionBoxes from "./pages/shapes-styles/subscription-boxes/MysterySubscriptionBoxes";
import CandySubscriptionBoxes from "./pages/shapes-styles/subscription-boxes/CandySubscriptionBoxes";
import ArtSubscriptionBoxes from "./pages/shapes-styles/subscription-boxes/ArtSubscriptionBoxes";
import PetFoodSubscriptionBoxes from "./pages/shapes-styles/subscription-boxes/PetFoodSubscriptionBoxes";
import GolfSubscriptionBoxes from "./pages/shapes-styles/subscription-boxes/GolfSubscriptionBoxes";
import SubscriptionBoxesForWomen from "./pages/shapes-styles/subscription-boxes/SubscriptionBoxesForWomen";
import MonthlySubscriptionBoxes from "./pages/shapes-styles/subscription-boxes/MonthlySubscriptionBoxes";
import HarryPotterSubscriptionBoxes from "./pages/shapes-styles/subscription-boxes/HarryPotterSubscriptionBoxes";
import SportsSubscriptionBoxes from "./pages/shapes-styles/subscription-boxes/SportsSubscriptionBoxes";
import DisneySubscriptionBoxes from "./pages/shapes-styles/subscription-boxes/DisneySubscriptionBoxes";

// Tuck Boxes - Shapes & Styles (Batch 1)
import ReverseTuckEnd from "./pages/shapes-styles/tuck-boxes/ReverseTuckEnd";
import ReverseTuckEndBoxes from "./pages/shapes-styles/tuck-boxes/ReverseTuckEndBoxes";
import StraightTuckEnd from "./pages/shapes-styles/tuck-boxes/StraightTuckEnd";
import StraightTuckEndBoxes from "./pages/shapes-styles/tuck-boxes/StraightTuckEndBoxes";
import TuckTopBox from "./pages/shapes-styles/tuck-boxes/TuckTopBox";
import TuckTopBoxes from "./pages/shapes-styles/tuck-boxes/TuckTopBoxes";
import TuckTopSnapBottomBox from "./pages/shapes-styles/tuck-boxes/TuckTopSnapBottomBox";
import TuckTopAutoBottomBox from "./pages/shapes-styles/tuck-boxes/TuckTopAutoBottomBox";

// Tuck Boxes - Shapes & Styles (Batch 2)
import TuckFrontBoxes from "./pages/shapes-styles/tuck-boxes/TuckFrontBoxes";
import DoubleWallTuckFront from "./pages/shapes-styles/tuck-boxes/DoubleWallTuckFront";
import DoubleWallTuckTopBoxes from "./pages/shapes-styles/tuck-boxes/DoubleWallTuckTopBoxes";
import ReverseTuckWithCustomizeWindow from "./pages/shapes-styles/tuck-boxes/ReverseTuckWithCustomizeWindow";
import StraightTuckWithCustomizeWindow from "./pages/shapes-styles/tuck-boxes/StraightTuckWithCustomizeWindow";
import ReverseTuckWithHangTab from "./pages/shapes-styles/tuck-boxes/ReverseTuckWithHangTab";
import StraightTuckWithHangTab from "./pages/shapes-styles/tuck-boxes/StraightTuckWithHangTab";

// Kraft Boxes - Batch 1 (Box by Material)
import KraftHandleBoxes from "./pages/box-by-material/kraft-boxes/CustomHandleBoxes";
import KraftPaperCups from "./pages/box-by-material/kraft-boxes/CustomPaperCups";
import KraftSandwichBoxesMaterial from "./pages/box-by-material/kraft-boxes/KraftSandwichBoxes";
import CustomKraftSoapBoxesMaterial from "./pages/box-by-material/kraft-boxes/CustomKraftSoapBoxes";
import KraftPillowBoxesMaterial from "./pages/box-by-material/kraft-boxes/KraftPillowBoxes";
import KraftJewelryBoxesMaterial from "./pages/box-by-material/kraft-boxes/KraftJewelryBoxes";
import KraftGableBoxesMaterial from "./pages/box-by-material/kraft-boxes/KraftGableBoxes";
import KraftLabelsMaterial from "./pages/box-by-material/kraft-boxes/KraftLabels";
import PaperTubePackagingMaterial from "./pages/box-by-material/kraft-boxes/PaperTubePackaging";
import KraftGiftBoxesMaterial from "./pages/box-by-material/kraft-boxes/KraftGiftBoxes";
import KraftBubbleMailersMaterial from "./pages/box-by-material/kraft-boxes/KraftBubbleMailers";

// Kraft Boxes - Batch 2 (Box by Material)
import KraftCorrugatedBoxesMaterial from "./pages/box-by-material/kraft-boxes/KraftCorrugatedBoxes";
import KraftTakeawayBoxesMaterial from "./pages/box-by-material/kraft-boxes/KraftTakeawayBoxes";
import KraftPaperBoxesWithWindowMaterial from "./pages/box-by-material/kraft-boxes/KraftPaperBoxesWithWindow";
import KraftCupcakeBoxesMaterial from "./pages/box-by-material/kraft-boxes/KraftCupcakeBoxes";
import KraftBagsMaterial from "./pages/box-by-material/kraft-boxes/KraftBags";
import KraftPieBoxesMaterial from "./pages/box-by-material/kraft-boxes/KraftPieBoxes";
import WhiteKraftBoxesMaterial from "./pages/box-by-material/kraft-boxes/WhiteKraftBoxes";
import SmallKraftBoxesMaterial from "./pages/box-by-material/kraft-boxes/SmallKraftBoxes";
import KraftBoxesWithLidsMaterial from "./pages/box-by-material/kraft-boxes/KraftBoxesWithLids";
import KraftTuckTopBoxesMaterial from "./pages/box-by-material/kraft-boxes/KraftTuckTopBoxes";
import KraftShippingLabelsMaterial from "./pages/box-by-material/kraft-boxes/KraftShippingLabels";

// Corrugated Boxes - Product Pages
import CorrugatedBoxesWithLidsMaterial from "./pages/box-by-material/corrugated-boxes/CorrugatedBoxesWithLids";
import CorrugatedMailerBoxesMaterial from "./pages/box-by-material/corrugated-boxes/CorrugatedMailerBoxes";
import KraftCorrugatedBoxesCorrugatedMaterial from "./pages/box-by-material/corrugated-boxes/KraftCorrugatedBoxes";
import WhiteCorrugatedBoxesMaterial from "./pages/box-by-material/corrugated-boxes/WhiteCorrugatedBoxes";

// Rigid Boxes - Product Pages (box-by-material)
import WalletBoxesMaterial from "./pages/box-by-material/rigid-boxes/WalletBoxes";
import FlipTopBoxesMaterial from "./pages/box-by-material/rigid-boxes/FlipTopBoxes";
import RigidGiftBoxesMaterial from "./pages/box-by-material/rigid-boxes/RigidGiftBoxes";
import CreditCardBoxesMaterial from "./pages/box-by-material/rigid-boxes/CreditCardBoxes";
import RigidSetupBoxesMaterial from "./pages/box-by-material/rigid-boxes/RigidSetupBoxes";
import RibbonBoxesMaterial from "./pages/box-by-material/rigid-boxes/RibbonBoxes";
import MagneticClosureBoxesMaterial from "./pages/box-by-material/rigid-boxes/MagneticClosureBoxes";
import RigidPaperBoxesMaterial from "./pages/box-by-material/rigid-boxes/RigidPaperBoxes";
import FlipTopBoxesWithMagneticClosureMaterial from "./pages/box-by-material/rigid-boxes/FlipTopBoxesWithMagneticClosure";

// Holographic Boxes - Product Pages (box-by-material)
import HolographicMylarBagsMaterial from "./pages/box-by-material/holographic-boxes/HolographicMylarBags";
import HolographicBagsMaterial from "./pages/box-by-material/holographic-boxes/HolographicBags";
import HolographicFoilingBoxesMaterial from "./pages/box-by-material/holographic-boxes/HolographicFoilingBoxes";

// Cardboard Boxes - Product Pages
import HempCardboardBoxesBoxByMaterial from "./pages/box-by-material/cardboard-boxes/HempCardboardBoxes";
import CardboardCigaretteBoxesBoxByMaterial from "./pages/box-by-material/cardboard-boxes/CardboardCigaretteBoxes";
import CardboardGiftBoxesBoxByMaterial from "./pages/box-by-material/cardboard-boxes/CardboardGiftBoxes";
import BlackCardboardBoxesBoxByMaterial from "./pages/box-by-material/cardboard-boxes/BlackCardboardBoxes";
import WhiteCardboardBoxesBoxByMaterial from "./pages/box-by-material/cardboard-boxes/WhiteCardboardBoxes";
import CardboardDividerBoxesBoxByMaterial from "./pages/box-by-material/cardboard-boxes/CardboardDividerBoxes";
import CardboardJewelryBoxesBoxByMaterial from "./pages/box-by-material/cardboard-boxes/CardboardJewelryBoxes";
import CardboardBoxWithHandleBoxByMaterial from "./pages/box-by-material/cardboard-boxes/CardboardBoxWithHandle";
import AmmoCardboardBoxBoxByMaterial from "./pages/box-by-material/cardboard-boxes/AmmoCardboardBox";
import CardboardInsertsBoxByMaterial from "./pages/box-by-material/cardboard-boxes/CardboardInserts";
import PaperboardBoxesBoxByMaterial from "./pages/box-by-material/cardboard-boxes/PaperboardBoxes";
import CardboardShoeBoxesBoxByMaterial from "./pages/box-by-material/cardboard-boxes/CardboardShoeBoxes";
import CardboardBoxWithInsertsBoxByMaterial from "./pages/box-by-material/cardboard-boxes/CardboardBoxWithInserts";
import CardboardCigarBoxesBoxByMaterial from "./pages/box-by-material/cardboard-boxes/CardboardCigarBoxes";
import CosmeticCardboardBoxesBoxByMaterial from "./pages/box-by-material/cardboard-boxes/CosmeticCardboardBoxes";
import CardboardSoapBoxesBoxByMaterial from "./pages/box-by-material/cardboard-boxes/CardboardSoapBoxes";

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
          <Route path="/industries/candle-boxes/candle-subscription-boxes" element={<CandleSubscriptionBoxesIndustry />} />
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
          <Route path="/industries/chocolate-boxes/chocolate-subscription-box" element={<ChocolateSubscriptionBoxIndustry />} />
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
          <Route path="/industries/jewelry-boxes" element={<JewelryBoxes />} />
          <Route path="/industries/jewelry-boxes/bracelet-square-boxes" element={<BraceletSquareBoxes />} />
          <Route path="/industries/jewelry-boxes/custom-necklace-lid-off-packaging" element={<CustomNecklaceLidOffPackaging />} />
          <Route path="/industries/jewelry-boxes/pendant-boxes" element={<PendantBoxes />} />
          <Route path="/industries/jewelry-boxes/bracelet-boxes" element={<BraceletBoxes />} />
          <Route path="/industries/jewelry-boxes/ring-boxes" element={<RingBoxes />} />
          <Route path="/industries/jewelry-boxes/earring-boxes" element={<EarringBoxes />} />
          <Route path="/industries/jewelry-boxes/luxury-jewelry-boxes" element={<LuxuryJewelryBoxes />} />
          <Route path="/industries/jewelry-boxes/necklace-boxes" element={<NecklaceBoxes />} />
          <Route path="/industries/cosmetic-boxes/lip-tint-packaging" element={<LipTintPackaging />} />
          <Route path="/industries/cosmetic-boxes/wig-boxes" element={<CustomWigBoxes />} />
          <Route path="/industries/cosmetic-boxes/skin-care-packaging" element={<SkinCarePackaging />} />
          <Route path="/industries/custom-candy-boxes" element={<CandyBoxes />} />
          <Route path="/industries/custom-candy-boxes/custom-gummy-boxes" element={<CustomGummyBoxes />} />
          <Route path="/industries/custom-candy-boxes/custom-lollipop-boxes" element={<CustomLollipopBoxes />} />
          <Route path="/industries/custom-candy-boxes/custom-hard-candy-boxes" element={<CustomHardCandyBoxes />} />
          <Route path="/industries/custom-candy-boxes/chocolate-boxes" element={<ChocolateBoxesPage />} />
          <Route path="/industries/custom-candy-boxes/candy-apple-boxes" element={<CandyAppleBoxes />} />
          <Route path="/industries/custom-candy-boxes/candy-boxes-with-window" element={<CandyBoxesWithWindow />} />
          <Route path="/industries/custom-candy-boxes/custom-christmas-candy-boxes" element={<CustomChristmasCandyBoxesPage />} />
          <Route path="/industries/custom-candy-boxes/mylar-bags-for-candies" element={<MylarBagsForCandies />} />
          <Route path="/industries/custom-candy-boxes/custom-candy-display-boxes" element={<CandyDisplayBoxes />} />
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
          <Route path="/industries/custom-paper-bags" element={<CustomPaperBags />} />
          <Route path="/industries/holiday-boxes" element={<HolidayBoxes />} />
          <Route path="/industries/holiday-boxes/christmas-gift-boxes" element={<HolidayChristmasGiftBoxes />} />
          <Route path="/industries/holiday-boxes/custom-halloween-boxes" element={<CustomHalloweenBoxes />} />
          <Route path="/industries/holiday-boxes/holiday-gift-boxes" element={<HolidayGiftBoxes />} />
          <Route path="/industries/holiday-boxes/thanksgiving-boxes" element={<ThanksgivingBoxes />} />
          <Route path="/industries/holiday-boxes/thanksgiving-food-boxes" element={<ThanksgivingFoodBoxes />} />
          <Route path="/industries/holiday-boxes/custom-valentines-boxes" element={<CustomValentinesBoxes />} />
          <Route path="/industries/holiday-boxes/halloween-window-boxes" element={<HalloweenWindowBoxes />} />
          <Route path="/industries/holiday-boxes/christmas-pillow-boxes" element={<ChristmasPillowBoxes />} />
          {/* Marijuana Packaging Category */}
          <Route path="/industries/marijuana-packaging" element={<MarijuanaPackaging />} />
          <Route path="/industries/marijuana-packaging/marijuana-edibles-packaging" element={<MarijuanaEdiblesPackaging />} />
          <Route path="/industries/marijuana-packaging/marijuana-labels" element={<MarijuanaLabels />} />
          <Route path="/industries/marijuana-packaging/medical-marijuana-packaging" element={<MedicalMarijuanaPackaging />} />
          <Route path="/industries/marijuana-packaging/marijuana-cartridge-packaging" element={<MarijuanaCartridgePackaging />} />
          <Route path="/industries/mailer-boxes" element={<MailerBoxes />} />
          <Route path="/shapes-styles/mailer-boxes/black-mailer-boxes" element={<BlackMailerBoxes />} />
          <Route path="/shapes-styles/mailer-boxes/bubble-mailers" element={<BubbleMailers />} />
          <Route path="/shapes-styles/mailer-boxes/colored-mailer-boxes" element={<ColoredMailerBoxes />} />
          <Route path="/shapes-styles/mailer-boxes/corrugated-mailer-boxes" element={<CorrugatedMailerBoxes />} />
          <Route path="/shapes-styles/mailer-boxes/ear-lock-mailer-box" element={<EarLockMailerBox />} />
          <Route path="/shapes-styles/mailer-boxes/4x8-bubble-mailers" element={<FourByEightBubbleMailers />} />
          <Route path="/shapes-styles/mailer-boxes/eco-friendly-bubble-mailers" element={<KraftBubbleMailers />} />
          <Route path="/shapes-styles/mailer-boxes/kraft-mailer-boxes" element={<KraftMailerBoxes />} />
          <Route path="/shapes-styles/mailer-boxes/poly-bubble-mailers" element={<PolyBubbleMailers />} />
          <Route path="/shapes-styles/mailer-boxes/tuck-top-mailer-boxes" element={<TuckTopMailerBoxes />} />
          <Route path="/shapes-styles/mailer-boxes/vinyl-record-mailers" element={<VinylRecordMailers />} />
          <Route path="/shapes-styles/mailer-boxes/white-mailer-boxes" element={<WhiteMailerBoxes />} />
          <Route path="/categories/custom-mylar-bags" element={<CustomMylarBags />} />
          <Route path="/shapes-styles/custom-mylar-bags/dispensary-mylar-bags" element={<DispensaryMylarBags />} />
          <Route path="/shapes-styles/custom-mylar-bags/die-cut-mylar-bags" element={<DieCutMylarBags />} />
          <Route path="/shapes-styles/custom-mylar-bags/mylar-vacuum-seal-bags" element={<MylarVacuumSealBags />} />
          <Route path="/shapes-styles/custom-mylar-bags/mylar-food-storage-bags" element={<MylarFoodStorageBags />} />
          <Route path="/shapes-styles/custom-mylar-bags/black-mylar-bags" element={<BlackMylarBags />} />
          <Route path="/shapes-styles/custom-mylar-bags/smell-proof-mylar-bags" element={<SmellProofMylarBags />} />
          <Route path="/shapes-styles/custom-mylar-bags/child-resistant-mylar-bags" element={<ChildResistantMylarBagsCategory />} />
          <Route path="/shapes-styles/custom-mylar-bags/exotic-mylar-bags" element={<ExoticMylarBags />} />
          <Route path="/shapes-styles/custom-mylar-bags/small-mylar-bags" element={<SmallMylarBags />} />
          <Route path="/shapes-styles/custom-mylar-bags/holographic-mylar-bags" element={<HolographicMylarBags />} />
          <Route path="/shapes-styles/custom-mylar-bags/kraft-mylar-bags" element={<KraftMylarBags />} />
          <Route path="/shapes-styles/custom-mylar-bags/mylar-ziplock-bags" element={<MylarZiplockBags />} />
          <Route path="/shapes-styles/custom-mylar-bags/clear-mylar-bags" element={<ClearMylarBags />} />
          <Route path="/shapes-styles/weed-bags" element={<WeedBags />} />
          <Route path="/shapes-styles/weed-bags/exotic-weed-bag" element={<ExoticWeedBag />} />
          <Route path="/shapes-styles/weed-bags/smell-proof-weed-bags" element={<SmellProofWeedBags />} />
          <Route path="/shapes-styles/weed-bags/weed-bags-3-5" element={<WeedBags35 />} />
          <Route path="/shapes-styles/weed-bags/zip-weed-bags" element={<ZipWeedBags />} />
          <Route path="/shapes-styles/weed-bags/weed-pound-bags" element={<WeedPoundBags />} />
          <Route path="/shapes-styles/pillow-boxes" element={<PillowBoxes />} />
          <Route path="/shapes-styles/pillow-boxes/white-pillow-boxes" element={<WhitePillowBoxes />} />
          <Route path="/shapes-styles/pillow-boxes/small-pillow-boxes" element={<SmallPillowBoxes />} />
          <Route path="/shapes-styles/pillow-boxes/kraft-pillow-boxes" element={<KraftPillowBoxes />} />
          <Route path="/shapes-styles/pillow-boxes/large-pillow-boxes" element={<LargePillowBoxes />} />
          <Route path="/shapes-styles/pillow-boxes/pillow-boxes-with-handle" element={<PillowBoxesWithHandle />} />
          <Route path="/shapes-styles/pillow-boxes/black-pillow-boxes" element={<BlackPillowBoxes />} />
          <Route path="/shapes-styles/pillow-boxes/pillow-boxes-with-window" element={<PillowBoxesWithWindow />} />
          <Route path="/shapes-styles/pillow-boxes/cardboard-pillow-boxes" element={<CardboardPillowBoxes />} />
          <Route path="/shapes-styles/pillow-boxes/paper-pillow-box" element={<PaperPillowBox />} />
          <Route path="/shapes-styles/pillow-boxes/pillow-gift-boxes" element={<PillowGiftBoxes />} />
          <Route path="/shapes-styles/window-packaging" element={<WindowPackaging />} />
          <Route path="/categories/window-packaging" element={<WindowPackaging />} />
          <Route path="/shapes-styles/window-packaging/candle-boxes-with-window" element={<CandleBoxesWithWindowWP />} />
          <Route path="/shapes-styles/window-packaging/gable-boxes-with-window" element={<GableBoxesWithWindowWP />} />
          <Route path="/shapes-styles/window-packaging/halloween-window-boxes" element={<HalloweenWindowBoxesWP />} />
          <Route path="/shapes-styles/window-packaging/soap-boxes-with-window" element={<SoapBoxesWithWindowWP />} />
          <Route path="/shapes-styles/window-packaging/pillow-boxes-with-window" element={<PillowBoxesWithWindowWP />} />
          <Route path="/shapes-styles/window-packaging/kraft-paper-boxes-with-window" element={<KraftPaperBoxesWithWindowWP />} />
          <Route path="/shapes-styles/window-packaging/candy-boxes-with-window" element={<CandyBoxesWithWindowWP />} />
          <Route path="/shapes-styles/window-packaging/cookie-boxes-with-window" element={<CookieBoxesWithWindowWP />} />
          <Route path="/shapes-styles/custom-paper-bags" element={<CustomPaperBags />} />
          <Route path="/shapes-styles/custom-paper-bags/custom-auto-bottom-gable-bags" element={<CustomAutoBottomGableBags />} />
          <Route path="/shapes-styles/custom-paper-bags/custom-paper-food-bags" element={<CustomPaperFoodBags />} />
          <Route path="/shapes-styles/custom-paper-bags/christmas-paper-bags" element={<CustomChristmasPaperBags />} />
          <Route path="/shapes-styles/custom-paper-bags/christmas-gift-bags" element={<CustomChristmasGiftBags />} />
          <Route path="/shapes-styles/custom-paper-bags/custom-brown-paper-bags" element={<CustomBrownPaperBags />} />
          <Route path="/shapes-styles/custom-paper-bags/paper-shopping-bags" element={<PaperShoppingBags />} />
          <Route path="/shapes-styles/custom-paper-bags/white-paper-bags" element={<WhitePaperBags />} />
          <Route path="/shapes-styles/custom-paper-bags/paper-gift-bags" element={<PaperGiftBags />} />
          <Route path="/shapes-styles/custom-paper-bags/paper-lunch-bags" element={<PaperLunchBags />} />
          <Route path="/shapes-styles/custom-paper-bags/fries-bag" element={<FriesBag />} />
          <Route path="/shapes-styles/custom-paper-bags/glassine-bags" element={<GlassineBags />} />
          <Route path="/shapes-styles/custom-paper-bags/candy-bags" element={<CandyBags />} />
          <Route path="/shapes-styles/custom-paper-bags/bakery-bags" element={<BakeryBags />} />
          <Route path="/shapes-styles/custom-paper-bags/cookie-bags" element={<CookieBags />} />
          <Route path="/shapes-styles/custom-paper-bags/gift-bags" element={<GiftBags />} />
          <Route path="/shapes-styles/custom-paper-bags/carry-out-bags" element={<CarryOutBags />} />
          <Route path="/shapes-styles/custom-paper-bags/paper-bags-with-handles" element={<PaperBagsWithHandles />} />


          <Route path="/industries/pharma-packaging" element={<PharmaPackaging />} />
          <Route path="/industries/pharma-packaging/custom-pill-boxes" element={<CustomPillBoxes />} />
          <Route path="/industries/pharma-packaging/custom-dispenser-boxes" element={<CustomDispenserBoxes />} />
          <Route path="/industries/pharma-packaging/dietary-supplement-packaging" element={<DietarySupplementPackagingPharma />} />
          <Route path="/industries/pharma-packaging/custom-medicine-boxes" element={<CustomMedicineBoxes />} />
          <Route path="/industries/pharma-packaging/olive-oil-boxes" element={<OliveOilBoxes />} />
          <Route path="/industries/pharma-packaging/condom-boxes" element={<CondomBoxes />} />
          <Route path="/industries/pharma-packaging/gloves-boxes" element={<GlovesBoxes />} />
          <Route path="/industries/pharma-packaging/bandage-boxes" element={<BandageBoxes />} />
          <Route path="/industries/pre-roll-boxes" element={<PreRollBoxes />} />
          <Route path="/industries/pre-roll-boxes/hemp-pre-roll-boxes" element={<HempPreRollBoxesCategory />} />
          <Route path="/industries/pre-roll-boxes/custom-pre-roll-display-boxes" element={<CustomPreRollDisplayBoxes />} />
          <Route path="/industries/pre-roll-boxes/pre-roll-packaging-labels" element={<PreRollPackagingLabels />} />
          <Route path="/industries/pre-roll-boxes/luxury-pre-roll-packaging" element={<LuxuryPreRollPackaging />} />
          <Route path="/industries/pre-roll-boxes/custom-pre-roll-cone-packaging" element={<CustomPreRollConePackaging />} />
          <Route path="/industries/pre-roll-boxes/pre-roll-joint-boxes" element={<PreRollJointBoxes />} />
          <Route path="/industries/pre-roll-boxes/child-resistant-pre-roll-box" element={<ChildResistantPreRollBoxCategory />} />

          <Route path="/industries/retail-boxes" element={<RetailBoxes />} />
          <Route path="/industries/retail-boxes/custom-business-cards" element={<CustomBusinessCards />} />
          <Route path="/industries/retail-boxes/custom-match-boxes" element={<CustomMatchBoxes />} />
          <Route path="/industries/retail-boxes/dietary-supplement-packaging" element={<DietarySupplementPackagingRetail />} />
          <Route path="/industries/retail-boxes/business-labels" element={<BusinessLabels />} />
          <Route path="/industries/retail-boxes/custom-boxes-with-logo" element={<CustomBoxesWithLogo />} />
          <Route path="/industries/retail-boxes/clamshell-boxes" element={<ClamshellBoxes />} />
          <Route path="/industries/retail-boxes/barbie-boxes" element={<BarbieBoxes />} />
          <Route path="/industries/retail-boxes/folding-cartons" element={<FoldingCartons />} />
          <Route path="/industries/rigid-boxes" element={<RigidBoxes />} />
          <Route path="/industries/soap-boxes" element={<SoapBoxes />} />
          <Route path="/industries/soap-boxes/bath-bomb-packaging" element={<BathBombPackaging />} />
          <Route path="/industries/soap-boxes/custom-handmade-soap-boxes" element={<CustomHandmadeSoapBoxes />} />
          <Route path="/industries/soap-boxes/custom-kraft-soap-boxes" element={<CustomKraftSoapBoxes />} />
          <Route path="/industries/soap-boxes/custom-soap-bar-boxes" element={<CustomSoapBarBoxes />} />
          <Route path="/industries/soap-boxes/custom-soap-wrapping-paper" element={<CustomSoapWrappingPaper />} />
          <Route path="/industries/soap-boxes/luxury-soap-packaging" element={<LuxurySoapPackaging />} />
          <Route path="/industries/soap-boxes/soap-bar-labels" element={<SoapBarLabels />} />
          <Route path="/industries/soap-boxes/soap-sleeves" element={<SoapSleeves />} />
          <Route path="/industries/soap-boxes/square-soap-boxes" element={<SquareSoapBoxes />} />
          <Route path="/shapes-styles/shipping-boxes" element={<ShippingBoxes />} />
          <Route path="/shapes-styles/shipping-boxes/chinese-takeout-boxes" element={<ChineseTakeoutBoxesShipping />} />
          <Route path="/shapes-styles/shipping-boxes/double-wall-tuck-front" element={<DoubleWallTuckFrontShipping />} />
          <Route path="/shapes-styles/shipping-boxes/hemp-shipping-boxes" element={<HempShippingBoxesShape />} />
          <Route path="/shapes-styles/shipping-boxes/candle-shipping-boxes" element={<CandleShippingBoxesShape />} />
          <Route path="/shapes-styles/shipping-boxes/hat-shipping-boxes" element={<HatShippingBoxesShape />} />
          <Route path="/shapes-styles/shipping-boxes/8x6x4-shipping-boxes" element={<EightBySixByFourShippingBoxes />} />
          <Route path="/shapes-styles/shipping-boxes/5x5x5-boxes" element={<FiveByFiveByFiveBoxes />} />
          <Route path="/shapes-styles/shipping-boxes/wine-shipping-boxes" element={<WineShippingBoxes />} />
          <Route path="/shapes-styles/shipping-boxes/long-narrow-shipping-boxes" element={<LongNarrowShippingBoxes />} />
          <Route path="/shapes-styles/shipping-boxes/shipping-labels" element={<ShippingLabelsShape />} />
          <Route path="/shapes-styles/shipping-boxes/white-shipping-boxes" element={<WhiteShippingBoxesShipping />} />
          <Route path="/shapes-styles/shipping-boxes/delivery-boxes" element={<DeliveryBoxesShipping />} />
          <Route path="/industries/sports-boxes" element={<SportsBoxes />} />
          <Route path="/industries/sports-boxes/custom-baseball-boxes" element={<CustomBaseballBoxes />} />
          <Route path="/industries/sports-boxes/custom-golf-ball-boxes" element={<CustomGolfBallBoxes />} />
          <Route path="/industries/sports-boxes/football-boxes" element={<FootballBoxes />} />
          <Route path="/industries/sports-boxes/basketball-boxes" element={<BasketballBoxes />} />
          <Route path="/industries/sports-boxes/tennis-ball-boxes" element={<TennisBallBoxes />} />
          <Route path="/industries/stationery-boxes" element={<StationeryBoxes />} />
          <Route path="/industries/stationery-boxes/custom-business-cards" element={<CustomBusinessCardsStationery />} />
          <Route path="/industries/stationery-boxes/document-folders" element={<DocumentFolder />} />
          <Route path="/industries/stationery-boxes/pen-gift-boxes" element={<PenGiftBoxes />} />
          <Route path="/industries/stationery-boxes/mailing-envelopes" element={<MailingEnvelopes />} />
          <Route path="/industries/stationery-boxes/invitation-boxes" element={<InvitationBoxes />} />
          <Route path="/industries/stationery-boxes/marker-boxes" element={<MarkerBoxes />} />
          <Route path="/industries/stationery-boxes/staple-boxes" element={<StapleBoxes />} />
          <Route path="/industries/stationery-boxes/cardboard-pencil-boxes" element={<CardboardPencilBoxes />} />
          <Route path="/industries/stationery-boxes/packaging-inserts" element={<PackagingInserts />} />
          <Route path="/industries/stationery-boxes/pencil-boxes" element={<PencilBoxes />} />
          <Route path="/industries/stationery-boxes/custom-bookmarks" element={<CustomBookmarks />} />
          <Route path="/industries/stationery-boxes/book-boxes" element={<BookBoxes />} />
          <Route path="/shapes-styles/subscription-boxes" element={<SubscriptionBoxes />} />
          <Route path="/industries/sustainable-packaging" element={<SustainablePackaging />} />
          <Route path="/industries/sustainable-packaging/custom-kraft-soap-boxes" element={<SustainableCustomKraftSoapBoxes />} />
          <Route path="/industries/sustainable-packaging/kraft-gift-boxes" element={<SustainableKraftGiftBoxes />} />
          <Route path="/industries/sustainable-packaging/kraft-mylar-bags" element={<SustainableKraftMylarBags />} />
          <Route path="/industries/sustainable-packaging/kraft-food-boxes" element={<SustainableKraftFoodBoxes />} />
          <Route path="/industries/sustainable-packaging/kraft-pie-boxes" element={<SustainableKraftPieBoxes />} />
          <Route path="/industries/sustainable-packaging/kraft-tuck-top-boxes" element={<SustainableKraftTuckTopBoxes />} />
          <Route path="/industries/sustainable-packaging/kraft-mailer-boxes" element={<SustainableKraftMailerBoxes />} />
          <Route path="/industries/tea-and-coffee-cups" element={<TeaCoffeeCups />} />
          <Route path="/industries/tea-coffee-cups/custom-tea-boxes" element={<CustomTeaBoxes />} />
          <Route path="/industries/tea-coffee-cups/custom-printed-coffee-packaging" element={<CustomPrintedCoffeePackaging />} />
          <Route path="/industries/tea-coffee-cups/coffee-sleeves" element={<CoffeeSleeves />} />
          <Route path="/industries/tea-coffee-cups/coffee-cups-with-lids" element={<CoffeeCupsWithLids />} />
          <Route path="/industries/tea-coffee-cups/disposable-coffee-cups" element={<DisposableCoffeeCups />} />
          <Route path="/industries/tea-coffee-cups/paper-coffee-cups" element={<PaperCoffeeCups />} />
          <Route path="/industries/tea-coffee-cups/to-go-coffee-cups" element={<ToGoCoffeeCups />} />
          <Route path="/industries/tea-coffee-cups/cute-coffee-cups" element={<CuteCoffeeCups />} />
          <Route path="/industries/tea-coffee-cups/compostable-coffee-cups" element={<CompostableCoffeeCups />} />
          <Route path="/industries/tea-coffee-cups/double-wall-coffee-cups" element={<DoubleWallCoffeeCups />} />
          <Route path="/industries/tea-coffee-cups/restaurant-coffee-cups" element={<RestaurantCoffeeCups />} />
          <Route path="/industries/tuck-boxes" element={<TuckBoxes />} />
          
          {/* Tuck Boxes Shapes & Styles (Batch 1) */}
          <Route path="/shapes-styles/tuck-boxes/reverse-tuck-end" element={<ReverseTuckEnd />} />
          <Route path="/shapes-styles/tuck-boxes/reverse-tuck-end-boxes" element={<ReverseTuckEndBoxes />} />
          <Route path="/shapes-styles/tuck-boxes/straight-tuck-end" element={<StraightTuckEnd />} />
          <Route path="/shapes-styles/tuck-boxes/straight-tuck-end-boxes" element={<StraightTuckEndBoxes />} />
          <Route path="/shapes-styles/tuck-boxes/tuck-top-box" element={<TuckTopBox />} />
          <Route path="/shapes-styles/tuck-boxes/tuck-top-boxes" element={<TuckTopBoxes />} />
          <Route path="/shapes-styles/tuck-boxes/tuck-top-snap-bottom-box" element={<TuckTopSnapBottomBox />} />
          <Route path="/shapes-styles/tuck-boxes/tuck-top-auto-bottom-box" element={<TuckTopAutoBottomBox />} />
          
          {/* Tuck Boxes Shapes & Styles (Batch 2) */}
          <Route path="/shapes-styles/tuck-boxes/tuck-front-boxes" element={<TuckFrontBoxes />} />
          <Route path="/shapes-styles/tuck-boxes/double-wall-tuck-front" element={<DoubleWallTuckFront />} />
          <Route path="/shapes-styles/tuck-boxes/double-wall-tuck-top-boxes" element={<DoubleWallTuckTopBoxes />} />
          <Route path="/shapes-styles/tuck-boxes/reverse-tuck-with-customize-window" element={<ReverseTuckWithCustomizeWindow />} />
          <Route path="/shapes-styles/tuck-boxes/straight-tuck-with-customize-window" element={<StraightTuckWithCustomizeWindow />} />
          <Route path="/shapes-styles/tuck-boxes/reverse-tuck-with-hang-tab" element={<ReverseTuckWithHangTab />} />
          <Route path="/shapes-styles/tuck-boxes/straight-tuck-with-hang-tab" element={<StraightTuckWithHangTab />} />

          <Route path="/industries/vape-boxes" element={<VapeBoxes />} />
          <Route path="/industries/vape-boxes/custom-e-cigarette-boxes" element={<CustomECigaretteBoxesVapeBoxes />} />
          <Route path="/industries/vape-boxes/custom-vape-cartridge-boxes" element={<CustomVapeCartridgeBoxes />} />
          <Route path="/industries/vape-boxes/vape-pen-boxes" element={<VapePenBoxes />} />
          <Route path="/industries/vape-boxes/cannabis-vape-packaging" element={<CannabisVapePackagingVapeBoxes />} />
          <Route path="/industries/vape-boxes/1ml-vape-cartridge-boxes" element={<OneMlVapeCartridgeBoxes />} />
          <Route path="/industries/vape-boxes/vape-display-boxes" element={<VapeDisplayBoxes />} />
          <Route path="/industries/vape-boxes/disposable-vape-boxes" element={<DisposableVapeBoxes />} />
          <Route path="/industries/vape-boxes/empty-vape-cartridge-boxes" element={<EmptyVapeCartridgeBoxes />} />
          <Route path="/industries/vape-boxes/dank-vape-packaging" element={<DankVapePackaging />} />
          <Route path="/industries/vape-boxes/cbd-vape-boxes" element={<CBDVapeBoxesCategory />} />
          <Route path="/industries/vape-boxes/vape-juice-boxes" element={<VapeJuiceBoxes />} />
          <Route path="/industries/vape-boxes/juul-packaging" element={<JuulPackaging />} />
          <Route path="/industries/weed-boxes" element={<WeedBoxes />} />
          <Route path="/industries/weed-boxes/weed-subscription-box" element={<WeedSubscriptionBox />} />
          <Route path="/industries/weed-boxes/weed-mystery-boxes" element={<WeedMysteryBoxes />} />
          <Route path="/industries/weed-boxes/monthly-weed-boxes" element={<MonthlyWeedBoxes />} />
          <Route path="/industries/weed-boxes/weed-gift-boxes" element={<WeedGiftBoxes />} />
          <Route path="/shapes-styles/custom-shape-boxes" element={<CustomShapeBoxes />} />
          <Route path="/shapes-styles/custom-shape-boxes/custom-handle-boxes" element={<CustomHandleBoxes />} />
          <Route path="/shapes-styles/custom-shape-boxes/custom-pie-boxes" element={<CustomPieBoxes />} />
          <Route path="/shapes-styles/custom-shape-boxes/bracelet-square-boxes" element={<BraceletSquareBoxesCustomShape />} />
          <Route path="/shapes-styles/custom-shape-boxes/custom-die-cut-boxes" element={<CustomDieCutBoxes />} />
          <Route path="/shapes-styles/custom-shape-boxes/square-soap-boxes" element={<SquareSoapBoxesCustomShape />} />
          <Route path="/shapes-styles/custom-shape-boxes/custom-pyramid-boxes" element={<CustomPyramidBoxes />} />
          <Route path="/shapes-styles/custom-shape-boxes/hexagon-boxes" element={<HexagonBoxes />} />
          <Route path="/shapes-styles/custom-shape-boxes/rectangular-boxes" element={<RectangularBoxes />} />
          <Route path="/shapes-styles/custom-shape-boxes/triangle-boxes" element={<TriangleBoxes />} />
          <Route path="/shapes-styles/custom-shape-boxes/octagon-boxes" element={<OctagonBoxes />} />
          <Route path="/shapes-styles/custom-shape-boxes/square-boxes" element={<SquareBoxes />} />
          <Route path="/shapes-styles/custom-shape-boxes/cube-boxes" element={<CubeBoxes />} />
          <Route path="/shapes-styles/display-boxes/brochure-display-holder" element={<BrochureDisplayHolder />} />
          <Route path="/shapes-styles/display-boxes/custom-candle-display-boxes" element={<CustomCandleDisplayBoxes />} />
          <Route path="/shapes-styles/display-boxes/custom-pre-roll-display-boxes" element={<CustomPreRollDisplayBoxes />} />
          <Route path="/shapes-styles/display-boxes/vape-display-boxes" element={<VapeDisplayBoxes />} />
          <Route path="/shapes-styles/display-boxes/cardboard-display-boxes" element={<CardboardDisplayBoxes />} />
          <Route path="/shapes-styles/display-boxes/counter-display-boxes" element={<CounterDisplayBoxes />} />
          <Route path="/shapes-styles/display-boxes/jewelry-display-boxes" element={<JewelryDisplayBoxes />} />
          <Route path="/shapes-styles/display-boxes/cbd-display-boxes" element={<CBDDisplayBoxes />} />
          <Route path="/shapes-styles/display-boxes/lollipop-display-boxes" element={<LollipopDisplayBoxes />} />
          <Route path="/shapes-styles/display-boxes/cigarette-display-boxes" element={<CigaretteDisplayBoxes />} />
          <Route path="/shapes-styles/display-boxes/cosmetic-display-boxes" element={<CosmeticDisplayBoxes />} />
          <Route path="/shapes-styles/display-boxes/clear-lid-boxes" element={<ClearLidBoxes />} />
          <Route path="/shapes-styles/display-boxes/product-display-boxes" element={<ProductDisplayBoxes />} />
          <Route path="/shapes-styles/display-boxes/countertop-display-boxes" element={<CountertopDisplayBoxes />} />
          <Route path="/shapes-styles/display-boxes/watch-display-boxes" element={<WatchDisplayBoxes />} />
          <Route path="/shapes-styles/display-boxes/health-counter-display-boxes" element={<HealthCounterDisplayBoxes />} />
          <Route path="/shapes-styles/display-boxes/candy-display-boxes" element={<CandyDisplayBoxes />} />
          <Route path="/shapes-styles/stickers-and-labels" element={<StickersAndLabels />} />
          <Route path="/shapes-styles/sleeves-and-trays" element={<SleevesAndTrays />} />
          <Route path="/shapes-styles/sleeves-trays/roll-end-tray" element={<RollEndTraySleeves />} />
          <Route path="/shapes-styles/sleeves-trays/custom-bowl-sleeves" element={<CustomBowlSleevesSleeves />} />
          <Route path="/shapes-styles/sleeves-trays/custom-drawer-paper-boxes" element={<CustomDrawerPaperBoxesSleeves />} />
          <Route path="/shapes-styles/sleeves-trays/paper-food-trays" element={<PaperFoodTraysSleeves />} />
          <Route path="/shapes-styles/sleeves-trays/hot-dog-sleeves" element={<HotDogSleevesSleeves />} />
          <Route path="/shapes-styles/sleeves-trays/cup-sleeves" element={<CupSleevesSleeves />} />
          <Route path="/shapes-styles/sleeves-trays/coffee-sleeves" element={<CoffeeSleevesSleeves />} />
          <Route path="/shapes-styles/sleeves-trays/packaging-sleeves" element={<PackagingSleevesSleeves />} />
          <Route path="/shapes-styles/sleeves-trays/soap-sleeves" element={<SoapSleevesSleeves />} />
          <Route path="/shapes-styles/sleeves-trays/gift-card-sleeves" element={<GiftCardSleevesSleeves />} />
          <Route path="/shapes-styles/sleeves-trays/packaging-inserts" element={<PackagingInsertsSleeves />} />
          <Route path="/shapes-styles/sleeves-trays/foam-inserts" element={<FoamInsertsSleeves />} />
          <Route path="/shapes-styles/sleeves-trays/slide-boxes" element={<SlideBoxesSleeves />} />
          <Route path="/shapes-styles/sleeves-trays/sleeve-boxes" element={<SleeveBoxesSleeves />} />
          <Route path="/shapes-styles/sleeves-trays/custom-shrink-sleeves" element={<CustomShrinkSleevesSleeves />} />
          <Route path="/shapes-styles/sleeves-trays/soap-packaging-sleeves" element={<SoapPackagingSleevesSleeves />} />
          <Route path="/shapes-styles/sleeves-trays/tray-boxes" element={<TrayBoxesSleeves />} />
          <Route path="/shapes-styles/sleeves-trays/kraft-sleeve-boxes" element={<KraftSleeveBoxesSleeves />} />
          <Route path="/shapes-styles/sleeves-trays/custom-cone-sleeve" element={<CustomConeSleeveSleeves />} />
          <Route path="/shapes-styles" element={<ShapesStyles />} />
          {/* Shapes & Styles -> Rigid Boxes */}
          <Route path="/shapes-styles/rigid-boxes" element={<RigidBoxes />} />
          <Route path="/shapes-styles/rigid-boxes/wallet-boxes" element={<WalletBoxes />} />
          <Route path="/shapes-styles/rigid-boxes/flip-top-boxes" element={<FlipTopBoxes />} />
          <Route path="/shapes-styles/rigid-boxes/rigid-gift-boxes" element={<RigidGiftBoxes />} />
          <Route path="/shapes-styles/rigid-boxes/credit-card-boxes" element={<CreditCardBoxes />} />
          <Route path="/shapes-styles/rigid-boxes/rigid-setup-boxes" element={<RigidSetupBoxes />} />
          <Route path="/shapes-styles/rigid-boxes/ribbon-boxes" element={<RibbonBoxes />} />
          <Route path="/shapes-styles/rigid-boxes/magnetic-closure-boxes" element={<MagneticClosureBoxes />} />
          <Route path="/shapes-styles/rigid-boxes/rigid-paper-boxes" element={<RigidPaperBoxes />} />
          <Route path="/shapes-styles/rigid-boxes/flip-top-boxes-with-magnetic-closure" element={<FlipTopBoxesWithMagneticClosure />} />
          <Route path="/shapes-styles/gable-boxes" element={<GableBoxes />} />
          <Route path="/shapes-styles/gable-boxes/kraft-gable-boxes" element={<KraftGableBoxes />} />
          <Route path="/shapes-styles/gable-boxes/christmas-gable-boxes" element={<ChristmasGableBoxesShapes />} />
          <Route path="/shapes-styles/gable-boxes/white-gable-boxes" element={<WhiteGableBoxes />} />
          <Route path="/shapes-styles/gable-boxes/large-gable-boxes" element={<LargeGableBoxes />} />
          <Route path="/shapes-styles/gable-boxes/gable-gift-boxes" element={<GableGiftBoxesShapes />} />
          <Route path="/shapes-styles/gable-boxes/black-gable-boxes" element={<BlackGableBoxes />} />
          <Route path="/shapes-styles/gable-boxes/gable-boxes-with-window" element={<GableBoxesWithWindow />} />
          <Route path="/shapes-styles/gable-boxes/gable-bags" element={<GableBags />} />
          <Route path="/shapes-styles/gable-boxes/blue-gable-boxes" element={<BlueGableBoxes />} />
          <Route path="/shapes-styles/gable-boxes/cardboard-gable-boxes" element={<CardboardGableBoxes />} />
          <Route path="/shapes-styles/gable-boxes/red-gable-boxes" element={<RedGableBoxes />} />
          <Route path="/shapes-styles/gable-boxes/kraft-paper-gable-box" element={<KraftPaperGableBox />} />
          <Route path="/shapes-styles/hang-tags" element={<HangTags />} />
          <Route path="/shapes-styles/hang-tags/custom-door-hangers" element={<CustomDoorHangers />} />
          <Route path="/shapes-styles/hang-tags/christmas-tags" element={<HangTagsChristmasTags />} />
          <Route path="/shapes-styles/hang-tags/gift-tags" element={<HangTagsGiftTags />} />
          <Route path="/shapes-styles/hang-tags/paper-tags" element={<PaperTags />} />
          <Route path="/shapes-styles/hang-tags/clothing-hang-tags" element={<ShapesStylesClothingHangTags />} />
          <Route path="/shapes-styles/hang-tags/jewelry-hang-tags" element={<ShapesStylesJewelryHangTags />} />
          <Route path="/shapes-styles/hang-tags/custom-bookmarks" element={<HangTagsCustomBookmarks />} />
          <Route path="/shapes-styles/hang-tags/shipping-tags" element={<ShippingTags />} />
          <Route path="/shapes-styles/child-resistant-packaging" element={<ChildResistantPackaging />} />
          <Route path="/shapes-styles/child-resistant-packaging/child-resistant-mylar-bags" element={<ChildResistantMylarBags />} />
          <Route path="/shapes-styles/child-resistant-packaging/child-resistant-blunt-packaging" element={<ChildResistantBluntPackaging />} />
          <Route path="/shapes-styles/child-resistant-packaging/child-resistant-cigarette-boxes" element={<ChildResistantCigaretteBoxes />} />
          <Route path="/shapes-styles/child-resistant-packaging/child-resistant-joint-packaging" element={<ChildResistantJointPackaging />} />
          <Route path="/shapes-styles/child-resistant-packaging/child-resistant-pre-roll-box" element={<ChildResistantPreRollBox />} />
          <Route path="/shapes-styles/custom-bags" element={<CustomBags />} />
          <Route path="/shapes-styles/custom-bags/heat-seal-mylar-bags" element={<HeatSealMylarBags />} />
          <Route path="/shapes-styles/custom-bags/weed-mylar-bags" element={<WeedMylarBags />} />
          <Route path="/shapes-styles/custom-bags/edible-mylar-bags" element={<EdibleMylarBags />} />
          <Route path="/shapes-styles/custom-bags/paper-bags-with-handles" element={<PaperBagsWithHandlesCustomBags />} />
          <Route path="/shapes-styles/custom-bags/holographic-bags" element={<HolographicBagsCustomBags />} />
          <Route path="/shapes-styles/custom-bags/kraft-bags" element={<KraftBags />} />
          <Route path="/shapes-styles/custom-bags/take-out-bags" element={<TakeOutBags />} />
          <Route path="/shapes-styles/custom-bags/t-shirt-bags" element={<TShirtBags />} />
          <Route path="/shapes-styles/custom-bags/paper-grocery-bags" element={<PaperGroceryBags />} />
          <Route path="/shapes-styles/custom-bags/vacuum-seal-weed-bags" element={<VacuumSealWeedBags />} />
          <Route path="/shapes-styles/custom-bags/smell-proof-weed-bags" element={<SmellProofWeedBags />} />
          <Route path="/shapes-styles/custom-bags/weed-bags-3-5" element={<WeedBags35 />} />
          <Route path="/shapes-styles/custom-bags/sachet-packaging" element={<SachetPackaging />} />
          <Route path="/shapes-styles/custom-bags/coffee-bags" element={<CoffeeBags />} />
          <Route path="/shapes-styles/custom-bags/flat-bottom-bags" element={<FlatBottomBags />} />
          <Route path="/shapes-styles/custom-bags/tin-tie-paper-bags" element={<TinTiePaperBags />} />
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
          <Route path="/box-by-material/kraft-boxes" element={<CustomKraftBoxes />} />
          
          {/* Kraft Boxes - Product Pages (Batch 1) */}
          <Route path="/box-by-material/kraft-boxes/custom-handle-boxes" element={<KraftHandleBoxes />} />
          <Route path="/box-by-material/kraft-boxes/custom-paper-cups" element={<KraftPaperCups />} />
          <Route path="/box-by-material/kraft-boxes/kraft-sandwich-boxes" element={<KraftSandwichBoxesMaterial />} />
          <Route path="/box-by-material/kraft-boxes/custom-kraft-soap-boxes" element={<CustomKraftSoapBoxesMaterial />} />
          <Route path="/box-by-material/kraft-boxes/kraft-pillow-boxes" element={<KraftPillowBoxesMaterial />} />
          <Route path="/box-by-material/kraft-boxes/kraft-jewelry-boxes" element={<KraftJewelryBoxesMaterial />} />
          <Route path="/box-by-material/kraft-boxes/kraft-gable-boxes" element={<KraftGableBoxesMaterial />} />
          <Route path="/box-by-material/kraft-boxes/kraft-labels" element={<KraftLabelsMaterial />} />
          <Route path="/box-by-material/kraft-boxes/paper-tube-packaging" element={<PaperTubePackagingMaterial />} />
          <Route path="/box-by-material/kraft-boxes/kraft-gift-boxes" element={<KraftGiftBoxesMaterial />} />
          <Route path="/box-by-material/kraft-boxes/kraft-bubble-mailers" element={<KraftBubbleMailersMaterial />} />

          {/* Kraft Boxes - Product Pages (Batch 2) */}
          <Route path="/box-by-material/kraft-boxes/kraft-corrugated-boxes" element={<KraftCorrugatedBoxesMaterial />} />
          <Route path="/box-by-material/kraft-boxes/kraft-takeaway-boxes" element={<KraftTakeawayBoxesMaterial />} />
          <Route path="/box-by-material/kraft-boxes/kraft-paper-boxes-with-window" element={<KraftPaperBoxesWithWindowMaterial />} />
          <Route path="/box-by-material/kraft-boxes/kraft-cupcake-boxes" element={<KraftCupcakeBoxesMaterial />} />
          <Route path="/box-by-material/kraft-boxes/kraft-bags" element={<KraftBagsMaterial />} />
          <Route path="/box-by-material/kraft-boxes/kraft-pie-boxes" element={<KraftPieBoxesMaterial />} />
          <Route path="/box-by-material/kraft-boxes/white-kraft-boxes" element={<WhiteKraftBoxesMaterial />} />
          <Route path="/box-by-material/kraft-boxes/small-kraft-boxes" element={<SmallKraftBoxesMaterial />} />
          <Route path="/box-by-material/kraft-boxes/kraft-boxes-with-lids" element={<KraftBoxesWithLidsMaterial />} />
          <Route path="/box-by-material/kraft-boxes/kraft-tuck-top-boxes" element={<KraftTuckTopBoxesMaterial />} />
          <Route path="/box-by-material/kraft-boxes/shipping-labels" element={<KraftShippingLabelsMaterial />} />

          {/* Cardboard Boxes - Product Pages */}
          <Route path="/box-by-material/cardboard-boxes/hemp-cardboard-boxes" element={<HempCardboardBoxesBoxByMaterial />} />
          <Route path="/box-by-material/cardboard-boxes/cardboard-cigarette-boxes" element={<CardboardCigaretteBoxesBoxByMaterial />} />
          <Route path="/box-by-material/cardboard-boxes/cardboard-gift-boxes" element={<CardboardGiftBoxesBoxByMaterial />} />
          <Route path="/box-by-material/cardboard-boxes/black-cardboard-boxes" element={<BlackCardboardBoxesBoxByMaterial />} />
          <Route path="/box-by-material/cardboard-boxes/white-cardboard-boxes" element={<WhiteCardboardBoxesBoxByMaterial />} />
          <Route path="/box-by-material/cardboard-boxes/cardboard-divider-boxes" element={<CardboardDividerBoxesBoxByMaterial />} />
          <Route path="/box-by-material/cardboard-boxes/cardboard-jewelry-boxes" element={<CardboardJewelryBoxesBoxByMaterial />} />
          <Route path="/box-by-material/cardboard-boxes/cardboard-box-with-handle" element={<CardboardBoxWithHandleBoxByMaterial />} />
          <Route path="/box-by-material/cardboard-boxes/ammo-cardboard-boxes" element={<AmmoCardboardBoxBoxByMaterial />} />
          <Route path="/box-by-material/cardboard-boxes/cardboard-inserts" element={<CardboardInsertsBoxByMaterial />} />
          <Route path="/box-by-material/cardboard-boxes/paperboard-boxes" element={<PaperboardBoxesBoxByMaterial />} />
          <Route path="/box-by-material/cardboard-boxes/cardboard-shoe-boxes" element={<CardboardShoeBoxesBoxByMaterial />} />
          <Route path="/box-by-material/cardboard-boxes/cardboard-box-with-inserts" element={<CardboardBoxWithInsertsBoxByMaterial />} />
          <Route path="/box-by-material/cardboard-boxes/cardboard-cigar-boxes" element={<CardboardCigarBoxesBoxByMaterial />} />
          <Route path="/box-by-material/cardboard-boxes/cosmetic-cardboard-boxes" element={<CosmeticCardboardBoxesBoxByMaterial />} />
          <Route path="/box-by-material/cardboard-boxes/cardboard-soap-boxes" element={<CardboardSoapBoxesBoxByMaterial />} />

          {/* Corrugated Boxes - Product Pages */}
          <Route path="/box-by-material/corrugated-boxes/corrugated-boxes-with-lids" element={<CorrugatedBoxesWithLidsMaterial />} />
          <Route path="/box-by-material/corrugated-boxes/corrugated-mailer-boxes" element={<CorrugatedMailerBoxesMaterial />} />
          <Route path="/box-by-material/corrugated-boxes/kraft-corrugated-boxes" element={<KraftCorrugatedBoxesCorrugatedMaterial />} />
          <Route path="/box-by-material/corrugated-boxes/white-corrugated-boxes" element={<WhiteCorrugatedBoxesMaterial />} />

          {/* Rigid Boxes - Product Pages (box-by-material) */}
          <Route path="/box-by-material/rigid-boxes/wallet-boxes" element={<WalletBoxesMaterial />} />
          <Route path="/box-by-material/rigid-boxes/flip-top-boxes" element={<FlipTopBoxesMaterial />} />
          <Route path="/box-by-material/rigid-boxes/rigid-gift-boxes" element={<RigidGiftBoxesMaterial />} />
          <Route path="/box-by-material/rigid-boxes/credit-card-boxes" element={<CreditCardBoxesMaterial />} />
          <Route path="/box-by-material/rigid-boxes/rigid-setup-boxes" element={<RigidSetupBoxesMaterial />} />
          <Route path="/box-by-material/rigid-boxes/ribbon-boxes" element={<RibbonBoxesMaterial />} />
          <Route path="/box-by-material/rigid-boxes/magnetic-closure-boxes" element={<MagneticClosureBoxesMaterial />} />
          <Route path="/box-by-material/rigid-boxes/rigid-paper-boxes" element={<RigidPaperBoxesMaterial />} />
          <Route path="/box-by-material/rigid-boxes/flip-top-boxes-with-magnetic-closure" element={<FlipTopBoxesWithMagneticClosureMaterial />} />

          {/* Holographic Boxes - Product Pages (box-by-material) */}
          <Route path="/box-by-material/holographic-boxes/holographic-mylar-bags" element={<HolographicMylarBagsMaterial />} />
          <Route path="/box-by-material/holographic-boxes/holographic-bags" element={<HolographicBagsMaterial />} />
          <Route path="/box-by-material/holographic-boxes/holographic-foiling-boxes" element={<HolographicFoilingBoxesMaterial />} />

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/shapes-styles/stickers-labels/bag-labels" element={<BagLabelsStickers />} />
          <Route path="/shapes-styles/stickers-labels/bath-bomb-labels" element={<BathBombLabelsStickers />} />
          <Route path="/shapes-styles/stickers-labels/body-butter-labels" element={<BodyButterLabelsStickers />} />
          <Route path="/shapes-styles/stickers-labels/bottle-labels" element={<BottleLabelsStickers />} />
          <Route path="/shapes-styles/stickers-labels/business-labels" element={<BusinessLabelsStickers />} />
          <Route path="/shapes-styles/stickers-labels/business-stickers" element={<BusinessStickersStickers />} />
          <Route path="/shapes-styles/stickers-labels/candle-labels" element={<CandleLabelsStickers />} />
          <Route path="/shapes-styles/stickers-labels/chapstick-labels" element={<ChapstickLabelsStickers />} />
          <Route path="/shapes-styles/stickers-labels/christmas-stickers" element={<ChristmasStickersStickers />} />
          <Route path="/shapes-styles/stickers-labels/circle-labels" element={<CircleLabelsStickers />} />
          <Route path="/shapes-styles/stickers-labels/circle-stickers" element={<CircleStickersStickers />} />
          <Route path="/shapes-styles/stickers-labels/color-labels" element={<ColorLabelsStickers />} />
          <Route path="/shapes-styles/stickers-labels/cookie-labels" element={<CookieLabelsStickers />} />
          <Route path="/shapes-styles/stickers-labels/cosmetic-labels" element={<CosmeticLabelsStickers />} />
          <Route path="/shapes-styles/stickers-labels/custom-roll-labels" element={<CustomRollLabelsStickers />} />
          <Route path="/shapes-styles/stickers-labels/decals" element={<DecalsStickers />} />
          <Route path="/shapes-styles/stickers-labels/die-cut-stickers" element={<DieCutStickersStickers />} />
          <Route path="/shapes-styles/stickers-labels/food-labels" element={<FoodLabelsStickers />} />
          <Route path="/shapes-styles/stickers-labels/honey-labels" element={<HoneyLabelsStickers />} />
          <Route path="/shapes-styles/stickers-labels/ice-cream-labels" element={<IceCreamLabelsStickers />} />
          <Route path="/shapes-styles/stickers-labels/kraft-labels" element={<KraftLabelsStickers />} />
          <Route path="/shapes-styles/stickers-labels/lip-balm-labels" element={<LipBalmLabelsStickers />} />
          <Route path="/shapes-styles/stickers-labels/lotion-labels" element={<LotionLabelsStickers />} />
          <Route path="/shapes-styles/stickers-labels/metallic-labels" element={<MetallicLabelsStickers />} />
          <Route path="/shapes-styles/stickers-labels/packaging-labels" element={<PackagingLabelsStickers />} />
          <Route path="/shapes-styles/stickers-labels/paper-stickers" element={<PaperStickersStickers />} />
          <Route path="/shapes-styles/stickers-labels/pre-roll-packaging-labels" element={<PreRollPackagingLabelsStickers />} />
          <Route path="/shapes-styles/stickers-labels/private-label-packaging" element={<PrivateLabelPackagingStickers />} />
          <Route path="/shapes-styles/stickers-labels/soap-bar-labels" element={<SoapBarLabelsStickers />} />
          <Route path="/shapes-styles/stickers-labels/soap-labels" element={<SoapLabelsStickers />} />
          <Route path="/shapes-styles/stickers-labels/spray-bottle-labels" element={<SprayBottleLabelsStickers />} />
          <Route path="/shapes-styles/stickers-labels/table-tents" element={<TableTentsStickers />} />
          <Route path="/shapes-styles/stickers-labels/vinyl-stickers" element={<VinylStickersStickers />} />
          <Route path="/shapes-styles/stickers-labels/waterproof-labels" element={<WaterproofLabelsStickers />} />
          <Route path="/shapes-styles/stickers-labels/wine-labels" element={<WineLabelsStickers />} />
          {/* Subscription Boxes Routes */}
          <Route path="/shapes-styles/subscription-boxes/candle-subscription-boxes" element={<CandleSubscriptionBoxes />} />
          <Route path="/shapes-styles/subscription-boxes/cbd-subscription-boxes" element={<CBDSubscriptionBoxes />} />
          <Route path="/shapes-styles/subscription-boxes/chocolate-subscription-box" element={<ChocolateSubscriptionBox />} />
          <Route path="/shapes-styles/subscription-boxes/cosmetic-subscription-boxes" element={<CosmeticSubscriptionBoxes />} />
          <Route path="/shapes-styles/subscription-boxes/soap-subscription-boxes" element={<SoapSubscriptionBoxes />} />
          <Route path="/shapes-styles/subscription-boxes/stationery-subscription-box" element={<StationerySubscriptionBox />} />
          <Route path="/shapes-styles/subscription-boxes/subscription-boxes-for-men" element={<SubscriptionBoxesForMen />} />
          <Route path="/shapes-styles/subscription-boxes/subscription-boxes-for-kids" element={<SubscriptionBoxesForKids />} />
          <Route path="/shapes-styles/subscription-boxes/food-subscription-boxes" element={<FoodSubscriptionBoxes />} />
          <Route path="/shapes-styles/subscription-boxes/mystery-subscription-boxes" element={<MysterySubscriptionBoxes />} />
          <Route path="/shapes-styles/subscription-boxes/candy-subscription-boxes" element={<CandySubscriptionBoxes />} />
          <Route path="/shapes-styles/subscription-boxes/art-subscription-boxes" element={<ArtSubscriptionBoxes />} />
          <Route path="/shapes-styles/subscription-boxes/pet-food-subscription-boxes" element={<PetFoodSubscriptionBoxes />} />
          <Route path="/shapes-styles/subscription-boxes/golf-subscription-boxes" element={<GolfSubscriptionBoxes />} />
          <Route path="/shapes-styles/subscription-boxes/subscription-boxes-for-women" element={<SubscriptionBoxesForWomen />} />
          <Route path="/shapes-styles/subscription-boxes/monthly-subscription-boxes" element={<MonthlySubscriptionBoxes />} />
          <Route path="/shapes-styles/subscription-boxes/harry-potter-subscription-boxes" element={<HarryPotterSubscriptionBoxes />} />
          <Route path="/shapes-styles/subscription-boxes/sports-subscription-boxes" element={<SportsSubscriptionBoxes />} />
          <Route path="/shapes-styles/subscription-boxes/disney-subscription-boxes" element={<DisneySubscriptionBoxes />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
