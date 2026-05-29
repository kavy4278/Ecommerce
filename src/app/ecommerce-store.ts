import { computed, inject } from "@angular/core";
import { Product } from "./models/products";
import {patchState, signalStore, withComputed, withMethods, withState} from '@ngrx/signals'
import { Toaster } from "./services/toaster";
import { CartItem } from "./models/cart";
import { User } from "./models/auth";
import { Review } from "./models/review";
import {produce} from 'immer';

export type EcommerceState = {
    products: Product[];
    category: string;
    wishlistitems : Product[];
    cartitems : CartItem[];
    currentUser: User | null;
    registeredUsers: User[];
    reviews: Review[];
}

export const EcommerceStore = signalStore(
    { providedIn: 'root' },
    withState<EcommerceState>({
        products: [
             {
        "category": "Mobiles",
        "productName": "REDMI A7 Pro 5G (Black, 4GB RAM, 64GB Storage) | Segment's Fastest Processor | Segment's Largest Battery | Segment's Largest & Smoothest 6.9in 120Hz Display",
        "price": "14,999",
        "rating": "3.5 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 4,
        "discountPercentage": "22%",
        "imageUrl": "https://m.media-amazon.com/images/I/71AjkPyeFiL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTozNjEyNDc0MjcyOTgwMTI4OjE3Nzk4NjAzODU6c3BfYXRmOjMwMTAzODc2NzcwNjAzMjo6MDo6&url=%2FStorage-Segments-Fastest-Processor-Smoothest%2Fdp%2FB0GS5SM6JR%2Fref%3Dsr_1_1_sspa%3Fdib%3DeyJ2IjoiMSJ9.2aRzA9sOQkyZzTtaaaFcefMa5ilt6Og76MB3cCmopcDf-Id9ETzTcW3JWXTFQDwxA07GU95i2afcaY4gSB9prJseOfrvO6M12QU7FF36MS9m0WRS0Qr2mTnQKKelQsL_G2sdoP9GNcOCn-S5tJfdwEgtqsZ1sdWta7-3Wa_Z35umzSuH2LDm1ddnEAItpM02gsVyZKHiGUKhoe7gbIsiUXXCUnIJDITgpH86g_rI360.QNy0ta_7SRpA3bOe07gsHcqFkHt1ZIjsytTQmGM73BY%26dib_tag%3Dse%26keywords%3Dmobiles%26qid%3D1779860385%26sr%3D8-1-spons%26aref%3DeX3BvoLIZv%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=eX3BvoLIZv&sp_cr=ZAZ"
    },
    {
        "category": "Mobiles",
        "productName": "Apple iPhone 16e 128 GB: Built for Apple Intelligence, A18 Chip, Supersized Battery Life, 48MP Fusion. Camera, 15.40 cm (6.1\u2033) Super Retina XDR Display; Black",
        "price": "59,900",
        "rating": "4.5 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 2,
        "discountPercentage": "14%",
        "imageUrl": "https://m.media-amazon.com/images/I/61FMZ9rSZUL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTozNjEyNDc0MjcyOTgwMTI4OjE3Nzk4NjAzODU6c3BfYXRmOjMwMDQ4ODY0NTU0MTMzMjo6MDo6&url=%2FiPhone-16e-128-Intelligence-Supersized%2Fdp%2FB0DXQH1DBS%2Fref%3Dsr_1_2_sspa%3Fdib%3DeyJ2IjoiMSJ9.2aRzA9sOQkyZzTtaaaFcefMa5ilt6Og76MB3cCmopcDf-Id9ETzTcW3JWXTFQDwxA07GU95i2afcaY4gSB9prJseOfrvO6M12QU7FF36MS9m0WRS0Qr2mTnQKKelQsL_G2sdoP9GNcOCn-S5tJfdwEgtqsZ1sdWta7-3Wa_Z35umzSuH2LDm1ddnEAItpM02gsVyZKHiGUKhoe7gbIsiUXXCUnIJDITgpH86g_rI360.QNy0ta_7SRpA3bOe07gsHcqFkHt1ZIjsytTQmGM73BY%26dib_tag%3Dse%26keywords%3Dmobiles%26qid%3D1779860385%26sr%3D8-2-spons%26aref%3DOK9501wQNZ%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=OK9501wQNZ&sp_cr=ZAZ"
    },
    {
        "category": "Mobiles",
        "productName": "iQOO Z10R 5G (Aquamarine, 12GB RAM, 256GB Storage) | 32MP 4K Selfie Camera | Quad-Curved AMOLED Display | Dimensity 7400 Processor with 750K+ AnTuTu Score",
        "price": "26,999",
        "rating": "4.4 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 45,
        "discountPercentage": "16%",
        "imageUrl": "https://m.media-amazon.com/images/I/61WM6IDaBPL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/iQOO-Aquamarine-Quad-Curved-Dimensity-Processor/dp/B0FHB53VL7/ref=sr_1_3?dib=eyJ2IjoiMSJ9.2aRzA9sOQkyZzTtaaaFcefMa5ilt6Og76MB3cCmopcDf-Id9ETzTcW3JWXTFQDwxA07GU95i2afcaY4gSB9prJseOfrvO6M12QU7FF36MS9m0WRS0Qr2mTnQKKelQsL_G2sdoP9GNcOCn-S5tJfdwEgtqsZ1sdWta7-3Wa_Z35umzSuH2LDm1ddnEAItpM02gsVyZKHiGUKhoe7gbIsiUXXCUnIJDITgpH86g_rI360.QNy0ta_7SRpA3bOe07gsHcqFkHt1ZIjsytTQmGM73BY&dib_tag=se&keywords=mobiles&qid=1779860385&sr=8-3"
    },
    {
        "category": "Mobiles",
        "productName": "OnePlus Nord CE6 Lite | 6GB+128GB | Hyper Black | Segment's Fastest Dimensity 7400 Apex Processor | 7000mAh Battery | Segment's Highest 144Hz Refresh Rate | 50MP Main Camera, 4K Video Recording",
        "price": "22,999",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 43,
        "discountPercentage": "54%",
        "imageUrl": "https://m.media-amazon.com/images/I/61T18EfkX0L._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/OnePlus-Segments-Dimensity-Processor-Recording/dp/B0GVYDLJJQ/ref=sr_1_4?dib=eyJ2IjoiMSJ9.2aRzA9sOQkyZzTtaaaFcefMa5ilt6Og76MB3cCmopcDf-Id9ETzTcW3JWXTFQDwxA07GU95i2afcaY4gSB9prJseOfrvO6M12QU7FF36MS9m0WRS0Qr2mTnQKKelQsL_G2sdoP9GNcOCn-S5tJfdwEgtqsZ1sdWta7-3Wa_Z35umzSuH2LDm1ddnEAItpM02gsVyZKHiGUKhoe7gbIsiUXXCUnIJDITgpH86g_rI360.QNy0ta_7SRpA3bOe07gsHcqFkHt1ZIjsytTQmGM73BY&dib_tag=se&keywords=mobiles&qid=1779860385&sr=8-4"
    },
    {
        "category": "Mobiles",
        "productName": "Samsung Galaxy M07 Mobile (Black, 4GB RAM, 64GB Storage) | MediaTek Helio G99 | AnTuTu 624K | IP54| 50MP Camera | 7.6mm Slim | 5000mAh Battery | 25W Fast Charging | 6 Gen OS Upgrades | Without Charger",
        "price": "9,999",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 14,
        "discountPercentage": "69%",
        "imageUrl": "https://m.media-amazon.com/images/I/610lbucItmL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/Samsung-Storage-MediaTek-Charging-Upgrades/dp/B0FN7QTRPY/ref=sr_1_5?dib=eyJ2IjoiMSJ9.2aRzA9sOQkyZzTtaaaFcefMa5ilt6Og76MB3cCmopcDf-Id9ETzTcW3JWXTFQDwxA07GU95i2afcaY4gSB9prJseOfrvO6M12QU7FF36MS9m0WRS0Qr2mTnQKKelQsL_G2sdoP9GNcOCn-S5tJfdwEgtqsZ1sdWta7-3Wa_Z35umzSuH2LDm1ddnEAItpM02gsVyZKHiGUKhoe7gbIsiUXXCUnIJDITgpH86g_rI360.QNy0ta_7SRpA3bOe07gsHcqFkHt1ZIjsytTQmGM73BY&dib_tag=se&keywords=mobiles&qid=1779860385&sr=8-5"
    },
    {
        "category": "Mobiles",
        "productName": "realme NARZO 80 Pro 5G (Speed Silver,8GB+256GB) | Segment's 1st MediaTek Dimensity 7400 Chipset | 6000mAh Titan Battery + 80W Ultra Charge | 4500nits HyperGlow Esports Display | IP69 Waterproof",
        "price": "23,999",
        "rating": "4.3 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 44,
        "discountPercentage": "57%",
        "imageUrl": "https://m.media-amazon.com/images/I/71J+dpjrzhL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/realme-Segments-Dimensity-HyperGlow-Waterproof/dp/B0F1D9LCK3/ref=sr_1_6?dib=eyJ2IjoiMSJ9.2aRzA9sOQkyZzTtaaaFcefMa5ilt6Og76MB3cCmopcDf-Id9ETzTcW3JWXTFQDwxA07GU95i2afcaY4gSB9prJseOfrvO6M12QU7FF36MS9m0WRS0Qr2mTnQKKelQsL_G2sdoP9GNcOCn-S5tJfdwEgtqsZ1sdWta7-3Wa_Z35umzSuH2LDm1ddnEAItpM02gsVyZKHiGUKhoe7gbIsiUXXCUnIJDITgpH86g_rI360.QNy0ta_7SRpA3bOe07gsHcqFkHt1ZIjsytTQmGM73BY&dib_tag=se&keywords=mobiles&qid=1779860385&sr=8-6"
    },
    {
        "category": "Mobiles",
        "productName": "vivo T5x 5G (Cyber Green, 6GB RAM, 128GB Storage) | 50MP AI Dual Camera | 32MP Selfie | 6.76\" FHD+ Display | 7200mAh Battery | Dimensity 7400-Turbo Processor | Fast Charging | Dual SIM Smartphone",
        "price": "22,399",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 30,
        "discountPercentage": "17%",
        "imageUrl": "https://m.media-amazon.com/images/I/71uPWQoOysL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/vivo-Dimensity-7400-Turbo-Processor-Smartphone/dp/B0GTTXP6WF/ref=sr_1_7?dib=eyJ2IjoiMSJ9.2aRzA9sOQkyZzTtaaaFcefMa5ilt6Og76MB3cCmopcDf-Id9ETzTcW3JWXTFQDwxA07GU95i2afcaY4gSB9prJseOfrvO6M12QU7FF36MS9m0WRS0Qr2mTnQKKelQsL_G2sdoP9GNcOCn-S5tJfdwEgtqsZ1sdWta7-3Wa_Z35umzSuH2LDm1ddnEAItpM02gsVyZKHiGUKhoe7gbIsiUXXCUnIJDITgpH86g_rI360.QNy0ta_7SRpA3bOe07gsHcqFkHt1ZIjsytTQmGM73BY&dib_tag=se&keywords=mobiles&qid=1779860385&sr=8-7"
    },
    {
        "category": "Mobiles",
        "productName": "realme C71 4G Smartphone 6GB+128GB,6.745 inch Screen, 90Hz Eye Comfort Display, 6300mAh Battery, 37MP Cameras, Unisoc T7250 Chip, IP54, Sea Blue",
        "price": "13,399",
        "rating": "3.9 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 46,
        "discountPercentage": "24%",
        "imageUrl": "https://m.media-amazon.com/images/I/61l38sgkFML._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/realme-Smartphone-Comfort-Display-6300mAh/dp/B0GFW1BJ1D/ref=sr_1_8?dib=eyJ2IjoiMSJ9.2aRzA9sOQkyZzTtaaaFcefMa5ilt6Og76MB3cCmopcDf-Id9ETzTcW3JWXTFQDwxA07GU95i2afcaY4gSB9prJseOfrvO6M12QU7FF36MS9m0WRS0Qr2mTnQKKelQsL_G2sdoP9GNcOCn-S5tJfdwEgtqsZ1sdWta7-3Wa_Z35umzSuH2LDm1ddnEAItpM02gsVyZKHiGUKhoe7gbIsiUXXCUnIJDITgpH86g_rI360.QNy0ta_7SRpA3bOe07gsHcqFkHt1ZIjsytTQmGM73BY&dib_tag=se&keywords=mobiles&qid=1779860385&sr=8-8"
    },
    {
        "category": "Mobiles",
        "productName": "Samsung Galaxy M17 5G Mobile (Moonlight Silver, 6GB RAM, 128GB Storage) | 50MP OIS Triple Camera | Gorilla Glass Victus| IP54 | 6 Gen OS Upgrades | AI | Gemini Live | Lag-free Gaming | Without Charger",
        "price": "16,499",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 32,
        "discountPercentage": "5%",
        "imageUrl": "https://m.media-amazon.com/images/I/71S8BY96MwL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/Samsung-Moonlight-Storage-Upgrades-Lag-free/dp/B0FN7W26Q8/ref=sr_1_9?dib=eyJ2IjoiMSJ9.2aRzA9sOQkyZzTtaaaFcefMa5ilt6Og76MB3cCmopcDf-Id9ETzTcW3JWXTFQDwxA07GU95i2afcaY4gSB9prJseOfrvO6M12QU7FF36MS9m0WRS0Qr2mTnQKKelQsL_G2sdoP9GNcOCn-S5tJfdwEgtqsZ1sdWta7-3Wa_Z35umzSuH2LDm1ddnEAItpM02gsVyZKHiGUKhoe7gbIsiUXXCUnIJDITgpH86g_rI360.QNy0ta_7SRpA3bOe07gsHcqFkHt1ZIjsytTQmGM73BY&dib_tag=se&keywords=mobiles&qid=1779860385&sr=8-9"
    },
    {
        "category": "Mobiles",
        "productName": "vivo Y05 (Midnight Blue, 4GB RAM, 64GB Storage) with No Cost EMI/Additional Exchange Offers",
        "price": "12,999",
        "rating": "4.5 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "9%",
        "imageUrl": "https://m.media-amazon.com/images/I/71BBSNCHVHL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/vivo-Y05-Midnight-Additional-Exchange/dp/B0GWHQKTJB/ref=sr_1_10?dib=eyJ2IjoiMSJ9.2aRzA9sOQkyZzTtaaaFcefMa5ilt6Og76MB3cCmopcDf-Id9ETzTcW3JWXTFQDwxA07GU95i2afcaY4gSB9prJseOfrvO6M12QU7FF36MS9m0WRS0Qr2mTnQKKelQsL_G2sdoP9GNcOCn-S5tJfdwEgtqsZ1sdWta7-3Wa_Z35umzSuH2LDm1ddnEAItpM02gsVyZKHiGUKhoe7gbIsiUXXCUnIJDITgpH86g_rI360.QNy0ta_7SRpA3bOe07gsHcqFkHt1ZIjsytTQmGM73BY&dib_tag=se&keywords=mobiles&qid=1779860385&sr=8-10"
    },
    {
        "category": "Mobiles",
        "productName": "Apple iPhone 16 Plus 256 GB: 5G Mobile Phone with Camera Control, A18 Chip and a Big Boost in Battery Life. Works with AirPods; Ultrmarine",
        "price": "89,900",
        "rating": "4.6 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 48,
        "discountPercentage": "57%",
        "imageUrl": "https://m.media-amazon.com/images/I/71D3JsltoLL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTozNjEyNDc0MjcyOTgwMTI4OjE3Nzk4NjAzODU6c3BfbXRmOjMwMDM1MTQ4MTk3OTkzMjo6MDo6&url=%2FiPhone-16-Plus-256-Ultrmarine%2Fdp%2FB0DGJGRDDS%2Fref%3Dsr_1_11_sspa%3Fdib%3DeyJ2IjoiMSJ9.2aRzA9sOQkyZzTtaaaFcefMa5ilt6Og76MB3cCmopcDf-Id9ETzTcW3JWXTFQDwxA07GU95i2afcaY4gSB9prJseOfrvO6M12QU7FF36MS9m0WRS0Qr2mTnQKKelQsL_G2sdoP9GNcOCn-S5tJfdwEgtqsZ1sdWta7-3Wa_Z35umzSuH2LDm1ddnEAItpM02gsVyZKHiGUKhoe7gbIsiUXXCUnIJDITgpH86g_rI360.QNy0ta_7SRpA3bOe07gsHcqFkHt1ZIjsytTQmGM73BY%26dib_tag%3Dse%26keywords%3Dmobiles%26qid%3D1779860385%26sr%3D8-11-spons%26aref%3D1QyYTLFmqC%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1&aref=1QyYTLFmqC&sp_cr=ZAZ"
    },
    {
        "category": "Mobiles",
        "productName": "Apple iPhone 17e 256 GB: 15.40 cm (6.1\u2033) Super Retina XDR Display, A19 Chip, All-Day Battery Life, 48MP Fusion Camera, 256GB Starting Storage; Soft Pink",
        "price": "64,900",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 31,
        "discountPercentage": "20%",
        "imageUrl": "https://m.media-amazon.com/images/I/61zVFiTawKL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTozNjEyNDc0MjcyOTgwMTI4OjE3Nzk4NjAzODU6c3BfbXRmOjMwMDk4ODU4ODg2MDYzMjo6MDo6&url=%2FApple-iPhone-17e-256-GB%2Fdp%2FB0GQVQY8B7%2Fref%3Dsr_1_12_sspa%3Fdib%3DeyJ2IjoiMSJ9.2aRzA9sOQkyZzTtaaaFcefMa5ilt6Og76MB3cCmopcDf-Id9ETzTcW3JWXTFQDwxA07GU95i2afcaY4gSB9prJseOfrvO6M12QU7FF36MS9m0WRS0Qr2mTnQKKelQsL_G2sdoP9GNcOCn-S5tJfdwEgtqsZ1sdWta7-3Wa_Z35umzSuH2LDm1ddnEAItpM02gsVyZKHiGUKhoe7gbIsiUXXCUnIJDITgpH86g_rI360.QNy0ta_7SRpA3bOe07gsHcqFkHt1ZIjsytTQmGM73BY%26dib_tag%3Dse%26keywords%3Dmobiles%26qid%3D1779860385%26sr%3D8-12-spons%26aref%3DKqp5WiNZBm%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1&aref=Kqp5WiNZBm&sp_cr=ZAZ"
    },
    {
        "category": "Mobiles",
        "productName": "Samsung Galaxy F06 5G, Bahama Blue (4GB, 128GB)",
        "price": "12,490",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 20,
        "discountPercentage": "11%",
        "imageUrl": "https://m.media-amazon.com/images/I/419elQRZNFL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/Samsung-Galaxy-Bahama-Blue-128GB/dp/B0DYP4NYYJ/ref=sr_1_13?dib=eyJ2IjoiMSJ9.2aRzA9sOQkyZzTtaaaFcefMa5ilt6Og76MB3cCmopcDf-Id9ETzTcW3JWXTFQDwxA07GU95i2afcaY4gSB9prJseOfrvO6M12QU7FF36MS9m0WRS0Qr2mTnQKKelQsL_G2sdoP9GNcOCn-S5tJfdwEgtqsZ1sdWta7-3Wa_Z35umzSuH2LDm1ddnEAItpM02gsVyZKHiGUKhoe7gbIsiUXXCUnIJDITgpH86g_rI360.QNy0ta_7SRpA3bOe07gsHcqFkHt1ZIjsytTQmGM73BY&dib_tag=se&keywords=mobiles&qid=1779860385&sr=8-13"
    },
    {
        "category": "Mobiles",
        "productName": "Samsung Galaxy M06 5G Mobile (Sage Green, 4GB RAM, 128GB Storage) | MediaTek Dimensity 6300 | AnTuTu 623K+ | 12 5G Bands | 25W Fast Charging | 4 Gen OS Upgrades | 50MP Camera | Without Charger",
        "price": "13,999",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 47,
        "discountPercentage": "23%",
        "imageUrl": "https://m.media-amazon.com/images/I/71vibvcdAlL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/Samsung-MediaTek-Dimensity-Charging-Upgrades/dp/B0DX6P3RX9/ref=sr_1_14?dib=eyJ2IjoiMSJ9.2aRzA9sOQkyZzTtaaaFcefMa5ilt6Og76MB3cCmopcDf-Id9ETzTcW3JWXTFQDwxA07GU95i2afcaY4gSB9prJseOfrvO6M12QU7FF36MS9m0WRS0Qr2mTnQKKelQsL_G2sdoP9GNcOCn-S5tJfdwEgtqsZ1sdWta7-3Wa_Z35umzSuH2LDm1ddnEAItpM02gsVyZKHiGUKhoe7gbIsiUXXCUnIJDITgpH86g_rI360.QNy0ta_7SRpA3bOe07gsHcqFkHt1ZIjsytTQmGM73BY&dib_tag=se&keywords=mobiles&qid=1779860385&sr=8-14"
    },
    {
        "category": "Mobiles",
        "productName": "POCO C71, Desert Gold (4GB, 64GB)",
        "price": "N/A",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 9,
        "discountPercentage": "29%",
        "imageUrl": "https://m.media-amazon.com/images/I/51U-172cpVL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/POCO-C71-Desert-Gold-64GB/dp/B0F4CWD6V3/ref=sr_1_15?dib=eyJ2IjoiMSJ9.2aRzA9sOQkyZzTtaaaFcefMa5ilt6Og76MB3cCmopcDf-Id9ETzTcW3JWXTFQDwxA07GU95i2afcaY4gSB9prJseOfrvO6M12QU7FF36MS9m0WRS0Qr2mTnQKKelQsL_G2sdoP9GNcOCn-S5tJfdwEgtqsZ1sdWta7-3Wa_Z35umzSuH2LDm1ddnEAItpM02gsVyZKHiGUKhoe7gbIsiUXXCUnIJDITgpH86g_rI360.QNy0ta_7SRpA3bOe07gsHcqFkHt1ZIjsytTQmGM73BY&dib_tag=se&keywords=mobiles&qid=1779860385&sr=8-15"
    },
    {
        "category": "Mobiles",
        "productName": "Samsung Galaxy S25 Ultra 5G AI Smartphone (Titanium Silverblue, 12GB RAM, 512GB Storage), 200MP Camera, S Pen Included, Long Battery Life",
        "price": "1,29,999",
        "rating": "4.4 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 32,
        "discountPercentage": "35%",
        "imageUrl": "https://m.media-amazon.com/images/I/71tz3adVWaL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/Samsung-Smartphone-Silverblue-Snapdragon-ProVisual/dp/B0DSBTKP5Q/ref=sr_1_16?dib=eyJ2IjoiMSJ9.2aRzA9sOQkyZzTtaaaFcefMa5ilt6Og76MB3cCmopcDf-Id9ETzTcW3JWXTFQDwxA07GU95i2afcaY4gSB9prJseOfrvO6M12QU7FF36MS9m0WRS0Qr2mTnQKKelQsL_G2sdoP9GNcOCn-S5tJfdwEgtqsZ1sdWta7-3Wa_Z35umzSuH2LDm1ddnEAItpM02gsVyZKHiGUKhoe7gbIsiUXXCUnIJDITgpH86g_rI360.QNy0ta_7SRpA3bOe07gsHcqFkHt1ZIjsytTQmGM73BY&dib_tag=se&keywords=mobiles&qid=1779860385&sr=8-16"
    },
    {
        "category": "Mobiles",
        "productName": "Motorola G57 Power (Fluidity, 8GB RAM, 128GB Storage) | Snapdragon 6s Gen 4 Processor | 6.72\" FHD+ Display | 50MP LYT-600 + 8MP Ultrawide | 8MP Selfie Camera | 7000mAh Battery, 33W TurboPower | IP64",
        "price": "17,749",
        "rating": "4.5 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 7,
        "discountPercentage": "17%",
        "imageUrl": "https://m.media-amazon.com/images/I/61M3DFp4Q7L._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/Motorola-G57-Snapdragon-Processor-TurboPower/dp/B0GRHG12QL/ref=sr_1_17?dib=eyJ2IjoiMSJ9.2aRzA9sOQkyZzTtaaaFcefMa5ilt6Og76MB3cCmopcDf-Id9ETzTcW3JWXTFQDwxA07GU95i2afcaY4gSB9prJseOfrvO6M12QU7FF36MS9m0WRS0Qr2mTnQKKelQsL_G2sdoP9GNcOCn-S5tJfdwEgtqsZ1sdWta7-3Wa_Z35umzSuH2LDm1ddnEAItpM02gsVyZKHiGUKhoe7gbIsiUXXCUnIJDITgpH86g_rI360.QNy0ta_7SRpA3bOe07gsHcqFkHt1ZIjsytTQmGM73BY&dib_tag=se&keywords=mobiles&qid=1779860385&sr=8-17"
    },
    {
        "category": "Mobiles",
        "productName": "iQOO Z11x 5G (Titan Black, 6GB RAM, 128 GB Storage) | Dimensity 7400-Turbo Processor | 7200 mAh Battery | 4K Video Recording Front & Back | IP68 & IP69+ | Powered by OriginOS 6",
        "price": "22,999",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 20,
        "discountPercentage": "8%",
        "imageUrl": "https://m.media-amazon.com/images/I/618IOq-RikL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/iQOO-Dimensity-7400-Turbo-Processor-Recording/dp/B0GP7BD27Q/ref=sr_1_18?dib=eyJ2IjoiMSJ9.2aRzA9sOQkyZzTtaaaFcefMa5ilt6Og76MB3cCmopcDf-Id9ETzTcW3JWXTFQDwxA07GU95i2afcaY4gSB9prJseOfrvO6M12QU7FF36MS9m0WRS0Qr2mTnQKKelQsL_G2sdoP9GNcOCn-S5tJfdwEgtqsZ1sdWta7-3Wa_Z35umzSuH2LDm1ddnEAItpM02gsVyZKHiGUKhoe7gbIsiUXXCUnIJDITgpH86g_rI360.QNy0ta_7SRpA3bOe07gsHcqFkHt1ZIjsytTQmGM73BY&dib_tag=se&keywords=mobiles&qid=1779860385&sr=8-18"
    },
    {
        "category": "Mobiles",
        "productName": "Samsung Galaxy M06 5G Mobile (Sage Green, 4GB RAM, 64GB Storage) | MediaTek Dimensity 6300 | AnTuTu 623K+ | 12 5G Bands | 25W Fast Charging | 4 Gen OS Upgrades | 50MP Camera | Without Charger",
        "price": "12,499",
        "rating": "3.8 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 46,
        "discountPercentage": "54%",
        "imageUrl": "https://m.media-amazon.com/images/I/71vibvcdAlL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/Samsung-MediaTek-Dimensity-Charging-Upgrades/dp/B0G81V3VY4/ref=sr_1_19?dib=eyJ2IjoiMSJ9.2aRzA9sOQkyZzTtaaaFcefMa5ilt6Og76MB3cCmopcDf-Id9ETzTcW3JWXTFQDwxA07GU95i2afcaY4gSB9prJseOfrvO6M12QU7FF36MS9m0WRS0Qr2mTnQKKelQsL_G2sdoP9GNcOCn-S5tJfdwEgtqsZ1sdWta7-3Wa_Z35umzSuH2LDm1ddnEAItpM02gsVyZKHiGUKhoe7gbIsiUXXCUnIJDITgpH86g_rI360.QNy0ta_7SRpA3bOe07gsHcqFkHt1ZIjsytTQmGM73BY&dib_tag=se&keywords=mobiles&qid=1779860385&sr=8-19"
    },
    {
        "category": "Mobiles",
        "productName": "Samsung Galaxy M56 5G Mobile (Light Green,8GB RAM,128GB Storage)| Segment Slimmest | Gorilla Glass Victus+| 10 Bit HDR Video| 50MP Camera| AI | Vapour Cooling Chamber| Lag-free Gaming| Without Charger",
        "price": "23,499",
        "rating": "4.3 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 4,
        "discountPercentage": "39%",
        "imageUrl": "https://m.media-amazon.com/images/I/71PQ2tp0jwL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/Samsung-Slimmest-Enhanced-Nightography-Processor/dp/B0F43VZ4H1/ref=sr_1_20?dib=eyJ2IjoiMSJ9.2aRzA9sOQkyZzTtaaaFcefMa5ilt6Og76MB3cCmopcDf-Id9ETzTcW3JWXTFQDwxA07GU95i2afcaY4gSB9prJseOfrvO6M12QU7FF36MS9m0WRS0Qr2mTnQKKelQsL_G2sdoP9GNcOCn-S5tJfdwEgtqsZ1sdWta7-3Wa_Z35umzSuH2LDm1ddnEAItpM02gsVyZKHiGUKhoe7gbIsiUXXCUnIJDITgpH86g_rI360.QNy0ta_7SRpA3bOe07gsHcqFkHt1ZIjsytTQmGM73BY&dib_tag=se&keywords=mobiles&qid=1779860385&sr=8-20"
    },
    {
        "category": "Mobiles",
        "productName": "Apple iPhone Air 512 GB: Thinnest iPhone Ever, 16.63 cm (6.5\u2033) Display with Promotion up to 120Hz, Powerful A19 Pro Chip, Center Stage Front Camera, All-Day Battery Life; Cloud White",
        "price": "1,21,900",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 25,
        "discountPercentage": "24%",
        "imageUrl": "https://m.media-amazon.com/images/I/61+0aSXsyGL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTozNjEyNDc0MjcyOTgwMTI4OjE3Nzk4NjAzODU6c3BfYnRmOjMwMDcyNTMzMTYxOTAzMjo6MDo6&url=%2FiPhone-Air-512-GB-Promotion%2Fdp%2FB0FQFJG6WN%2Fref%3Dsr_1_21_sspa%3Fdib%3DeyJ2IjoiMSJ9.2aRzA9sOQkyZzTtaaaFcefMa5ilt6Og76MB3cCmopcDf-Id9ETzTcW3JWXTFQDwxA07GU95i2afcaY4gSB9prJseOfrvO6M12QU7FF36MS9m0WRS0Qr2mTnQKKelQsL_G2sdoP9GNcOCn-S5tJfdwEgtqsZ1sdWta7-3Wa_Z35umzSuH2LDm1ddnEAItpM02gsVyZKHiGUKhoe7gbIsiUXXCUnIJDITgpH86g_rI360.QNy0ta_7SRpA3bOe07gsHcqFkHt1ZIjsytTQmGM73BY%26dib_tag%3Dse%26keywords%3Dmobiles%26qid%3D1779860385%26sr%3D8-21-spons%26aref%3D5Gmv9Viqkz%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1&aref=5Gmv9Viqkz&sp_cr=ZAZ"
    },
    {
        "category": "Mobiles",
        "productName": "Apple iPhone Air 1 TB: Thinnest iPhone Ever, 16.63 cm (6.5\u2033) Display with Promotion up to 120Hz, Powerful A19 Pro Chip, Center Stage Front Camera, All-Day Battery Life; Sky Blue",
        "price": "1,35,490",
        "rating": "3.7 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 14,
        "discountPercentage": "65%",
        "imageUrl": "https://m.media-amazon.com/images/I/61Ce-6B6x+L._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTozNjEyNDc0MjcyOTgwMTI4OjE3Nzk4NjAzODU6c3BfYnRmOjMwMDcyNTMzMTYxOTYzMjo6MDo6&url=%2FiPhone-Air-TB-Thinnest-Promotion%2Fdp%2FB0FQG1TPG9%2Fref%3Dsr_1_22_sspa%3Fdib%3DeyJ2IjoiMSJ9.2aRzA9sOQkyZzTtaaaFcefMa5ilt6Og76MB3cCmopcDf-Id9ETzTcW3JWXTFQDwxA07GU95i2afcaY4gSB9prJseOfrvO6M12QU7FF36MS9m0WRS0Qr2mTnQKKelQsL_G2sdoP9GNcOCn-S5tJfdwEgtqsZ1sdWta7-3Wa_Z35umzSuH2LDm1ddnEAItpM02gsVyZKHiGUKhoe7gbIsiUXXCUnIJDITgpH86g_rI360.QNy0ta_7SRpA3bOe07gsHcqFkHt1ZIjsytTQmGM73BY%26dib_tag%3Dse%26keywords%3Dmobiles%26qid%3D1779860385%26sr%3D8-22-spons%26aref%3DNHJOWigzBp%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1&aref=NHJOWigzBp&sp_cr=ZAZ"
    },
    {
        "category": "Laptops",
        "productName": "HP Smartchoice Omnibook 5 OLED (Previously Pavilion), Snapdragon X Processor (16GB LPDDR5x,1TB SSD) 2K OLED,16''/40.6cm, Win11, M365(1yr)*Office24, Glacier Silver, 1.59kg, fb0001QU,Next-Gen AI Laptop",
        "price": "68,739",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "7%",
        "imageUrl": "https://m.media-amazon.com/images/I/71IdAMTOjZL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo4OTI4MzY2NzEzNjU3NzY5OjE3Nzk4NjA0MDU6c3BfYXRmOjMwMDkwMDY5NDE0ODYzMjo6MDo6&url=%2FHP-Previously-Snapdragon-Processor-fb0001QU%2Fdp%2FB0FRM3G9JF%2Fref%3Dsr_1_1_sspa%3Fdib%3DeyJ2IjoiMSJ9.feMkxZ5xTJkiON8FMXJYqrp_HdOi94tEniGmeKW8lweqQPcTzl_WUe1JH0x9UvjlcKOs28dZCihGoyWdt5xP73Jn41mgBtgm-rUUnBKkkVYlsO7Rr-p3rV7TT_f3OqwUnCdNb6KqpcbmtWLpLNHfAIScHSvWibhPMO4vZxDEEtJwuDG2YtafSShlnZ0xEaRKEUFkCylBpQ003PV9E5hBQ87754-EV2xse5MLUQzzdOc.ZbDsTNh_a7txexUFU5-Tp4spMWuqTdi_mdDlmvZxAj0%26dib_tag%3Dse%26keywords%3Dlaptops%26qid%3D1779860405%26sr%3D8-1-spons%26aref%3Dt3IlMZ5VyW%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=t3IlMZ5VyW&sp_cr=ZAZ"
    },
    {
        "category": "Laptops",
        "productName": "Lenovo V15 G4 (2024), AMD Ryzen 3 7320U Quad Core - (8GB/512GB SSD/AMD Radeon Graphics/Windows 11 Home) Thin and Light Business Laptop/15.6\" FHD Display/Arctic Grey/1.57 kg/MS Office 2021",
        "price": "44,500",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 22,
        "discountPercentage": "17%",
        "imageUrl": "https://m.media-amazon.com/images/I/61AccNkmFFL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo4OTI4MzY2NzEzNjU3NzY5OjE3Nzk4NjA0MDU6c3BfYXRmOjMwMDcxMDUwNDAxMjIzMjo6MDo6&url=%2FLenovo-V15-Ryzen-7320U-Quad%2Fdp%2FB0DHFSN5M7%2Fref%3Dsr_1_2_sspa%3Fdib%3DeyJ2IjoiMSJ9.feMkxZ5xTJkiON8FMXJYqrp_HdOi94tEniGmeKW8lweqQPcTzl_WUe1JH0x9UvjlcKOs28dZCihGoyWdt5xP73Jn41mgBtgm-rUUnBKkkVYlsO7Rr-p3rV7TT_f3OqwUnCdNb6KqpcbmtWLpLNHfAIScHSvWibhPMO4vZxDEEtJwuDG2YtafSShlnZ0xEaRKEUFkCylBpQ003PV9E5hBQ87754-EV2xse5MLUQzzdOc.ZbDsTNh_a7txexUFU5-Tp4spMWuqTdi_mdDlmvZxAj0%26dib_tag%3Dse%26keywords%3Dlaptops%26qid%3D1779860405%26sr%3D8-2-spons%26aref%3DD0icqO5fQQ%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=D0icqO5fQQ&sp_cr=ZAZ"
    },
    {
        "category": "Laptops",
        "productName": "HP 15, 13th Gen Intel Core i5-1334U (16GB DDR4,512GB SSD) FHD, Anti-Glare,Micro-Edge, 15.6''/39.6cm, Win11, M365(1yr)* Office24, Silver,1.59kg, fd0467tu, Iris Xe, FHD Camera w/Shutter, Backlit Laptop",
        "price": "59,990",
        "rating": "3.9 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 3,
        "discountPercentage": "53%",
        "imageUrl": "https://m.media-amazon.com/images/I/71r0BBNmBOL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/HP-i5-1334U-Microsoft-Graphics-fd0467tu/dp/B0DTK9DZB4/ref=sr_1_3?dib=eyJ2IjoiMSJ9.feMkxZ5xTJkiON8FMXJYqrp_HdOi94tEniGmeKW8lweqQPcTzl_WUe1JH0x9UvjlcKOs28dZCihGoyWdt5xP73Jn41mgBtgm-rUUnBKkkVYlsO7Rr-p3rV7TT_f3OqwUnCdNb6KqpcbmtWLpLNHfAIScHSvWibhPMO4vZxDEEtJwuDG2YtafSShlnZ0xEaRKEUFkCylBpQ003PV9E5hBQ87754-EV2xse5MLUQzzdOc.ZbDsTNh_a7txexUFU5-Tp4spMWuqTdi_mdDlmvZxAj0&dib_tag=se&keywords=laptops&qid=1779860405&sr=8-3"
    },
    {
        "category": "Laptops",
        "productName": "Apple 2026 MacBook Neo 13\u2033 Laptop with A18 Pro chip: Built for AI and Apple Intelligence, Liquid Retina Display, 8GB Unified Memory, 256GB SSD Storage, 1080p FaceTime HD Camera; Indigo",
        "price": "65,700",
        "rating": "4.8 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 14,
        "discountPercentage": "51%",
        "imageUrl": "https://m.media-amazon.com/images/I/61vTx-Qa1QL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/Apple-2026-MacBook-Laptop-chip/dp/B0GR64G4H6/ref=sr_1_4?dib=eyJ2IjoiMSJ9.feMkxZ5xTJkiON8FMXJYqrp_HdOi94tEniGmeKW8lweqQPcTzl_WUe1JH0x9UvjlcKOs28dZCihGoyWdt5xP73Jn41mgBtgm-rUUnBKkkVYlsO7Rr-p3rV7TT_f3OqwUnCdNb6KqpcbmtWLpLNHfAIScHSvWibhPMO4vZxDEEtJwuDG2YtafSShlnZ0xEaRKEUFkCylBpQ003PV9E5hBQ87754-EV2xse5MLUQzzdOc.ZbDsTNh_a7txexUFU5-Tp4spMWuqTdi_mdDlmvZxAj0&dib_tag=se&keywords=laptops&qid=1779860405&sr=8-4"
    },
    {
        "category": "Laptops",
        "productName": "EBook 11.6\" HD Laptop | Best Student & Office Work Laptop | Celeron N4020 | 4GB DDR4 | 128GB eMMC + M.2 SSD Expandable Slot | Win 11 Home |31Wh Battery | UHD Graphics 600 | Black",
        "price": "11,990",
        "rating": "3.2 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 7,
        "discountPercentage": "66%",
        "imageUrl": "https://m.media-amazon.com/images/I/71F8TUSryhL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/Neopticon-Student-Celeron-Expandable-Graphics/dp/B0G2MT8YVV/ref=sr_1_5?dib=eyJ2IjoiMSJ9.feMkxZ5xTJkiON8FMXJYqrp_HdOi94tEniGmeKW8lweqQPcTzl_WUe1JH0x9UvjlcKOs28dZCihGoyWdt5xP73Jn41mgBtgm-rUUnBKkkVYlsO7Rr-p3rV7TT_f3OqwUnCdNb6KqpcbmtWLpLNHfAIScHSvWibhPMO4vZxDEEtJwuDG2YtafSShlnZ0xEaRKEUFkCylBpQ003PV9E5hBQ87754-EV2xse5MLUQzzdOc.ZbDsTNh_a7txexUFU5-Tp4spMWuqTdi_mdDlmvZxAj0&dib_tag=se&keywords=laptops&qid=1779860405&sr=8-5"
    },
    {
        "category": "Laptops",
        "productName": "ASUS TUF A15 (2025), AMD Ryzen 7 7445HS,RTX 3050-4GB,75W TGP,16GB DDR5(Upgradeable Upto 64GB) 512GB SSD,FHD,15.6\",144Hz,RGB Keyboard,Windows 11,Graphite Black,2.3 Kg FA506NCG-HN199W, Gaming Laptop",
        "price": "73,990",
        "rating": "4.3 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 11,
        "discountPercentage": "70%",
        "imageUrl": "https://m.media-amazon.com/images/I/71K4CpdfmHL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/ASUS-Upgradeable-Keyboard-Graphite-FA506NCG-HN199W/dp/B0FM3C4L2F/ref=sr_1_6?dib=eyJ2IjoiMSJ9.feMkxZ5xTJkiON8FMXJYqrp_HdOi94tEniGmeKW8lweqQPcTzl_WUe1JH0x9UvjlcKOs28dZCihGoyWdt5xP73Jn41mgBtgm-rUUnBKkkVYlsO7Rr-p3rV7TT_f3OqwUnCdNb6KqpcbmtWLpLNHfAIScHSvWibhPMO4vZxDEEtJwuDG2YtafSShlnZ0xEaRKEUFkCylBpQ003PV9E5hBQ87754-EV2xse5MLUQzzdOc.ZbDsTNh_a7txexUFU5-Tp4spMWuqTdi_mdDlmvZxAj0&dib_tag=se&keywords=laptops&qid=1779860405&sr=8-6"
    },
    {
        "category": "Laptops",
        "productName": "HP 15, 13th Gen Intel Core i3-1315U Laptop (8GB DDR4,512GB SSD) Anti-Glare, Micro-Edge,15.6''/39.6cm, FHD, Win11,M365 Basic(1yr),Office Home24, Silver,1.59kg, FHD Camera w/Privacy Shutter, fd0569TU",
        "price": "50,390",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 45,
        "discountPercentage": "49%",
        "imageUrl": "https://m.media-amazon.com/images/I/61R5Ecv7i-L._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/HP-i3-1315U-Anti-Glare-Micro-Edge-fd0569TU/dp/B0F4R5W1NC/ref=sr_1_7?dib=eyJ2IjoiMSJ9.feMkxZ5xTJkiON8FMXJYqrp_HdOi94tEniGmeKW8lweqQPcTzl_WUe1JH0x9UvjlcKOs28dZCihGoyWdt5xP73Jn41mgBtgm-rUUnBKkkVYlsO7Rr-p3rV7TT_f3OqwUnCdNb6KqpcbmtWLpLNHfAIScHSvWibhPMO4vZxDEEtJwuDG2YtafSShlnZ0xEaRKEUFkCylBpQ003PV9E5hBQ87754-EV2xse5MLUQzzdOc.ZbDsTNh_a7txexUFU5-Tp4spMWuqTdi_mdDlmvZxAj0&dib_tag=se&keywords=laptops&qid=1779860405&sr=8-7"
    },
    {
        "category": "Laptops",
        "productName": "ASUS Vivobook 15, Smartchoice, AMD Ryzen 7 5825U, 16GB RAM, 512GB SSD, FHD 15.6\", Windows 11, Office Home 2024, Quiet Blue, 1.7Kg, M1502YA-BQ703WS, AMD Radeon iGPU, M365 Basic (1Year)*, 42Whr Laptop",
        "price": "54,990",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 33,
        "discountPercentage": "26%",
        "imageUrl": "https://m.media-amazon.com/images/I/71zMooVIVAL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/ASUS-Vivobook-Smartchoice-Windows-M1502YA-BQ703WS/dp/B0FC2LKFSC/ref=sr_1_8?dib=eyJ2IjoiMSJ9.feMkxZ5xTJkiON8FMXJYqrp_HdOi94tEniGmeKW8lweqQPcTzl_WUe1JH0x9UvjlcKOs28dZCihGoyWdt5xP73Jn41mgBtgm-rUUnBKkkVYlsO7Rr-p3rV7TT_f3OqwUnCdNb6KqpcbmtWLpLNHfAIScHSvWibhPMO4vZxDEEtJwuDG2YtafSShlnZ0xEaRKEUFkCylBpQ003PV9E5hBQ87754-EV2xse5MLUQzzdOc.ZbDsTNh_a7txexUFU5-Tp4spMWuqTdi_mdDlmvZxAj0&dib_tag=se&keywords=laptops&qid=1779860405&sr=8-8"
    },
    {
        "category": "Laptops",
        "productName": "Acer Smartchoice Aspire One, Intel Core Celeron N4500, Office 2024 + M365 Basic, 12GB LPDDR4X / 512GB SSD, 14.0\"/35.56cm TN HD Display, Win 11 Home, Pure Silver, 1.3KG, A114-45, Thin and Light Laptop",
        "price": "37,990",
        "rating": "3.4 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 41,
        "discountPercentage": "62%",
        "imageUrl": "https://m.media-amazon.com/images/I/71uoRYyilhL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/Acer-Smartchoice-Celeron-LPDDR4X-A114-45/dp/B0GW8JNM6J/ref=sr_1_9?dib=eyJ2IjoiMSJ9.feMkxZ5xTJkiON8FMXJYqrp_HdOi94tEniGmeKW8lweqQPcTzl_WUe1JH0x9UvjlcKOs28dZCihGoyWdt5xP73Jn41mgBtgm-rUUnBKkkVYlsO7Rr-p3rV7TT_f3OqwUnCdNb6KqpcbmtWLpLNHfAIScHSvWibhPMO4vZxDEEtJwuDG2YtafSShlnZ0xEaRKEUFkCylBpQ003PV9E5hBQ87754-EV2xse5MLUQzzdOc.ZbDsTNh_a7txexUFU5-Tp4spMWuqTdi_mdDlmvZxAj0&dib_tag=se&keywords=laptops&qid=1779860405&sr=8-9"
    },
    {
        "category": "Laptops",
        "productName": "Dell 15, Intel Core i3/Core 3 14th Gen-100U, 16GB DDR4, 512GB SSD, FHD IPS, 15.6\"/39.62cm, Windows 11, Microsoft Office Home 2024, Carbon Black, 1.63Kg, Thin & Light, Laptop Model NO - Dell 15 DCU5250",
        "price": "49,990",
        "rating": "3.8 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "36%",
        "imageUrl": "https://m.media-amazon.com/images/I/71I4NoKj-oL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/Dell-15-Processor-Graphics-Display/dp/B0FDWH5WTL/ref=sr_1_10?dib=eyJ2IjoiMSJ9.feMkxZ5xTJkiON8FMXJYqrp_HdOi94tEniGmeKW8lweqQPcTzl_WUe1JH0x9UvjlcKOs28dZCihGoyWdt5xP73Jn41mgBtgm-rUUnBKkkVYlsO7Rr-p3rV7TT_f3OqwUnCdNb6KqpcbmtWLpLNHfAIScHSvWibhPMO4vZxDEEtJwuDG2YtafSShlnZ0xEaRKEUFkCylBpQ003PV9E5hBQ87754-EV2xse5MLUQzzdOc.ZbDsTNh_a7txexUFU5-Tp4spMWuqTdi_mdDlmvZxAj0&dib_tag=se&keywords=laptops&qid=1779860405&sr=8-10"
    },
    {
        "category": "Laptops",
        "productName": "Apple 2026 MacBook Neo 13\u2033 Laptop with A18 Pro chip: Built for AI and Apple Intelligence, Liquid Retina Display, 8GB Unified Memory, 256GB SSD Storage, 1080p FaceTime HD Camera; Indigo",
        "price": "65,700",
        "rating": "4.8 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "29%",
        "imageUrl": "https://m.media-amazon.com/images/I/61vTx-Qa1QL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo4OTI4MzY2NzEzNjU3NzY5OjE3Nzk4NjA0MDU6c3BfbXRmOjMwMDk4ODU2Njk0MzkzMjo6MDo6&url=%2FApple-2026-MacBook-Laptop-chip%2Fdp%2FB0GR64G4H6%2Fref%3Dsr_1_11_sspa%3Fdib%3DeyJ2IjoiMSJ9.feMkxZ5xTJkiON8FMXJYqrp_HdOi94tEniGmeKW8lweqQPcTzl_WUe1JH0x9UvjlcKOs28dZCihGoyWdt5xP73Jn41mgBtgm-rUUnBKkkVYlsO7Rr-p3rV7TT_f3OqwUnCdNb6KqpcbmtWLpLNHfAIScHSvWibhPMO4vZxDEEtJwuDG2YtafSShlnZ0xEaRKEUFkCylBpQ003PV9E5hBQ87754-EV2xse5MLUQzzdOc.ZbDsTNh_a7txexUFU5-Tp4spMWuqTdi_mdDlmvZxAj0%26dib_tag%3Dse%26keywords%3Dlaptops%26qid%3D1779860405%26sr%3D8-11-spons%26aref%3D32Yd6WF8dU%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1&aref=32Yd6WF8dU&sp_cr=ZAZ"
    },
    {
        "category": "Laptops",
        "productName": "HP Omnibook 3, Snapdragon X Processor, 45 TOPS (16GB LPDDR5x, 512GB SSD) 2K, WUXGA, IPS, 14''/35.6cm, Win 11, Office 24, Silver, 1.4kg, hz0026QU, FHD IR Camera, 42% Lighter mini GaN Charger, AI Laptop",
        "price": "69,990",
        "rating": "3.1 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 33,
        "discountPercentage": "49%",
        "imageUrl": "https://m.media-amazon.com/images/I/61JQ+09KcyL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo4OTI4MzY2NzEzNjU3NzY5OjE3Nzk4NjA0MDU6c3BfbXRmOjMwMTA3OTIxNjAwNzIzMjo6MDo6&url=%2FHP-Omnibook-Snapdragon-Processor-hz0026QU%2Fdp%2FB0GY8KNSFC%2Fref%3Dsr_1_12_sspa%3Fdib%3DeyJ2IjoiMSJ9.feMkxZ5xTJkiON8FMXJYqrp_HdOi94tEniGmeKW8lweqQPcTzl_WUe1JH0x9UvjlcKOs28dZCihGoyWdt5xP73Jn41mgBtgm-rUUnBKkkVYlsO7Rr-p3rV7TT_f3OqwUnCdNb6KqpcbmtWLpLNHfAIScHSvWibhPMO4vZxDEEtJwuDG2YtafSShlnZ0xEaRKEUFkCylBpQ003PV9E5hBQ87754-EV2xse5MLUQzzdOc.ZbDsTNh_a7txexUFU5-Tp4spMWuqTdi_mdDlmvZxAj0%26dib_tag%3Dse%26keywords%3Dlaptops%26qid%3D1779860405%26sr%3D8-12-spons%26aref%3DXa96wkZXe0%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1&aref=Xa96wkZXe0&sp_cr=ZAZ"
    },
    {
        "category": "Laptops",
        "productName": "\ud835\uddd7\ud835\uddf2\ud835\uddf9\ud835\uddf9Laptop Model 5420 | \ud835\udddc\ud835\udde1\ud835\udde7\ud835\uddd8\ud835\udddfi5 11th Gen Processor |8GB DDR4 RAM |256GB SSD |14\" FHD Display | Win10 | A+ Condition Laptop (Refab)",
        "price": "30,900",
        "rating": "N/A",
        "stockStatus": "In Stock",
        "stockQuantity": 47,
        "discountPercentage": "10%",
        "imageUrl": "https://m.media-amazon.com/images/I/51LHNjAjH9L._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/%F0%9D%97%97%F0%9D%97%B2%F0%9D%97%B9%F0%9D%97%B9Laptop-5420-%F0%9D%97%9C%F0%9D%97%A1%F0%9D%97%A7%F0%9D%97%98%F0%9D%97%9Fi5-Processor-Condition/dp/B0H1JV266J/ref=sr_1_13?dib=eyJ2IjoiMSJ9.feMkxZ5xTJkiON8FMXJYqrp_HdOi94tEniGmeKW8lweqQPcTzl_WUe1JH0x9UvjlcKOs28dZCihGoyWdt5xP73Jn41mgBtgm-rUUnBKkkVYlsO7Rr-p3rV7TT_f3OqwUnCdNb6KqpcbmtWLpLNHfAIScHSvWibhPMO4vZxDEEtJwuDG2YtafSShlnZ0xEaRKEUFkCylBpQ003PV9E5hBQ87754-EV2xse5MLUQzzdOc.ZbDsTNh_a7txexUFU5-Tp4spMWuqTdi_mdDlmvZxAj0&dib_tag=se&keywords=laptops&qid=1779860405&sr=8-13"
    },
    {
        "category": "Laptops",
        "productName": "acer SmartChoice Aspire Lite, AMD Ryzen 5-5625U Processor, 16 GB/512 GB, Full HD, 15.6\"/39.62 cm, Windows 11 Home, Steel Gray, 1.59 kg, AL15-41, Metal Body, Thin and Light Laptop",
        "price": "45,990",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "48%",
        "imageUrl": "https://m.media-amazon.com/images/I/718UBZxpxrL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/5-5625U-Premium-Windows-AL15-41-Display/dp/B0DG2GCTD7/ref=sr_1_14?dib=eyJ2IjoiMSJ9.feMkxZ5xTJkiON8FMXJYqrp_HdOi94tEniGmeKW8lweqQPcTzl_WUe1JH0x9UvjlcKOs28dZCihGoyWdt5xP73Jn41mgBtgm-rUUnBKkkVYlsO7Rr-p3rV7TT_f3OqwUnCdNb6KqpcbmtWLpLNHfAIScHSvWibhPMO4vZxDEEtJwuDG2YtafSShlnZ0xEaRKEUFkCylBpQ003PV9E5hBQ87754-EV2xse5MLUQzzdOc.ZbDsTNh_a7txexUFU5-Tp4spMWuqTdi_mdDlmvZxAj0&dib_tag=se&keywords=laptops&qid=1779860405&sr=8-14"
    },
    {
        "category": "Laptops",
        "productName": "HP Professional 14 (2026), Intel (i5 14th Gen) Core 5 120U - (12 GB/512 GB SSD/Intel Graphic/Windows 11 Pro) Business Laptop/14.0\" FHD/Backlit + Fingerprint/Silver/Copilot Key/1.4kg/MS Office",
        "price": "60,999",
        "rating": "N/A",
        "stockStatus": "Only Few Left",
        "stockQuantity": 49,
        "discountPercentage": "38%",
        "imageUrl": "https://m.media-amazon.com/images/I/713vs8UTXaL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/HP-Professional-Intel-14th-Core/dp/B07TPPR74C/ref=sr_1_15?dib=eyJ2IjoiMSJ9.feMkxZ5xTJkiON8FMXJYqrp_HdOi94tEniGmeKW8lweqQPcTzl_WUe1JH0x9UvjlcKOs28dZCihGoyWdt5xP73Jn41mgBtgm-rUUnBKkkVYlsO7Rr-p3rV7TT_f3OqwUnCdNb6KqpcbmtWLpLNHfAIScHSvWibhPMO4vZxDEEtJwuDG2YtafSShlnZ0xEaRKEUFkCylBpQ003PV9E5hBQ87754-EV2xse5MLUQzzdOc.ZbDsTNh_a7txexUFU5-Tp4spMWuqTdi_mdDlmvZxAj0&dib_tag=se&keywords=laptops&qid=1779860405&sr=8-15"
    },
    {
        "category": "Laptops",
        "productName": "ASUS Vivobook 15, Smartchoice,Intel Core i3 13th Gen 1315U, 12GB RAM, 512GB SSD, FHD 15.6\", Win 11, Office 2024, Quiet Blue, 1.7Kg, X1504VA-BQ332WS, Intel UHD iGPU, M365 Basic (1Year)*, 42Whrs Laptop",
        "price": "50,990",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 18,
        "discountPercentage": "18%",
        "imageUrl": "https://m.media-amazon.com/images/I/61JUHhbEMxL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/ASUS-Vivobook-Windows-Office-X1504VA-BQ332WS/dp/B0FKBM4SWJ/ref=sr_1_16?dib=eyJ2IjoiMSJ9.feMkxZ5xTJkiON8FMXJYqrp_HdOi94tEniGmeKW8lweqQPcTzl_WUe1JH0x9UvjlcKOs28dZCihGoyWdt5xP73Jn41mgBtgm-rUUnBKkkVYlsO7Rr-p3rV7TT_f3OqwUnCdNb6KqpcbmtWLpLNHfAIScHSvWibhPMO4vZxDEEtJwuDG2YtafSShlnZ0xEaRKEUFkCylBpQ003PV9E5hBQ87754-EV2xse5MLUQzzdOc.ZbDsTNh_a7txexUFU5-Tp4spMWuqTdi_mdDlmvZxAj0&dib_tag=se&keywords=laptops&qid=1779860405&sr=8-16"
    },
    {
        "category": "Laptops",
        "productName": "Dell 15 (Previously Inspiron) Laptop, 14th Gen Intel Core i3/Core 3 100U Processor, 8GB DDR4, 512 SSD, 15.6\" FHD 120Hz IPS 250 nit Display, Win 11 + Office H&S 2024, Carbon Black, Thin & Light 1.63Kg",
        "price": "46,490",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 10,
        "discountPercentage": "20%",
        "imageUrl": "https://m.media-amazon.com/images/I/717WZ7WriwL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/Dell-Previously-Inspiron-Processor-Display/dp/B0BQJ68HHC/ref=sr_1_17?dib=eyJ2IjoiMSJ9.feMkxZ5xTJkiON8FMXJYqrp_HdOi94tEniGmeKW8lweqQPcTzl_WUe1JH0x9UvjlcKOs28dZCihGoyWdt5xP73Jn41mgBtgm-rUUnBKkkVYlsO7Rr-p3rV7TT_f3OqwUnCdNb6KqpcbmtWLpLNHfAIScHSvWibhPMO4vZxDEEtJwuDG2YtafSShlnZ0xEaRKEUFkCylBpQ003PV9E5hBQ87754-EV2xse5MLUQzzdOc.ZbDsTNh_a7txexUFU5-Tp4spMWuqTdi_mdDlmvZxAj0&dib_tag=se&keywords=laptops&qid=1779860405&sr=8-17"
    },
    {
        "category": "Laptops",
        "productName": "Lenovo IdeaPad 1 AMD Ryzen 5 5500U 15.6\" HD Thin and Light Laptop (8GB RAM/512GB SSD/Windows 11 Home/Office Home 2024/1 Year ADP Free/Grey/1.6Kg), 82R4011MIN",
        "price": "47,611",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 13,
        "discountPercentage": "47%",
        "imageUrl": "https://m.media-amazon.com/images/I/71xHNSCyRsL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/Lenovo-MSOffice-82R400BRIN-Integrated-Graphics/dp/B09MM58Y7Q/ref=sr_1_18?dib=eyJ2IjoiMSJ9.feMkxZ5xTJkiON8FMXJYqrp_HdOi94tEniGmeKW8lweqQPcTzl_WUe1JH0x9UvjlcKOs28dZCihGoyWdt5xP73Jn41mgBtgm-rUUnBKkkVYlsO7Rr-p3rV7TT_f3OqwUnCdNb6KqpcbmtWLpLNHfAIScHSvWibhPMO4vZxDEEtJwuDG2YtafSShlnZ0xEaRKEUFkCylBpQ003PV9E5hBQ87754-EV2xse5MLUQzzdOc.ZbDsTNh_a7txexUFU5-Tp4spMWuqTdi_mdDlmvZxAj0&dib_tag=se&keywords=laptops&qid=1779860405&sr=8-18"
    },
    {
        "category": "Laptops",
        "productName": "Apple 2026 MacBook Neo 13\" Laptop with A18 Pro chip: Built for AI and Apple Intelligence, Liquid Retina Display, 8GB Unified Memory, 512GB SSD Storage, 1080p FaceTime HD Camera, Touch ID; Indigo",
        "price": "75,100",
        "rating": "4.8 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 12,
        "discountPercentage": "28%",
        "imageUrl": "https://m.media-amazon.com/images/I/61vTx-Qa1QL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/Apple-2026-MacBook-Laptop-chip/dp/B0GR6LXD6L/ref=sr_1_19?dib=eyJ2IjoiMSJ9.feMkxZ5xTJkiON8FMXJYqrp_HdOi94tEniGmeKW8lweqQPcTzl_WUe1JH0x9UvjlcKOs28dZCihGoyWdt5xP73Jn41mgBtgm-rUUnBKkkVYlsO7Rr-p3rV7TT_f3OqwUnCdNb6KqpcbmtWLpLNHfAIScHSvWibhPMO4vZxDEEtJwuDG2YtafSShlnZ0xEaRKEUFkCylBpQ003PV9E5hBQ87754-EV2xse5MLUQzzdOc.ZbDsTNh_a7txexUFU5-Tp4spMWuqTdi_mdDlmvZxAj0&dib_tag=se&keywords=laptops&qid=1779860405&sr=8-19"
    },
    {
        "category": "Laptops",
        "productName": "HP Smartchoice Victus, 13th Gen Intel Core i7-13620H, 8GB RTX 5060, 24GB DDR5(Upgradeable) 1TB SSD, 144Hz, FHD, 15.6\"/39.6cm, Win11, M365(1yr)*Office 24, Mica Silver,2.29Kg,fa2308TX, RGB Gaming Laptop",
        "price": "1,20,990",
        "rating": "4.4 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 37,
        "discountPercentage": "56%",
        "imageUrl": "https://m.media-amazon.com/images/I/71ZDvI4yXAL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/HP-i7-13620H-Upgradeable-300nits-fa2308TX/dp/B0FMYJK33B/ref=sr_1_20?dib=eyJ2IjoiMSJ9.feMkxZ5xTJkiON8FMXJYqrp_HdOi94tEniGmeKW8lweqQPcTzl_WUe1JH0x9UvjlcKOs28dZCihGoyWdt5xP73Jn41mgBtgm-rUUnBKkkVYlsO7Rr-p3rV7TT_f3OqwUnCdNb6KqpcbmtWLpLNHfAIScHSvWibhPMO4vZxDEEtJwuDG2YtafSShlnZ0xEaRKEUFkCylBpQ003PV9E5hBQ87754-EV2xse5MLUQzzdOc.ZbDsTNh_a7txexUFU5-Tp4spMWuqTdi_mdDlmvZxAj0&dib_tag=se&keywords=laptops&qid=1779860405&sr=8-20"
    },
    {
        "category": "Laptops",
        "productName": "Apple 2026 MacBook Pro Laptop with M5 Max chip with 18\u2011core CPU and 40\u2011core GPU: Built for AI, 41.05 cm (16.2\u2033) Liquid Retina XDR Display, 48GB Unified Memory, 2TB SSD Storage; Space Black",
        "price": "4,99,900",
        "rating": "4.3 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 34,
        "discountPercentage": "26%",
        "imageUrl": "https://m.media-amazon.com/images/I/61h78UMEXjL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo4OTI4MzY2NzEzNjU3NzY5OjE3Nzk4NjA0MDU6c3BfYnRmOjMwMDk4ODU2Njk0NDgzMjo6MDo6&url=%2FApple-MacBook-Laptop-18%25E2%2580%2591core-40%25E2%2580%2591core%2Fdp%2FB0GR1LB81D%2Fref%3Dsr_1_21_sspa%3Fdib%3DeyJ2IjoiMSJ9.feMkxZ5xTJkiON8FMXJYqrp_HdOi94tEniGmeKW8lweqQPcTzl_WUe1JH0x9UvjlcKOs28dZCihGoyWdt5xP73Jn41mgBtgm-rUUnBKkkVYlsO7Rr-p3rV7TT_f3OqwUnCdNb6KqpcbmtWLpLNHfAIScHSvWibhPMO4vZxDEEtJwuDG2YtafSShlnZ0xEaRKEUFkCylBpQ003PV9E5hBQ87754-EV2xse5MLUQzzdOc.ZbDsTNh_a7txexUFU5-Tp4spMWuqTdi_mdDlmvZxAj0%26dib_tag%3Dse%26keywords%3Dlaptops%26qid%3D1779860405%26sr%3D8-21-spons%26aref%3DNIOuqotfIz%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1&aref=NIOuqotfIz&sp_cr=ZAZ"
    },
    {
        "category": "Laptops",
        "productName": "HP OmniBook AMD Ryzen 5 New AI 330 Processor (24GB DDR5 Ram, 1TB SSD), Anti-Glare,15.6''/39.6cm FHD, Win11,Office24, Silver,1.7kg, FHD Camera with Shutter, Fingerprint Reador, Backlit KB fn0074AU",
        "price": "68,990",
        "rating": "5.0 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 4,
        "discountPercentage": "33%",
        "imageUrl": "https://m.media-amazon.com/images/I/71ic0yMZhTL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo4OTI4MzY2NzEzNjU3NzY5OjE3Nzk4NjA0MDU6c3BfYnRmOjMwMTA5ODEyOTA2ODMzMjo6MDo6&url=%2FHP-OmniBook-Processor-Anti-Glare-Fingerprint%2Fdp%2FB0GLGP1TNT%2Fref%3Dsr_1_22_sspa%3Fdib%3DeyJ2IjoiMSJ9.feMkxZ5xTJkiON8FMXJYqrp_HdOi94tEniGmeKW8lweqQPcTzl_WUe1JH0x9UvjlcKOs28dZCihGoyWdt5xP73Jn41mgBtgm-rUUnBKkkVYlsO7Rr-p3rV7TT_f3OqwUnCdNb6KqpcbmtWLpLNHfAIScHSvWibhPMO4vZxDEEtJwuDG2YtafSShlnZ0xEaRKEUFkCylBpQ003PV9E5hBQ87754-EV2xse5MLUQzzdOc.ZbDsTNh_a7txexUFU5-Tp4spMWuqTdi_mdDlmvZxAj0%26dib_tag%3Dse%26keywords%3Dlaptops%26qid%3D1779860405%26sr%3D8-22-spons%26aref%3DOXXgSY2J4Z%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1&aref=OXXgSY2J4Z&sp_cr=ZAZ"
    },
    {
        "category": "Shoes",
        "productName": "FUEL",
        "price": "899",
        "rating": "4.7 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "12%",
        "imageUrl": "https://m.media-amazon.com/images/I/81HX1VEm5qL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTozMDIzOTA0NTg4MDE5NzQwOjE3Nzk4NjA0Mjg6c3BfYXRmOjMwMTExMjU3MjA4MzAzMjo6MDo6&url=%2FFUEL-Knitted-Comfort-Lightweight-Navy-7UK%2Fdp%2FB0GK8Y2K9T%2Fref%3Dsr_1_1_sspa%3Fdib%3DeyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4%26dib_tag%3Dse%26keywords%3Dshoes%26qid%3D1779860428%26sr%3D8-1-spons%26aref%3DVtcPmc5YAL%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=VtcPmc5YAL&sp_cr=ZAZ"
    },
    {
        "category": "Shoes",
        "productName": "Dr.Ortho",
        "price": "1,499",
        "rating": "N/A",
        "stockStatus": "Only Few Left",
        "stockQuantity": 32,
        "discountPercentage": "34%",
        "imageUrl": "https://m.media-amazon.com/images/I/51bEl0dWuuL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTozMDIzOTA0NTg4MDE5NzQwOjE3Nzk4NjA0Mjg6c3BfYXRmOjMwMTA5NTI4Mjg3OTYzMjo6MDo6&url=%2FDr-Ortho-PAINFREE-Ease-Men-Shoes-Green-Size%2Fdp%2FB0H1JHYLTV%2Fref%3Dsr_1_2_sspa%3Fdib%3DeyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4%26dib_tag%3Dse%26keywords%3Dshoes%26qid%3D1779860428%26sr%3D8-2-spons%26aref%3Dbx6GMwwSG2%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=bx6GMwwSG2&sp_cr=ZAZ"
    },
    {
        "category": "Shoes",
        "productName": "ESPERTO",
        "price": "999",
        "rating": "N/A",
        "stockStatus": "Only Few Left",
        "stockQuantity": 32,
        "discountPercentage": "26%",
        "imageUrl": "https://m.media-amazon.com/images/I/61RgAzOZRyL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTozMDIzOTA0NTg4MDE5NzQwOjE3Nzk4NjA0Mjg6c3BfYXRmOjMwMTEwNjcyNjM3OTIzMjo6MDo6&url=%2FESPERTO-Cushioned-Craftsmanship-Elegance-Footwear%2Fdp%2FB0H1MSB84K%2Fref%3Dsr_1_3_sspa%3Fdib%3DeyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4%26dib_tag%3Dse%26keywords%3Dshoes%26qid%3D1779860428%26sr%3D8-3-spons%26aref%3DHIwYU2CQco%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=HIwYU2CQco&sp_cr=ZAZ"
    },
    {
        "category": "Shoes",
        "productName": "Crocs",
        "price": "5,995",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 30,
        "discountPercentage": "59%",
        "imageUrl": "https://m.media-amazon.com/images/I/71CwJiZoybL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTozMDIzOTA0NTg4MDE5NzQwOjE3Nzk4NjA0Mjg6c3BfYXRmOjMwMTAwNDU5OTQ5ODIzMjo6MDo6&url=%2FCrocs-Brooklyn-Platform-Sandals-Mushroom%2Fdp%2FB0C53SXQGZ%2Fref%3Dsr_1_4_sspa%3Fdib%3DeyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4%26dib_tag%3Dse%26keywords%3Dshoes%26qid%3D1779860428%26sr%3D8-4-spons%26aref%3DUsomS5dQHT%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=UsomS5dQHT&sp_cr=ZAZ"
    },
    {
        "category": "Shoes",
        "productName": "ASIAN",
        "price": "599",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 39,
        "discountPercentage": "44%",
        "imageUrl": "https://m.media-amazon.com/images/I/61utX8kBDlL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/ASIAN-Wonder-13-Sports-Running-Shoes/dp/B01N54ZM9W/ref=sr_1_5?dib=eyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4&dib_tag=se&keywords=shoes&qid=1779860428&sr=8-5"
    },
    {
        "category": "Shoes",
        "productName": "ASIAN",
        "price": "674",
        "rating": "3.8 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 1,
        "discountPercentage": "44%",
        "imageUrl": "https://m.media-amazon.com/images/I/71ivYMOzncL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/ASIAN-TARZAN-04-Sneaker-Synthetic-Lightweight/dp/B0DJD89THD/ref=sr_1_6?dib=eyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4&dib_tag=se&keywords=shoes&qid=1779860428&sr=8-6"
    },
    {
        "category": "Shoes",
        "productName": "BRUTON",
        "price": "499",
        "rating": "3.8 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 34,
        "discountPercentage": "39%",
        "imageUrl": "https://m.media-amazon.com/images/I/61VHvg7wvCL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/BRUTON-Lite-Sport-Shoes-Running/dp/B0DHGM4YTL/ref=sr_1_7?dib=eyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4&dib_tag=se&keywords=shoes&qid=1779860428&sr=8-7"
    },
    {
        "category": "Shoes",
        "productName": "HotStyle",
        "price": "299",
        "rating": "3.0 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 13,
        "discountPercentage": "32%",
        "imageUrl": "https://m.media-amazon.com/images/I/51zN65yHCEL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/HotStyle-Trendy-Stylish-Shoes-White/dp/B0F3D94P36/ref=sr_1_8?dib=eyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4&dib_tag=se&keywords=shoes&qid=1779860428&sr=8-8"
    },
    {
        "category": "Shoes",
        "productName": "Campus",
        "price": "1,139",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "63%",
        "imageUrl": "https://m.media-amazon.com/images/I/71RiFU3KvLL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Campus-First-L-Gry-Running-Shoes/dp/B08WPN4TY5/ref=sr_1_9?dib=eyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4&dib_tag=se&keywords=shoes&qid=1779860428&sr=8-9"
    },
    {
        "category": "Shoes",
        "productName": "BRUTON",
        "price": "549",
        "rating": "3.6 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 46,
        "discountPercentage": "8%",
        "imageUrl": "https://m.media-amazon.com/images/I/719uGTxwMWL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/BRUTON-Sport-Shoes-Running-White/dp/B0F4KTYFF7/ref=sr_1_10?dib=eyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4&dib_tag=se&keywords=shoes&qid=1779860428&sr=8-10"
    },
    {
        "category": "Shoes",
        "productName": "CLYMB",
        "price": "399",
        "rating": "3.9 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 13,
        "discountPercentage": "36%",
        "imageUrl": "https://m.media-amazon.com/images/I/61yuO+lqNgL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/CLYMB-Cosco-Synthetic-Lightweight-Comfortable/dp/B0G7D1TP6V/ref=sr_1_11?dib=eyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4&dib_tag=se&keywords=shoes&qid=1779860428&sr=8-11"
    },
    {
        "category": "Shoes",
        "productName": "Danner",
        "price": "87,910",
        "rating": "4.4 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 30,
        "discountPercentage": "67%",
        "imageUrl": "https://m.media-amazon.com/images/I/71HLjaFvwbL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Danner-61212-Trail-Lifestyle-Painted/dp/B08P2DB6M6/ref=sr_1_12?dib=eyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4&dib_tag=se&keywords=shoes&qid=1779860428&sr=8-12"
    },
    {
        "category": "Shoes",
        "productName": "ASIAN",
        "price": "799",
        "rating": "3.7 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 16,
        "discountPercentage": "40%",
        "imageUrl": "https://m.media-amazon.com/images/I/81R6YbNKOzL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/ASIAN-MEXICO-11-Synthetic-Lightweight-Comfortable/dp/B0DBD4JYKK/ref=sr_1_13?dib=eyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4&dib_tag=se&keywords=shoes&qid=1779860428&sr=8-13"
    },
    {
        "category": "Shoes",
        "productName": "Brooks",
        "price": "25,109",
        "rating": "5.0 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 30,
        "discountPercentage": "49%",
        "imageUrl": "https://m.media-amazon.com/images/I/71-Yx-RMJYL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Brooks-Ghost-Neutral-Running-Black/dp/B0DDF5J81V/ref=sr_1_14?dib=eyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4&dib_tag=se&keywords=shoes&qid=1779860428&sr=8-14"
    },
    {
        "category": "Shoes",
        "productName": "Campus",
        "price": "1,099",
        "rating": "4.5 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 18,
        "discountPercentage": "5%",
        "imageUrl": "https://m.media-amazon.com/images/I/61rwD5xbvoL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Campus-FEROX-White-Running-Shoes/dp/B0GY9FT3XM/ref=sr_1_15?dib=eyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4&dib_tag=se&keywords=shoes&qid=1779860428&sr=8-15"
    },
    {
        "category": "Shoes",
        "productName": "LANCER",
        "price": "599",
        "rating": "3.7 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 20,
        "discountPercentage": "30%",
        "imageUrl": "https://m.media-amazon.com/images/I/61RFlIUeaIL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Lancer-White-Sports-Running-Indus-251/dp/B081LGBPT7/ref=sr_1_16?dib=eyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4&dib_tag=se&keywords=shoes&qid=1779860428&sr=8-16"
    },
    {
        "category": "Shoes",
        "productName": "Brooks",
        "price": "40,248",
        "rating": "4.6 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 10,
        "discountPercentage": "36%",
        "imageUrl": "https://m.media-amazon.com/images/I/71LTIRFhluL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Brooks-Supportive-Running-Luminary-Yellow/dp/B0F4LW9R2C/ref=sr_1_17?dib=eyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4&dib_tag=se&keywords=shoes&qid=1779860428&sr=8-17"
    },
    {
        "category": "Shoes",
        "productName": "Bata",
        "price": "1,409",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "39%",
        "imageUrl": "https://m.media-amazon.com/images/I/514N4bUR79L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Bata-Men-Casual-Derby-Shoes/dp/B09WYDRY36/ref=sr_1_18?dib=eyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4&dib_tag=se&keywords=shoes&qid=1779860428&sr=8-18"
    },
    {
        "category": "Shoes",
        "productName": "Skechers",
        "price": "2,500",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 34,
        "discountPercentage": "20%",
        "imageUrl": "https://m.media-amazon.com/images/I/81zlutgZlzL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Skechers-Black-Mens-Casual-Shoes-232057ID-BBK-SUMMITS-Brisbane-UK9/dp/B09XXR4TXK/ref=sr_1_19?dib=eyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4&dib_tag=se&keywords=shoes&qid=1779860428&sr=8-19"
    },
    {
        "category": "Shoes",
        "productName": "Nike",
        "price": "2,956",
        "rating": "4.3 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 38,
        "discountPercentage": "41%",
        "imageUrl": "https://m.media-amazon.com/images/I/6153ielYw4L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Nike-Revolution-White-Platinum-White-Running/dp/B0CL8K38BQ/ref=sr_1_20?dib=eyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4&dib_tag=se&keywords=shoes&qid=1779860428&sr=8-20"
    },
    {
        "category": "Shoes",
        "productName": "FUEL",
        "price": "599",
        "rating": "N/A",
        "stockStatus": "Limited Stock",
        "stockQuantity": 5,
        "discountPercentage": "31%",
        "imageUrl": "https://m.media-amazon.com/images/I/71cQJlAjHiL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTozMDIzOTA0NTg4MDE5NzQwOjE3Nzk4NjA0Mjg6c3BfbXRmOjMwMTExMjQwNTkwMjQzMjo6MDo6&url=%2FFUEL-Sneaks-Mens-Sneakers-Stylish%2Fdp%2FB0FGDMDQN6%2Fref%3Dsr_1_21_sspa%3Fdib%3DeyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4%26dib_tag%3Dse%26keywords%3Dshoes%26qid%3D1779860428%26sr%3D8-21-spons%26aref%3Dmk2upn7vK9%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1&aref=mk2upn7vK9&sp_cr=ZAZ"
    },
    {
        "category": "Shoes",
        "productName": "Big Fox",
        "price": "999",
        "rating": "3.9 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 41,
        "discountPercentage": "33%",
        "imageUrl": "https://m.media-amazon.com/images/I/31ZqrOso6GL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTozMDIzOTA0NTg4MDE5NzQwOjE3Nzk4NjA0Mjg6c3BfbXRmOjMwMTEwNzc5MjQ2MzQzMjo6MDo6&url=%2FBig-Fox-Yas-2-Sneakers-White%2Fdp%2FB0C74JC83L%2Fref%3Dsr_1_22_sspa%3Fdib%3DeyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4%26dib_tag%3Dse%26keywords%3Dshoes%26qid%3D1779860428%26sr%3D8-22-spons%26aref%3DOhbZsSjyXv%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1&aref=OhbZsSjyXv&sp_cr=ZAZ"
    },
    {
        "category": "Shoes",
        "productName": "FUEL",
        "price": "749",
        "rating": "N/A",
        "stockStatus": "Only Few Left",
        "stockQuantity": 37,
        "discountPercentage": "17%",
        "imageUrl": "https://m.media-amazon.com/images/I/81M+qYwbnjL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTozMDIzOTA0NTg4MDE5NzQwOjE3Nzk4NjA0Mjg6c3BfbXRmOjMwMTExMjU4MTA1MTIzMjo6MDo6&url=%2FFUEL-Lacy-Lightweight-Comfortable-Mauve-7UK%2Fdp%2FB0GK13KWWB%2Fref%3Dsr_1_23_sspa%3Fdib%3DeyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4%26dib_tag%3Dse%26keywords%3Dshoes%26qid%3D1779860428%26sr%3D8-23-spons%26aref%3DS9v4gdIhlA%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1&aref=S9v4gdIhlA&sp_cr=ZAZ"
    },
    {
        "category": "Shoes",
        "productName": "Boldfit",
        "price": "1,109",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 7,
        "discountPercentage": "30%",
        "imageUrl": "https://m.media-amazon.com/images/I/51DZP83wBFL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTozMDIzOTA0NTg4MDE5NzQwOjE3Nzk4NjA0Mjg6c3BfbXRmOjMwMDU4MjIxMTAxNTczMjo6MDo6&url=%2FBoldfit-Sneakers-Lightweight-Comfortable-Whitegreen%2Fdp%2FB0F949QQV2%2Fref%3Dsr_1_24_sspa%3Fdib%3DeyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4%26dib_tag%3Dse%26keywords%3Dshoes%26qid%3D1779860428%26sr%3D8-24-spons%26aref%3DeS2C8mnBSF%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1&aref=eS2C8mnBSF&sp_cr=ZAZ"
    },
    {
        "category": "Shoes",
        "productName": "ASICS",
        "price": "15,299",
        "rating": "4.7 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "9%",
        "imageUrl": "https://m.media-amazon.com/images/I/618Fa5n1UdL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/ASICS-Gel-Nimbus-Twilight-Running-Shoes/dp/B0G2MP2HCC/ref=sr_1_25?dib=eyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4&dib_tag=se&keywords=shoes&qid=1779860428&sr=8-25"
    },
    {
        "category": "Shoes",
        "productName": "PUMA",
        "price": "23,999",
        "rating": "1.0 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 39,
        "discountPercentage": "29%",
        "imageUrl": "https://m.media-amazon.com/images/I/51ufOaJ-NJL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Fast-R-NitroTM-Elite-Running-Water-Lemon/dp/B0GPW4PFX6/ref=sr_1_26?dib=eyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4&dib_tag=se&keywords=shoes&qid=1779860428&sr=8-26"
    },
    {
        "category": "Shoes",
        "productName": "PUMA",
        "price": "1,549",
        "rating": "3.9 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 32,
        "discountPercentage": "66%",
        "imageUrl": "https://m.media-amazon.com/images/I/51GOpp8rAJL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Puma-Dazzler-Black-Puma-Silver-Sneaker/dp/B09RFYKC8D/ref=sr_1_27?dib=eyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4&dib_tag=se&keywords=shoes&qid=1779860428&sr=8-27"
    },
    {
        "category": "Shoes",
        "productName": "Nike",
        "price": "7,095",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 39,
        "discountPercentage": "19%",
        "imageUrl": "https://m.media-amazon.com/images/I/61esHSbkjSL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Nike-Quest-White-Black-White-Topaz-Running/dp/B0G4N1JZGG/ref=sr_1_28?dib=eyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4&dib_tag=se&keywords=shoes&qid=1779860428&sr=8-28"
    },
    {
        "category": "Shoes",
        "productName": "Jordan",
        "price": "30,573",
        "rating": "5.0 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 49,
        "discountPercentage": "21%",
        "imageUrl": "https://m.media-amazon.com/images/I/61n43LPaK8L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Jordan-Retro-Grade-School-Black-green/dp/B0D2MTHGC2/ref=sr_1_29?dib=eyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4&dib_tag=se&keywords=shoes&qid=1779860428&sr=8-29"
    },
    {
        "category": "Shoes",
        "productName": "Brooks",
        "price": "52,832",
        "rating": "4.6 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 14,
        "discountPercentage": "18%",
        "imageUrl": "https://m.media-amazon.com/images/I/71-gHDhNQ+L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Brooks-Glycerin-Neutral-Running-Walking/dp/B0DP2WL1W1/ref=sr_1_30?dib=eyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4&dib_tag=se&keywords=shoes&qid=1779860428&sr=8-30"
    },
    {
        "category": "Shoes",
        "productName": "ALTRA",
        "price": "64,866",
        "rating": "4.4 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 28,
        "discountPercentage": "64%",
        "imageUrl": "https://m.media-amazon.com/images/I/41DJvknEyiL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/ALTRA-AL0A4VQL-Rivera-Running-Black/dp/B08RCLMT2J/ref=sr_1_31?dib=eyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4&dib_tag=se&keywords=shoes&qid=1779860428&sr=8-31"
    },
    {
        "category": "Shoes",
        "productName": "Brooks",
        "price": "38,506",
        "rating": "4.5 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 49,
        "discountPercentage": "15%",
        "imageUrl": "https://m.media-amazon.com/images/I/81MJU+-9m6L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Brooks-Levitate-Supportive-Running-Black/dp/B08LQWMKMD/ref=sr_1_32?dib=eyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4&dib_tag=se&keywords=shoes&qid=1779860428&sr=8-32"
    },
    {
        "category": "Shoes",
        "productName": "Reebok",
        "price": "1,499",
        "rating": "3.8 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "61%",
        "imageUrl": "https://m.media-amazon.com/images/I/71hi7j5ta3L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Reebok-Stride-Runner-Running-Shoes/dp/B09SHTBKK4/ref=sr_1_33?dib=eyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4&dib_tag=se&keywords=shoes&qid=1779860428&sr=8-33"
    },
    {
        "category": "Shoes",
        "productName": "Bata",
        "price": "449",
        "rating": "3.7 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 43,
        "discountPercentage": "58%",
        "imageUrl": "https://m.media-amazon.com/images/I/51zA3Xl-12L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Bata-Men-Casuals-Slipon-Shoes/dp/B00SWEF51A/ref=sr_1_34?dib=eyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4&dib_tag=se&keywords=shoes&qid=1779860428&sr=8-34"
    },
    {
        "category": "Shoes",
        "productName": "Campus",
        "price": "729",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 10,
        "discountPercentage": "16%",
        "imageUrl": "https://m.media-amazon.com/images/I/91hmsGm-jYL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Campus-OXYFIT-D-Gry-Walking-Shoes/dp/B09RPF9D6S/ref=sr_1_35?dib=eyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4&dib_tag=se&keywords=shoes&qid=1779860428&sr=8-35"
    },
    {
        "category": "Shoes",
        "productName": "Campus",
        "price": "899",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 15,
        "discountPercentage": "36%",
        "imageUrl": "https://m.media-amazon.com/images/I/61XwYMOyfwL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Campus-Wells-Running-Shoes-10-UK/dp/B08VGP9PB7/ref=sr_1_36?dib=eyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4&dib_tag=se&keywords=shoes&qid=1779860428&sr=8-36"
    },
    {
        "category": "Shoes",
        "productName": "ASICS",
        "price": "26,936",
        "rating": "4.5 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 6,
        "discountPercentage": "21%",
        "imageUrl": "https://m.media-amazon.com/images/I/51CpOvI6sHL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/ASICS-Gel-Nimbus-Running-Shoes-White/dp/B0D82FWS1Z/ref=sr_1_37?dib=eyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4&dib_tag=se&keywords=shoes&qid=1779860428&sr=8-37"
    },
    {
        "category": "Shoes",
        "productName": "Campus",
        "price": "1,169",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 42,
        "discountPercentage": "24%",
        "imageUrl": "https://m.media-amazon.com/images/I/61rWcMP4s9L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Campus-First-B-ORG-Running-Shoes/dp/B0915349Y4/ref=sr_1_38?dib=eyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4&dib_tag=se&keywords=shoes&qid=1779860428&sr=8-38"
    },
    {
        "category": "Shoes",
        "productName": "new balance",
        "price": "32,311",
        "rating": "4.5 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "27%",
        "imageUrl": "https://m.media-amazon.com/images/I/51OLS5S9BPL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Balance-Fresh-Running-Vintage-Indigo/dp/B0D2BRXPQS/ref=sr_1_39?dib=eyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4&dib_tag=se&keywords=shoes&qid=1779860428&sr=8-39"
    },
    {
        "category": "Shoes",
        "productName": "Skechers",
        "price": "8,999",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 40,
        "discountPercentage": "13%",
        "imageUrl": "https://m.media-amazon.com/images/I/71uS6VwQgTL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Skechers-Supersonic-Black-Running-Shoes/dp/B0F36RHXKD/ref=sr_1_40?dib=eyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4&dib_tag=se&keywords=shoes&qid=1779860428&sr=8-40"
    },
    {
        "category": "Shoes",
        "productName": "Campus",
        "price": "729",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 2,
        "discountPercentage": "49%",
        "imageUrl": "https://m.media-amazon.com/images/I/7198NljaZlL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Campus-OXYFIT-Walking-Shoes-India/dp/B09RPVZK5S/ref=sr_1_41?dib=eyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4&dib_tag=se&keywords=shoes&qid=1779860428&sr=8-41"
    },
    {
        "category": "Shoes",
        "productName": "ASICS",
        "price": "2,498",
        "rating": "4.9 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 1,
        "discountPercentage": "34%",
        "imageUrl": "https://m.media-amazon.com/images/I/61a9axWGPxL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/ASICS-Gel-Contend-Twilight-Cobalt-Running/dp/B0G4HC1V33/ref=sr_1_42?dib=eyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4&dib_tag=se&keywords=shoes&qid=1779860428&sr=8-42"
    },
    {
        "category": "Shoes",
        "productName": "U.S. Polo Assn.",
        "price": "2,219",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 37,
        "discountPercentage": "67%",
        "imageUrl": "https://m.media-amazon.com/images/I/51o0bF4AotL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/U-S-Polo-Assn-Sneakers-Beige/dp/B0FG2K247F/ref=sr_1_43?dib=eyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4&dib_tag=se&keywords=shoes&qid=1779860428&sr=8-43"
    },
    {
        "category": "Shoes",
        "productName": "Campus",
        "price": "729",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 27,
        "discountPercentage": "20%",
        "imageUrl": "https://m.media-amazon.com/images/I/61xIgcDynvL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Campus-OXYFIT-Walking-Shoes-India/dp/B09RPCVBKY/ref=sr_1_44?dib=eyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4&dib_tag=se&keywords=shoes&qid=1779860428&sr=8-44"
    },
    {
        "category": "Shoes",
        "productName": "Reebok",
        "price": "3,239",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 41,
        "discountPercentage": "33%",
        "imageUrl": "https://m.media-amazon.com/images/I/71tgEJzHw4L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Reebok-Zig-Titanica-Lite-Running/dp/B0FL78CHLN/ref=sr_1_45?dib=eyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4&dib_tag=se&keywords=shoes&qid=1779860428&sr=8-45"
    },
    {
        "category": "Shoes",
        "productName": "Scarpa",
        "price": "75,463",
        "rating": "5.0 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "9%",
        "imageUrl": "https://m.media-amazon.com/images/I/71nH73i3ZQL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/SCARPA-Kinesis-Waterproof-Gore-Tex-Backpacking/dp/B005LCOVCK/ref=sr_1_46?dib=eyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4&dib_tag=se&keywords=shoes&qid=1779860428&sr=8-46"
    },
    {
        "category": "Shoes",
        "productName": "Bacca Bucci",
        "price": "1,699",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "45%",
        "imageUrl": "https://m.media-amazon.com/images/I/51GQ+bkB3NL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Bacca-Bucci-Cappuccino-Skystompers-High-Top/dp/B0D8WG88P6/ref=sr_1_47?dib=eyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4&dib_tag=se&keywords=shoes&qid=1779860428&sr=8-47"
    },
    {
        "category": "Shoes",
        "productName": "Scarpa",
        "price": "45,030",
        "rating": "4.6 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 29,
        "discountPercentage": "5%",
        "imageUrl": "https://m.media-amazon.com/images/I/618SHFGKZwL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/SCARPA-Instinct-Rock-Climbing-Shoe/dp/B07G817KX6/ref=sr_1_48?dib=eyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4&dib_tag=se&keywords=shoes&qid=1779860428&sr=8-48"
    },
    {
        "category": "Shoes",
        "productName": "Fizik",
        "price": "68,729",
        "rating": "4.3 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "13%",
        "imageUrl": "https://m.media-amazon.com/images/I/41YTCyOEvBL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Fizik-Terra-Atlas-Unisex-Cycling/dp/B09WVKH6KS/ref=sr_1_49?dib=eyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4&dib_tag=se&keywords=shoes&qid=1779860428&sr=8-49"
    },
    {
        "category": "Shoes",
        "productName": "Bacca Bucci",
        "price": "1,599",
        "rating": "3.8 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 44,
        "discountPercentage": "42%",
        "imageUrl": "https://m.media-amazon.com/images/I/71biQP-kH1L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Bacca-Everyday-Training-Abrasion-Sockliner/dp/B0BSHL93K2/ref=sr_1_50?dib=eyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4&dib_tag=se&keywords=shoes&qid=1779860428&sr=8-50"
    },
    {
        "category": "Shoes",
        "productName": "Reebok",
        "price": "3,499",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 32,
        "discountPercentage": "30%",
        "imageUrl": "https://m.media-amazon.com/images/I/41ifV6nKBLL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Reebok-Zig-Dynamica-Lite-Running/dp/B0GS4RC93B/ref=sr_1_51?dib=eyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4&dib_tag=se&keywords=shoes&qid=1779860428&sr=8-51"
    },
    {
        "category": "Shoes",
        "productName": "Nike",
        "price": "2,247",
        "rating": "N/A",
        "stockStatus": "Limited Stock",
        "stockQuantity": 11,
        "discountPercentage": "68%",
        "imageUrl": "https://m.media-amazon.com/images/I/61Bf8P8VQXL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Nike-Unisex-Armory-Black-White-Running/dp/B0GSR79RJ8/ref=sr_1_52?dib=eyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4&dib_tag=se&keywords=shoes&qid=1779860428&sr=8-52"
    },
    {
        "category": "Shoes",
        "productName": "Alpinestars",
        "price": "52,477",
        "rating": "3.7 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "41%",
        "imageUrl": "https://m.media-amazon.com/images/I/81kd2Gf-yAL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Alpinestars-Speedforce-Shoes-BLACK-WHITE/dp/B08WJN8RL6/ref=sr_1_53?dib=eyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4&dib_tag=se&keywords=shoes&qid=1779860428&sr=8-53"
    },
    {
        "category": "Shoes",
        "productName": "Woodland",
        "price": "3,199",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 21,
        "discountPercentage": "52%",
        "imageUrl": "https://m.media-amazon.com/images/I/712G14JiUhL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Woodland-Casual-Shoes-7-OSNK-6212024/dp/B0DNK3FKDF/ref=sr_1_54?dib=eyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4&dib_tag=se&keywords=shoes&qid=1779860428&sr=8-54"
    },
    {
        "category": "Shoes",
        "productName": "Campus",
        "price": "999",
        "rating": "4.4 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 4,
        "discountPercentage": "37%",
        "imageUrl": "https://m.media-amazon.com/images/I/61U9jZL5Z+L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Campus-Mens-Revolt-Sneakers-Off/dp/B0DYXVK62J/ref=sr_1_55?dib=eyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4&dib_tag=se&keywords=shoes&qid=1779860428&sr=8-55"
    },
    {
        "category": "Shoes",
        "productName": "adidas",
        "price": "1,729",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "6%",
        "imageUrl": "https://m.media-amazon.com/images/I/71sfbi31lhL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Adidas-Mens-Clinch-X-Running-Black/dp/B08FZSY61B/ref=sr_1_56?dib=eyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4&dib_tag=se&keywords=shoes&qid=1779860428&sr=8-56"
    },
    {
        "category": "Shoes",
        "productName": "FUEL",
        "price": "699",
        "rating": "N/A",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "68%",
        "imageUrl": "https://m.media-amazon.com/images/I/81nVuNC7raL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTozMDIzOTA0NTg4MDE5NzQwOjE3Nzk4NjA0Mjg6c3BfYnRmOjMwMTExMjQ4Mzc0MDAzMjo6MDo6&url=%2FFUEL-Sparkle-Lightweight-Comfortable-Lavender-4UK%2Fdp%2FB0GK1C7677%2Fref%3Dsr_1_57_sspa%3Fdib%3DeyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4%26dib_tag%3Dse%26keywords%3Dshoes%26qid%3D1779860428%26sr%3D8-57-spons%26aref%3DP8wostsvVH%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1&aref=P8wostsvVH&sp_cr=ZAZ"
    },
    {
        "category": "Shoes",
        "productName": "Red Chief",
        "price": "1,748",
        "rating": "3.8 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 20,
        "discountPercentage": "50%",
        "imageUrl": "https://m.media-amazon.com/images/I/714CMcZ8j7L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTozMDIzOTA0NTg4MDE5NzQwOjE3Nzk4NjA0Mjg6c3BfYnRmOjMwMDYyMjcyNzA5NDgzMjo6MDo6&url=%2FRed-Chief-Shoes-8-RC3429-022%2Fdp%2FB071WXHYKB%2Fref%3Dsr_1_58_sspa%3Fdib%3DeyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4%26dib_tag%3Dse%26keywords%3Dshoes%26qid%3D1779860428%26sr%3D8-58-spons%26aref%3D9osot63tYO%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1&aref=9osot63tYO&sp_cr=ZAZ"
    },
    {
        "category": "Shoes",
        "productName": "Boldfit",
        "price": "1,599",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 17,
        "discountPercentage": "34%",
        "imageUrl": "https://m.media-amazon.com/images/I/61TWEg3pXpL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTozMDIzOTA0NTg4MDE5NzQwOjE3Nzk4NjA0Mjg6c3BfYnRmOjMwMDg4NzE3ODYyMjczMjo6MDo6&url=%2FBoldfit-Sneakers-Lightweight-Comfortable-DripBloc%2Fdp%2FB0FYQD4JVX%2Fref%3Dsr_1_59_sspa%3Fdib%3DeyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4%26dib_tag%3Dse%26keywords%3Dshoes%26qid%3D1779860428%26sr%3D8-59-spons%26aref%3DpjVbl9hLSS%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1&aref=pjVbl9hLSS&sp_cr=ZAZ"
    },
    {
        "category": "Shoes",
        "productName": "Bacca Bucci",
        "price": "999",
        "rating": "3.8 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 17,
        "discountPercentage": "5%",
        "imageUrl": "https://m.media-amazon.com/images/I/6157WaPyAyL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTozMDIzOTA0NTg4MDE5NzQwOjE3Nzk4NjA0Mjg6c3BfYnRmOjMwMDgzNzgwNzA2NDUzMjo6MDo6&url=%2FBacca-Afterburn-Disruptor-Multiple-Sneakers-White%2Fdp%2FB07S7MTB5G%2Fref%3Dsr_1_60_sspa%3Fdib%3DeyJ2IjoiMSJ9.qrfm8PM9BO3zJIwo7gO-qb0EBZlcwKOTHPy2OYYKQJNIwcMKJqodSnJggirYg8wri4fEZzigsMBNwet66l8gnoRyWS1y32_IvmPR75gzuTqMRM9Qgf3Vt9l8c4nLANC7bHMsvucIoaGVUrUKyKrsHv4JkX0z8bJ1Xnw1xlSDuMAyH-ENCfouvVKV-23YhvfERCbPiBKdGgoo8aMnf4cUbFCAUTrtUEGvY_JL_qB4q_XFClLovsyV7TfwodSFoBV5ZLcvC4E2h3kWFWvfJOQe0_G2tpSc8tXwhR2xRnepJpU._qlKxrmkGjYmW0yGEnpU3lgo7H1egXyTeU9iszI6rm4%26dib_tag%3Dse%26keywords%3Dshoes%26qid%3D1779860428%26sr%3D8-60-spons%26aref%3DoS8fT6g3NA%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1&aref=oS8fT6g3NA&sp_cr=ZAZ"
    },
    {
        "category": "Watches",
        "productName": "Spigen",
        "price": "999",
        "rating": "3.9 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 37,
        "discountPercentage": "24%",
        "imageUrl": "https://m.media-amazon.com/images/I/61D-dPGMlgL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo4MDE0NTUxNzgwODk2NjQyOjE3Nzk4NjA0NTQ6c3BfYXRmOjMwMDYyMjc4MDg2MTIzMjo6MDo6&url=%2FSpigen-Designed-Samsung-Flexible-Lightweight%2Fdp%2FB0D52KPZ96%2Fref%3Dsr_1_1_sspa%3Fdib%3DeyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs%26dib_tag%3Dse%26keywords%3Dwatches%26qid%3D1779860454%26sr%3D8-1-spons%26aref%3DbfrJFCxcDB%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=bfrJFCxcDB&sp_cr=ZAZ"
    },
    {
        "category": "Watches",
        "productName": "TSAR BOMBA",
        "price": "1,19,565",
        "rating": "5.0 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "48%",
        "imageUrl": "https://m.media-amazon.com/images/I/71ZNJAd1UoL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo4MDE0NTUxNzgwODk2NjQyOjE3Nzk4NjA0NTQ6c3BfYXRmOjMwMDk0ODk2MzU0MDczMjo6MDo6&url=%2FMatter-Skeleton-Interchangeable-Automatic-TB8601-03%2Fdp%2FB0GJ4M1VTB%2Fref%3Dsr_1_2_sspa%3Fdib%3DeyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs%26dib_tag%3Dse%26keywords%3Dwatches%26qid%3D1779860454%26sr%3D8-2-spons%26aref%3D6IXrWaGtk0%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=6IXrWaGtk0&sp_cr=ZAZ"
    },
    {
        "category": "Watches",
        "productName": "TSAR BOMBA",
        "price": "64,759",
        "rating": "4.5 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 39,
        "discountPercentage": "63%",
        "imageUrl": "https://m.media-amazon.com/images/I/71xll+-SZSL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo4MDE0NTUxNzgwODk2NjQyOjE3Nzk4NjA0NTQ6c3BfYXRmOjMwMDk0ODk2MzU0MTYzMjo6MDo6&url=%2FTSAR-BOMBA-Interchangeable-Automatic-Waterproof%2Fdp%2FB0CPFRVF1L%2Fref%3Dsr_1_3_sspa%3Fdib%3DeyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs%26dib_tag%3Dse%26keywords%3Dwatches%26qid%3D1779860454%26sr%3D8-3-spons%26aref%3DvcGZlQnHrt%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=vcGZlQnHrt&sp_cr=ZAZ"
    },
    {
        "category": "Watches",
        "productName": "TSAR BOMBA",
        "price": "21,915",
        "rating": "N/A",
        "stockStatus": "Limited Stock",
        "stockQuantity": 9,
        "discountPercentage": "31%",
        "imageUrl": "https://m.media-amazon.com/images/I/71Dt8wfgCHL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo4MDE0NTUxNzgwODk2NjQyOjE3Nzk4NjA0NTQ6c3BfYXRmOjMwMDk0ODk2MzUzOTczMjo6MDo6&url=%2FTsar-Bomba-Tonneau-Luxury-Watch%2Fdp%2FB0GHWY44HJ%2Fref%3Dsr_1_4_sspa%3Fdib%3DeyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs%26dib_tag%3Dse%26keywords%3Dwatches%26qid%3D1779860454%26sr%3D8-4-spons%26aref%3D46SkBse0Om%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=46SkBse0Om&sp_cr=ZAZ"
    },
    {
        "category": "Watches",
        "productName": "AMERICANVIBER",
        "price": "300",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 49,
        "discountPercentage": "19%",
        "imageUrl": "https://m.media-amazon.com/images/I/71IVibsCYYL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/AMERICANVIBER-Silver-Stainless-Water-Resistant-Wristwatch/dp/B0FPBGQ125/ref=sr_1_5?dib=eyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs&dib_tag=se&keywords=watches&qid=1779860454&sr=8-5"
    },
    {
        "category": "Watches",
        "productName": "amazon basics",
        "price": "489",
        "rating": "4.4 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 26,
        "discountPercentage": "44%",
        "imageUrl": "https://m.media-amazon.com/images/I/8162qBrd6ML._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Amazon-Basics-Leather-Organiser-Transparent/dp/B0DZ2YY9NC/ref=sr_1_6?dib=eyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs&dib_tag=se&keywords=watches&qid=1779860454&sr=8-6"
    },
    {
        "category": "Watches",
        "productName": "Casio",
        "price": "1,166",
        "rating": "4.5 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "37%",
        "imageUrl": "https://m.media-amazon.com/images/I/51oNy5CTCOL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Casio-Vintage-Digital-Black-Watch/dp/B00HFPIIOI/ref=sr_1_7?dib=eyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs&dib_tag=se&keywords=watches&qid=1779860454&sr=8-7"
    },
    {
        "category": "Watches",
        "productName": "Fastrack",
        "price": "895",
        "rating": "4.3 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 13,
        "discountPercentage": "42%",
        "imageUrl": "https://m.media-amazon.com/images/I/41dannBuneL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Fastrack-Tees-Analog-Unisex-Adult-Watch-68011PP08/dp/B099WR4WHC/ref=sr_1_8?dib=eyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs&dib_tag=se&keywords=watches&qid=1779860454&sr=8-8"
    },
    {
        "category": "Watches",
        "productName": "Casio",
        "price": "1,894",
        "rating": "4.4 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "49%",
        "imageUrl": "https://m.media-amazon.com/images/I/61ybeKQto8L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Casio-Vintage-Digital-Grey-Watch-A158WA-1Q/dp/B000GAYQJ0/ref=sr_1_9?dib=eyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs&dib_tag=se&keywords=watches&qid=1779860454&sr=8-9"
    },
    {
        "category": "Watches",
        "productName": "Acnos",
        "price": "425",
        "rating": "3.9 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 7,
        "discountPercentage": "27%",
        "imageUrl": "https://m.media-amazon.com/images/I/71Yn8LR6ZfL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Acnos-Special-Quality-Watches-Handsome/dp/B085FTWD9Q/ref=sr_1_10?dib=eyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs&dib_tag=se&keywords=watches&qid=1779860454&sr=8-10"
    },
    {
        "category": "Watches",
        "productName": "TIMEX",
        "price": "1,099",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 1,
        "discountPercentage": "32%",
        "imageUrl": "https://m.media-amazon.com/images/I/71Kx6rgmlRS._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/TIMEX-Leather-Tw00Zr262E-Color-Brown-Color-Blue/dp/B07H3K85H5/ref=sr_1_11?dib=eyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs&dib_tag=se&keywords=watches&qid=1779860454&sr=8-11"
    },
    {
        "category": "Watches",
        "productName": "Titan",
        "price": "1,994",
        "rating": "4.4 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 26,
        "discountPercentage": "40%",
        "imageUrl": "https://m.media-amazon.com/images/I/51ykbSj-eoL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Titan-Karishma-Stainless-Watch-NL1639SM02-NN1639SM02/dp/B00ISNVQMW/ref=sr_1_12?dib=eyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs&dib_tag=se&keywords=watches&qid=1779860454&sr=8-12"
    },
    {
        "category": "Watches",
        "productName": "Daniel Hechter",
        "price": "2,799",
        "rating": "4.4 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "37%",
        "imageUrl": "https://m.media-amazon.com/images/I/71Ozj5O+fEL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Daniel-Hechter-Analogue-Black-Watch-DHM1001-01/dp/B0DZTMMSY2/ref=sr_1_13?dib=eyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs&dib_tag=se&keywords=watches&qid=1779860454&sr=8-13"
    },
    {
        "category": "Watches",
        "productName": "Bouncefit",
        "price": "396",
        "rating": "3.6 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 22,
        "discountPercentage": "9%",
        "imageUrl": "https://m.media-amazon.com/images/I/61kjHG3wqrL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/D116-Fitness-Smart-Watch-Women/dp/B0D45BT2S2/ref=sr_1_14?dib=eyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs&dib_tag=se&keywords=watches&qid=1779860454&sr=8-14"
    },
    {
        "category": "Watches",
        "productName": "Samsung",
        "price": "31,499",
        "rating": "4.3 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 6,
        "discountPercentage": "24%",
        "imageUrl": "https://m.media-amazon.com/images/I/71ghIjt24fL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Samsung-Processor-Stainless-Monitoring-Anti-oxidant/dp/B0FDQKTFWY/ref=sr_1_15?dib=eyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs&dib_tag=se&keywords=watches&qid=1779860454&sr=8-15"
    },
    {
        "category": "Watches",
        "productName": "Fire-Boltt",
        "price": "1,299",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 35,
        "discountPercentage": "62%",
        "imageUrl": "https://m.media-amazon.com/images/I/61IGSSfF-JL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Fire%E2%80%91Boltt-Bluetooth-Assistant-Rotating-Waterproof/dp/B0CMF25TKG/ref=sr_1_16?dib=eyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs&dib_tag=se&keywords=watches&qid=1779860454&sr=8-16"
    },
    {
        "category": "Watches",
        "productName": "Casio",
        "price": "3,995",
        "rating": "4.5 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "67%",
        "imageUrl": "https://m.media-amazon.com/images/I/61XeQ6jAVqL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Casio-Enticer-Analog-Green-MTP-1302PD-3AVEF/dp/B0BRP4LVN2/ref=sr_1_17?dib=eyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs&dib_tag=se&keywords=watches&qid=1779860454&sr=8-17"
    },
    {
        "category": "Watches",
        "productName": "Mathey-Tissot",
        "price": "75,330",
        "rating": "N/A",
        "stockStatus": "Only Few Left",
        "stockQuantity": 42,
        "discountPercentage": "36%",
        "imageUrl": "https://m.media-amazon.com/images/I/71pYa2NNc6L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Mathy-Tissot-Siwss-Mathy-Heart-Quartz/dp/B0GH1NFDV7/ref=sr_1_18?dib=eyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs&dib_tag=se&keywords=watches&qid=1779860454&sr=8-18"
    },
    {
        "category": "Watches",
        "productName": "Noise",
        "price": "1,599",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "19%",
        "imageUrl": "https://m.media-amazon.com/images/I/61-vRq2ulOL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Noise-Launched-Bluetooth-Calling-Tracking/dp/B0BJ72WZQ7/ref=sr_1_19?dib=eyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs&dib_tag=se&keywords=watches&qid=1779860454&sr=8-19"
    },
    {
        "category": "Watches",
        "productName": "Fire-Boltt",
        "price": "1,099",
        "rating": "3.7 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 19,
        "discountPercentage": "15%",
        "imageUrl": "https://m.media-amazon.com/images/I/717+Bu7jtLL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Fire-Boltt-Stainless-Bluetooth-Assistant-Monitoring/dp/B0DTB2VQFZ/ref=sr_1_20?dib=eyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs&dib_tag=se&keywords=watches&qid=1779860454&sr=8-20"
    },
    {
        "category": "Watches",
        "productName": "D1 Milano",
        "price": "15,300",
        "rating": "3.2 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 46,
        "discountPercentage": "16%",
        "imageUrl": "https://m.media-amazon.com/images/I/61vm3pfy9-L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo4MDE0NTUxNzgwODk2NjQyOjE3Nzk4NjA0NTQ6c3BfbXRmOjMwMTA3NDA3MDcyOTgzMjo6MDo6&url=%2FD1-Milano-Polycarbon-Analog-Watch-PCBJ10%2Fdp%2FB07WX832RC%2Fref%3Dsr_1_21_sspa%3Fdib%3DeyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs%26dib_tag%3Dse%26keywords%3Dwatches%26qid%3D1779860454%26sr%3D8-21-spons%26aref%3DjkizEzLzjS%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1&aref=jkizEzLzjS&sp_cr=ZAZ"
    },
    {
        "category": "Watches",
        "productName": "DKNY",
        "price": "16,499",
        "rating": "N/A",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "49%",
        "imageUrl": "https://m.media-amazon.com/images/I/71FVWW0eIML._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo4MDE0NTUxNzgwODk2NjQyOjE3Nzk4NjA0NTQ6c3BfbXRmOjMwMTA5NTY0MDc2OTgzMjo6MDo6&url=%2FDKNY-Multifunction-Japanese-Movement-Resistance%2Fdp%2FB0FW52N6VT%2Fref%3Dsr_1_22_sspa%3Fdib%3DeyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs%26dib_tag%3Dse%26keywords%3Dwatches%26qid%3D1779860454%26sr%3D8-22-spons%26aref%3DOKOZ3Tppmp%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1&aref=OKOZ3Tppmp&sp_cr=ZAZ"
    },
    {
        "category": "Watches",
        "productName": "BRUNO MILANO",
        "price": "2,623",
        "rating": "4.5 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 5,
        "discountPercentage": "53%",
        "imageUrl": "https://m.media-amazon.com/images/I/81jPqyGlBCL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo4MDE0NTUxNzgwODk2NjQyOjE3Nzk4NjA0NTQ6c3BfbXRmOjMwMTExNDIxMzg2NzQzMjo6MDo6&url=%2FBRUNO-MILANO-Fashion-Forward-Shimmering%2Fdp%2FB0GGQDCLJS%2Fref%3Dsr_1_23_sspa%3Fdib%3DeyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs%26dib_tag%3Dse%26keywords%3Dwatches%26qid%3D1779860454%26sr%3D8-23-spons%26aref%3DnMeOeQmToJ%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1&aref=nMeOeQmToJ&sp_cr=ZAZ"
    },
    {
        "category": "Watches",
        "productName": "SANDOZ",
        "price": "62,000",
        "rating": "N/A",
        "stockStatus": "Limited Stock",
        "stockQuantity": 39,
        "discountPercentage": "41%",
        "imageUrl": "https://m.media-amazon.com/images/I/51I3GuGXavL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo4MDE0NTUxNzgwODk2NjQyOjE3Nzk4NjA0NTQ6c3BfbXRmOjMwMDk5ODQ5MDI2OTIzMjo6MDo6&url=%2FSandoz-Chanet-Premium-Translucent-Automatic%2Fdp%2FB0G5N4BY25%2Fref%3Dsr_1_24_sspa%3Fdib%3DeyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs%26dib_tag%3Dse%26keywords%3Dwatches%26qid%3D1779860454%26sr%3D8-24-spons%26aref%3DD0xEKuYsnF%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1&aref=D0xEKuYsnF&sp_cr=ZAZ"
    },
    {
        "category": "Watches",
        "productName": "Fire-Boltt",
        "price": "1,899",
        "rating": "3.8 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "19%",
        "imageUrl": "https://m.media-amazon.com/images/I/71gdP7CfeiL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Fire-Boltt-Bluetooth-Rotating-Waterproof-Smartwatch/dp/B0FP2H4K27/ref=sr_1_25?dib=eyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs&dib_tag=se&keywords=watches&qid=1779860454&sr=8-25"
    },
    {
        "category": "Watches",
        "productName": "Fire-Boltt",
        "price": "1,099",
        "rating": "3.9 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 36,
        "discountPercentage": "64%",
        "imageUrl": "https://m.media-amazon.com/images/I/61sHlVy7dML._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Fire-Boltt-Bluetooth-Calling-Assistance-Resolution/dp/B0DTB3JSVV/ref=sr_1_26?dib=eyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs&dib_tag=se&keywords=watches&qid=1779860454&sr=8-26"
    },
    {
        "category": "Watches",
        "productName": "Titan",
        "price": "9,095",
        "rating": "4.3 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "43%",
        "imageUrl": "https://m.media-amazon.com/images/I/716Y5CVdbwL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Titan-Wedding-Bandhan-Unisexs-Watch-17752481KM01/dp/B07PY6CQYV/ref=sr_1_27?dib=eyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs&dib_tag=se&keywords=watches&qid=1779860454&sr=8-27"
    },
    {
        "category": "Watches",
        "productName": "Bulova",
        "price": "48,929",
        "rating": "4.7 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 7,
        "discountPercentage": "23%",
        "imageUrl": "https://m.media-amazon.com/images/I/81Hpn0pUyqL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Bulova-Marine-Analog-Black-Watch/dp/B00I6CISFS/ref=sr_1_28?dib=eyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs&dib_tag=se&keywords=watches&qid=1779860454&sr=8-28"
    },
    {
        "category": "Watches",
        "productName": "Fastrack",
        "price": "995",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 21,
        "discountPercentage": "41%",
        "imageUrl": "https://m.media-amazon.com/images/I/61FFBTzKiUL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Fastrack-Analog-Black-Unisex-Adult-Watch-38024PP25/dp/B099WNYHY2/ref=sr_1_29?dib=eyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs&dib_tag=se&keywords=watches&qid=1779860454&sr=8-29"
    },
    {
        "category": "Watches",
        "productName": "Fossil",
        "price": "9,096",
        "rating": "4.3 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "70%",
        "imageUrl": "https://m.media-amazon.com/images/I/71MlmOso55L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Fossil-Cuff-Chronograph-white-Watch/dp/B001SQLI9C/ref=sr_1_30?dib=eyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs&dib_tag=se&keywords=watches&qid=1779860454&sr=8-30"
    },
    {
        "category": "Watches",
        "productName": "GOBOULT",
        "price": "4,999",
        "rating": "4.7 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 43,
        "discountPercentage": "17%",
        "imageUrl": "https://m.media-amazon.com/images/I/81E4FC6pm1L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/GOBOULT-Mustang-Stallion-Watchfaces-Brightness/dp/B0GLQKTKF6/ref=sr_1_31?dib=eyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs&dib_tag=se&keywords=watches&qid=1779860454&sr=8-31"
    },
    {
        "category": "Watches",
        "productName": "Titan",
        "price": "31,495",
        "rating": "4.3 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "39%",
        "imageUrl": "https://m.media-amazon.com/images/I/61RPXclW5KL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Titan-Edge-Ceramic-Green-Watch/dp/B0BSL8PYP8/ref=sr_1_32?dib=eyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs&dib_tag=se&keywords=watches&qid=1779860454&sr=8-32"
    },
    {
        "category": "Watches",
        "productName": "Swiss Military Hanowa",
        "price": "75,548",
        "rating": "N/A",
        "stockStatus": "In Stock",
        "stockQuantity": 16,
        "discountPercentage": "38%",
        "imageUrl": "https://m.media-amazon.com/images/I/61w+184fk+L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/SWISS-MILITARY-HANOWA-Analog-Watch-SMWGL0002001-SET/dp/B0CWFFCDB5/ref=sr_1_33?dib=eyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs&dib_tag=se&keywords=watches&qid=1779860454&sr=8-33"
    },
    {
        "category": "Watches",
        "productName": "Shocknshop",
        "price": "499",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 17,
        "discountPercentage": "6%",
        "imageUrl": "https://m.media-amazon.com/images/I/71PhDimtl7L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Shocknshop-Digital-Stylish-Multifunctional-Electronic/dp/B0BW3QK4XR/ref=sr_1_34?dib=eyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs&dib_tag=se&keywords=watches&qid=1779860454&sr=8-34"
    },
    {
        "category": "Watches",
        "productName": "Titan",
        "price": "6,395",
        "rating": "4.4 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 13,
        "discountPercentage": "70%",
        "imageUrl": "https://m.media-amazon.com/images/I/61LXKWOKeQL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Titan-Analog-Blue-Dial-Watch/dp/B075P5L5D4/ref=sr_1_35?dib=eyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs&dib_tag=se&keywords=watches&qid=1779860454&sr=8-35"
    },
    {
        "category": "Watches",
        "productName": "boAt",
        "price": "1,399",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "61%",
        "imageUrl": "https://m.media-amazon.com/images/I/71UdDIKDlEL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Smartwatch-Display-Animated-Functional-Multiple/dp/B0FLF44GTQ/ref=sr_1_36?dib=eyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs&dib_tag=se&keywords=watches&qid=1779860454&sr=8-36"
    },
    {
        "category": "Watches",
        "productName": "Samsung",
        "price": "46,990",
        "rating": "4.5 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 20,
        "discountPercentage": "58%",
        "imageUrl": "https://m.media-amazon.com/images/I/81acmzia3+L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Samsung-Watch-Ultra-Silver-Processor/dp/B0DKFTDXMK/ref=sr_1_37?dib=eyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs&dib_tag=se&keywords=watches&qid=1779860454&sr=8-37"
    },
    {
        "category": "Watches",
        "productName": "Apple",
        "price": "89,900",
        "rating": "5.0 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 29,
        "discountPercentage": "33%",
        "imageUrl": "https://m.media-amazon.com/images/I/81dxxuTF87L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Apple-Cellular-Natural-Titanium-Alpine/dp/B0FQFZQMG5/ref=sr_1_38?dib=eyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs&dib_tag=se&keywords=watches&qid=1779860454&sr=8-38"
    },
    {
        "category": "Watches",
        "productName": "GOBOULT",
        "price": "3,999",
        "rating": "4.3 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "25%",
        "imageUrl": "https://m.media-amazon.com/images/I/71Z7btSYrML._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/GOBOULT-Mustang-Racer-Watchfaces-Brightness/dp/B0GP6KYDVV/ref=sr_1_39?dib=eyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs&dib_tag=se&keywords=watches&qid=1779860454&sr=8-39"
    },
    {
        "category": "Watches",
        "productName": "Titan",
        "price": "21,994",
        "rating": "4.5 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 20,
        "discountPercentage": "54%",
        "imageUrl": "https://m.media-amazon.com/images/I/71VH5+sz4KL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Titan-Phoenix-Skeletal-Automatic-Stainless/dp/B0F3J8PSX6/ref=sr_1_40?dib=eyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs&dib_tag=se&keywords=watches&qid=1779860454&sr=8-40"
    },
    {
        "category": "Watches",
        "productName": "Sounce",
        "price": "199",
        "rating": "4.5 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 8,
        "discountPercentage": "39%",
        "imageUrl": "https://m.media-amazon.com/images/I/81w+2nXMrpL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Sounce-Fast-Track-Portable-Carrying-Protective/dp/B0CZ49ZZLM/ref=sr_1_41?dib=eyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs&dib_tag=se&keywords=watches&qid=1779860454&sr=8-41"
    },
    {
        "category": "Watches",
        "productName": "Daniel Hechter",
        "price": "2,099",
        "rating": "4.4 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "7%",
        "imageUrl": "https://m.media-amazon.com/images/I/71wdsiWHGeL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Daniel-Hechter-Analogue-Black-Watch-DHM1003-02/dp/B0DZTNY6YM/ref=sr_1_42?dib=eyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs&dib_tag=se&keywords=watches&qid=1779860454&sr=8-42"
    },
    {
        "category": "Watches",
        "productName": "Seiko",
        "price": "54,000",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 42,
        "discountPercentage": "55%",
        "imageUrl": "https://m.media-amazon.com/images/I/71pIE6jXUdL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Seiko-Coutura-Analogue-Watches-Black/dp/B077Q2G1C8/ref=sr_1_43?dib=eyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs&dib_tag=se&keywords=watches&qid=1779860454&sr=8-43"
    },
    {
        "category": "Watches",
        "productName": "Fossil",
        "price": "24,495",
        "rating": "3.9 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 31,
        "discountPercentage": "66%",
        "imageUrl": "https://m.media-amazon.com/images/I/51By63FKkXL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Fossil-Analog-Multicolor-Dial-Watch-ME3256/dp/B0CPM115R4/ref=sr_1_44?dib=eyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs&dib_tag=se&keywords=watches&qid=1779860454&sr=8-44"
    },
    {
        "category": "Watches",
        "productName": "Titan",
        "price": "29,695",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 8,
        "discountPercentage": "65%",
        "imageUrl": "https://m.media-amazon.com/images/I/71lQzhSLMGL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Titan-Stainless-Watch-Men_90174Kd03-Bandcolor-Rose/dp/B0CSZ5HSQ7/ref=sr_1_45?dib=eyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs&dib_tag=se&keywords=watches&qid=1779860454&sr=8-45"
    },
    {
        "category": "Watches",
        "productName": "Titan",
        "price": "2,795",
        "rating": "4.4 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 5,
        "discountPercentage": "17%",
        "imageUrl": "https://m.media-amazon.com/images/I/61GkZU5+ktL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Titan-Analog-White-Dial-Watch-1802SL13/dp/B08JM2TNDQ/ref=sr_1_46?dib=eyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs&dib_tag=se&keywords=watches&qid=1779860454&sr=8-46"
    },
    {
        "category": "Watches",
        "productName": "Fossil",
        "price": "10,146",
        "rating": "4.4 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "18%",
        "imageUrl": "https://m.media-amazon.com/images/I/51rU4sqcgZL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Fossil-Womens-Courier-Stainless-Chronograph/dp/B07NYYZSWG/ref=sr_1_47?dib=eyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs&dib_tag=se&keywords=watches&qid=1779860454&sr=8-47"
    },
    {
        "category": "Watches",
        "productName": "Fastrack",
        "price": "3,499",
        "rating": "4.3 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 41,
        "discountPercentage": "31%",
        "imageUrl": "https://m.media-amazon.com/images/I/71rjlGEi+1L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Fastrack-Resolution-SingleSync-Assistant-Smartwatch/dp/B0DGGVHMDS/ref=sr_1_48?dib=eyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs&dib_tag=se&keywords=watches&qid=1779860454&sr=8-48"
    },
    {
        "category": "Watches",
        "productName": "Fossil",
        "price": "10,146",
        "rating": "4.3 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 39,
        "discountPercentage": "62%",
        "imageUrl": "https://m.media-amazon.com/images/I/51xHZB6PPUL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Fossil-Grant-Chronograph-Analog-Black/dp/B00BEU5CTE/ref=sr_1_49?dib=eyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs&dib_tag=se&keywords=watches&qid=1779860454&sr=8-49"
    },
    {
        "category": "Watches",
        "productName": "Daniel Hechter",
        "price": "2,799",
        "rating": "4.4 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 2,
        "discountPercentage": "9%",
        "imageUrl": "https://m.media-amazon.com/images/I/71nkmKFmQqL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Daniel-Hechter-Analogue-Green-Watch-DHM1001-01/dp/B0DZTNVL2M/ref=sr_1_50?dib=eyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs&dib_tag=se&keywords=watches&qid=1779860454&sr=8-50"
    },
    {
        "category": "Watches",
        "productName": "Titan",
        "price": "1,912",
        "rating": "4.5 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 32,
        "discountPercentage": "20%",
        "imageUrl": "https://m.media-amazon.com/images/I/51V0QjoUh9L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Titan-Multi-Colour-Stainless-Watch-NL1639SM01-NN1639SM01/dp/B00ISNVM0S/ref=sr_1_51?dib=eyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs&dib_tag=se&keywords=watches&qid=1779860454&sr=8-51"
    },
    {
        "category": "Watches",
        "productName": "Fossil",
        "price": "13,493",
        "rating": "4.6 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 48,
        "discountPercentage": "41%",
        "imageUrl": "https://m.media-amazon.com/images/I/71zC94k5uRL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Fossil-Stainless-Analog-Watch-Fs6031-Color-Multicolor/dp/B0CJ6XPKQ6/ref=sr_1_52?dib=eyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs&dib_tag=se&keywords=watches&qid=1779860454&sr=8-52"
    },
    {
        "category": "Watches",
        "productName": "Sonata",
        "price": "895",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "64%",
        "imageUrl": "https://m.media-amazon.com/images/I/715NqWJlbSL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Sonata-Analog-Champagne-Dial-Watch-77049YM01C/dp/B072VHGQJK/ref=sr_1_53?dib=eyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs&dib_tag=se&keywords=watches&qid=1779860454&sr=8-53"
    },
    {
        "category": "Watches",
        "productName": "Fastrack",
        "price": "2,194",
        "rating": "3.8 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 21,
        "discountPercentage": "70%",
        "imageUrl": "https://m.media-amazon.com/images/I/712hjY7N2LL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Fastrack-Nimbus-Quartz-Analog-Khaki/dp/B0GK13NVJN/ref=sr_1_54?dib=eyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs&dib_tag=se&keywords=watches&qid=1779860454&sr=8-54"
    },
    {
        "category": "Watches",
        "productName": "Armani Exchange",
        "price": "15,494",
        "rating": "4.3 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 32,
        "discountPercentage": "37%",
        "imageUrl": "https://m.media-amazon.com/images/I/61HcN90CYxL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Armani-Exchange-Black-Analogue-AX2104/dp/B0085YJ5DG/ref=sr_1_55?dib=eyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs&dib_tag=se&keywords=watches&qid=1779860454&sr=8-55"
    },
    {
        "category": "Watches",
        "productName": "TIMEX",
        "price": "1,397",
        "rating": "4.3 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 8,
        "discountPercentage": "9%",
        "imageUrl": "https://m.media-amazon.com/images/I/711NQfr8mJL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/TIMEX-Hands-Analog-Coloured-Quartz/dp/B0C3QQR4NY/ref=sr_1_56?dib=eyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs&dib_tag=se&keywords=watches&qid=1779860454&sr=8-56"
    },
    {
        "category": "Watches",
        "productName": "Carlington",
        "price": "N/A",
        "rating": "2.9 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "31%",
        "imageUrl": "https://m.media-amazon.com/images/I/61e0pAlru6L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo4MDE0NTUxNzgwODk2NjQyOjE3Nzk4NjA0NTQ6c3BfYnRmOjMwMTA4NzEyNzA5NDQzMjo6MDo6&url=%2FCarlington-Velocity-Analog-Digital-Stopwatch-Resiatant%2Fdp%2FB0GCPXFQQK%2Fref%3Dsr_1_57_sspa%3Fdib%3DeyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs%26dib_tag%3Dse%26keywords%3Dwatches%26qid%3D1779860454%26sr%3D8-57-spons%26aref%3DVvXo4xlDCY%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1&aref=VvXo4xlDCY&sp_cr=ZAZ"
    },
    {
        "category": "Watches",
        "productName": "DKNY",
        "price": "9,661",
        "rating": "N/A",
        "stockStatus": "Only Few Left",
        "stockQuantity": 21,
        "discountPercentage": "56%",
        "imageUrl": "https://m.media-amazon.com/images/I/61Z6SfRjmtL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo4MDE0NTUxNzgwODk2NjQyOjE3Nzk4NjA0NTQ6c3BfYnRmOjMwMTA5NTY0MDc3MDYzMjo6MDo6&url=%2FDKNY-Brooklyn-Japanese-Champagne-Resistance%2Fdp%2FB0FVMHFKPJ%2Fref%3Dsr_1_58_sspa%3Fdib%3DeyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs%26dib_tag%3Dse%26keywords%3Dwatches%26qid%3D1779860454%26sr%3D8-58-spons%26aref%3DWKkyXaV3j9%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1&aref=WKkyXaV3j9&sp_cr=ZAZ"
    },
    {
        "category": "Watches",
        "productName": "Fastrack",
        "price": "1,799",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "46%",
        "imageUrl": "https://m.media-amazon.com/images/I/61Gi+pyvz5L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo4MDE0NTUxNzgwODk2NjQyOjE3Nzk4NjA0NTQ6c3BfYnRmOjMwMTAyMDE0MzE1ODYzMjo6MDo6&url=%2FFastrack-Jupiter-Display-Charging-Calling%2Fdp%2FB0GLPC25J2%2Fref%3Dsr_1_59_sspa%3Fdib%3DeyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs%26dib_tag%3Dse%26keywords%3Dwatches%26qid%3D1779860454%26sr%3D8-59-spons%26aref%3DLO0ZrYTaJW%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1&aref=LO0ZrYTaJW&sp_cr=ZAZ"
    },
    {
        "category": "Watches",
        "productName": "Fossil",
        "price": "9,096",
        "rating": "4.3 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 29,
        "discountPercentage": "40%",
        "imageUrl": "https://m.media-amazon.com/images/I/71taSx89wUL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo4MDE0NTUxNzgwODk2NjQyOjE3Nzk4NjA0NTQ6c3BfYnRmOjMwMTAyMTU3NTc5NDQzMjo6MDo6&url=%2FFossil-Chronograph-Black-Dial-Watch-CH2891%2Fdp%2FB00DUCIMCI%2Fref%3Dsr_1_60_sspa%3Fdib%3DeyJ2IjoiMSJ9.KjKfqwhPGMA0sfijQRPNgGuMLh1Qs5fuyi1MtaGX7471ZakaWZtM_k1vSXgVNfxUvMnjgSFksW03wTlgFtUwfPeTKh07bHyTyR9I-rgigz3CX5LJ5OKCJGw7b9bD3JGEnkOBWcTmMsQFk5I8J4-6nildrg6czlKyz8VcTv5-RlCpzzCYsN6hon0yRkp0V4mYa7MOZnVrHyYcFLkYVJlx5j0L7hAkzOMPlHuEHAAppqllzm1HUGANgZ_ZcOUj1fUKFKDKDP9SKZfEokIJKgVzlwAJPBssEZDiHDqbMJGZFpM.et-w1JuHBcwJUUdlBBcXW98DOErecf6VqwqpbAGkgRs%26dib_tag%3Dse%26keywords%3Dwatches%26qid%3D1779860454%26sr%3D8-60-spons%26aref%3DLN8EtYlAR2%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1&aref=LN8EtYlAR2&sp_cr=ZAZ"
    },
    {
        "category": "Mens Clothing",
        "productName": "Aatman",
        "price": "949",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 6,
        "discountPercentage": "51%",
        "imageUrl": "https://m.media-amazon.com/images/I/71LkbTR4rKL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo1NzIyMzkyNTkyOTMzNzM5OjE3Nzk4NjA0Nzc6c3BfYXRmOjIwMTEyOTg5MTg3Mzk4OjowOjo&url=%2FAatman-Premium-Cotton-Pajama-Lounge%2Fdp%2FB0BRSGTHNW%2Fref%3Dsr_1_1_sspa%3Fdib%3DeyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc%26dib_tag%3Dse%26keywords%3Dmens%2Bclothing%26qid%3D1779860476%26sr%3D8-1-spons%26aref%3DLihDLL2pBf%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=LihDLL2pBf&sp_cr=ZAZ"
    },
    {
        "category": "Mens Clothing",
        "productName": "SG",
        "price": "744",
        "rating": "N/A",
        "stockStatus": "In Stock",
        "stockQuantity": 21,
        "discountPercentage": "17%",
        "imageUrl": "https://m.media-amazon.com/images/I/51PUOvSvUHL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo1NzIyMzkyNTkyOTMzNzM5OjE3Nzk4NjA0Nzc6c3BfYXRmOjMwMDg3Mjc1NjE0OTAzMjo6MDo6&url=%2FSG-T-Shirt-Running-Fitness-Regular%2Fdp%2FB0D73SGLLQ%2Fref%3Dsr_1_2_sspa%3Fdib%3DeyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc%26dib_tag%3Dse%26keywords%3Dmens%2Bclothing%26qid%3D1779860476%26sr%3D8-2-spons%26aref%3DsxeebPM0u2%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=sxeebPM0u2&sp_cr=ZAZ"
    },
    {
        "category": "Mens Clothing",
        "productName": "SG",
        "price": "986",
        "rating": "N/A",
        "stockStatus": "In Stock",
        "stockQuantity": 28,
        "discountPercentage": "27%",
        "imageUrl": "https://m.media-amazon.com/images/I/51cDr6UGgoL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo1NzIyMzkyNTkyOTMzNzM5OjE3Nzk4NjA0Nzc6c3BfYXRmOjMwMDg3Mjc1NjE0NTczMjo6MDo6&url=%2FSG-Polo-H1MP8144-Smoke-Grey%2Fdp%2FB0FC2914LC%2Fref%3Dsr_1_3_sspa%3Fdib%3DeyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc%26dib_tag%3Dse%26keywords%3Dmens%2Bclothing%26qid%3D1779860476%26sr%3D8-3-spons%26aref%3Ddha62rPrZn%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=dha62rPrZn&sp_cr=ZAZ"
    },
    {
        "category": "Mens Clothing",
        "productName": "Peter England",
        "price": "665",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 25,
        "discountPercentage": "39%",
        "imageUrl": "https://m.media-amazon.com/images/I/81V9Cw7P4tL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo1NzIyMzkyNTkyOTMzNzM5OjE3Nzk4NjA0Nzc6c3BfYXRmOjMwMDk3MzM4NTY0MTYzMjo6MDo6&url=%2FPeter-England-Regular-Shirt-PCKPSRGP483904_Green%2Fdp%2FB09XMTPFTL%2Fref%3Dsr_1_4_sspa%3Fdib%3DeyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc%26dib_tag%3Dse%26keywords%3Dmens%2Bclothing%26qid%3D1779860476%26sr%3D8-4-spons%26aref%3DwJTYXuTjDf%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=wJTYXuTjDf&sp_cr=ZAZ"
    },
    {
        "category": "Mens Clothing",
        "productName": "KOTTY",
        "price": "499",
        "rating": "3.8 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 11,
        "discountPercentage": "36%",
        "imageUrl": "https://m.media-amazon.com/images/I/61dFcpPdJkL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/KOTTY-Regular-Distressed-Fashionable-Trendy/dp/B0DWJXXT3Q/ref=sr_1_5?dib=eyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc&dib_tag=se&keywords=mens+clothing&qid=1779860476&sr=8-5"
    },
    {
        "category": "Mens Clothing",
        "productName": "DEELMO",
        "price": "498",
        "rating": "3.9 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 9,
        "discountPercentage": "38%",
        "imageUrl": "https://m.media-amazon.com/images/I/61H1HxfTAUL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/DEELMO-Stylish-Button-Down-Comfortable-Breathable/dp/B0FXRWCN5S/ref=sr_1_6?dib=eyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc&dib_tag=se&keywords=mens+clothing&qid=1779860476&sr=8-6"
    },
    {
        "category": "Mens Clothing",
        "productName": "DEELMO",
        "price": "496",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 35,
        "discountPercentage": "8%",
        "imageUrl": "https://m.media-amazon.com/images/I/61s-ohqlfLL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/DEELMO-Casual-Fashion-Textured-Regular/dp/B0F4NGRKY4/ref=sr_1_7?dib=eyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc&dib_tag=se&keywords=mens+clothing&qid=1779860476&sr=8-7"
    },
    {
        "category": "Mens Clothing",
        "productName": "AUSK",
        "price": "349",
        "rating": "3.7 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "46%",
        "imageUrl": "https://m.media-amazon.com/images/I/51MZ55vbGaL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/AUSK-T-Shirt-Texture-Design-Tshirts/dp/B0G4LZJNND/ref=sr_1_8?dib=eyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc&dib_tag=se&keywords=mens+clothing&qid=1779860476&sr=8-8"
    },
    {
        "category": "Mens Clothing",
        "productName": "Allen Solly",
        "price": "699",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 23,
        "discountPercentage": "17%",
        "imageUrl": "https://m.media-amazon.com/images/I/71eUwDk8z+L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Allen-Solly-Regular-AMKP317G04249_Jet-Black_Large/dp/B06Y2FG6R7/ref=sr_1_9?dib=eyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc&dib_tag=se&keywords=mens+clothing&qid=1779860476&sr=8-9"
    },
    {
        "category": "Mens Clothing",
        "productName": "AUSK",
        "price": "298",
        "rating": "3.9 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "12%",
        "imageUrl": "https://m.media-amazon.com/images/I/51o3uMcvGSL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/AUSK-Cable-Knit-Quarter-Zip-Textured-Self-Design/dp/B0GJFCXYMD/ref=sr_1_10?dib=eyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc&dib_tag=se&keywords=mens+clothing&qid=1779860476&sr=8-10"
    },
    {
        "category": "Mens Clothing",
        "productName": "Zombom",
        "price": "498",
        "rating": "3.7 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 33,
        "discountPercentage": "35%",
        "imageUrl": "https://m.media-amazon.com/images/I/71nEy2iSx-L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Zombom-Cotton-Regular-Mandarin-Chinese/dp/B0D3XJTM9B/ref=sr_1_11?dib=eyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc&dib_tag=se&keywords=mens+clothing&qid=1779860476&sr=8-11"
    },
    {
        "category": "Mens Clothing",
        "productName": "Peter England",
        "price": "665",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 19,
        "discountPercentage": "19%",
        "imageUrl": "https://m.media-amazon.com/images/I/81V9Cw7P4tL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Peter-England-Regular-Shirt-PCKPSRGP483904_Green/dp/B09XMV6125/ref=sr_1_12?dib=eyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc&dib_tag=se&keywords=mens+clothing&qid=1779860476&sr=8-12"
    },
    {
        "category": "Mens Clothing",
        "productName": "QUIXEL",
        "price": "380",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "30%",
        "imageUrl": "https://m.media-amazon.com/images/I/41vimVyBlUL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Trackpants-Oversized-Streetwear-Comfortable-Joggers/dp/B0FVYBV835/ref=sr_1_13?dib=eyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc&dib_tag=se&keywords=mens+clothing&qid=1779860476&sr=8-13"
    },
    {
        "category": "Mens Clothing",
        "productName": "AUSK",
        "price": "298",
        "rating": "3.4 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 38,
        "discountPercentage": "67%",
        "imageUrl": "https://m.media-amazon.com/images/I/616bDUoOBjL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/AUSK-Regular-Tshirt-T-Shirts-Color-Teal/dp/B0D5MLKC56/ref=sr_1_14?dib=eyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc&dib_tag=se&keywords=mens+clothing&qid=1779860476&sr=8-14"
    },
    {
        "category": "Mens Clothing",
        "productName": "DEELMO",
        "price": "488",
        "rating": "3.6 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 20,
        "discountPercentage": "58%",
        "imageUrl": "https://m.media-amazon.com/images/I/71Qhqwnx4JL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/DEELMO-Cotton-Mandarin-Collar-Regular/dp/B0CNM4RLZ2/ref=sr_1_15?dib=eyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc&dib_tag=se&keywords=mens+clothing&qid=1779860476&sr=8-15"
    },
    {
        "category": "Mens Clothing",
        "productName": "CB-COLEBROOK",
        "price": "449",
        "rating": "3.6 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 15,
        "discountPercentage": "58%",
        "imageUrl": "https://m.media-amazon.com/images/I/71DU0wuXOSL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/CB-COLEBROOK-Regular-Spread-Collar-X-Large/dp/B0CGLLYV2D/ref=sr_1_16?dib=eyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc&dib_tag=se&keywords=mens+clothing&qid=1779860476&sr=8-16"
    },
    {
        "category": "Mens Clothing",
        "productName": "boffi ...",
        "price": "303",
        "rating": "3.6 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 7,
        "discountPercentage": "43%",
        "imageUrl": "https://m.media-amazon.com/images/I/41h1CpignKL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/boffi-Oversized-T-Shirt-Shoulder-Regular/dp/B0DNBJ2W2X/ref=sr_1_17?dib=eyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc&dib_tag=se&keywords=mens+clothing&qid=1779860476&sr=8-17"
    },
    {
        "category": "Mens Clothing",
        "productName": "Imsa Moda",
        "price": "299",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 41,
        "discountPercentage": "16%",
        "imageUrl": "https://m.media-amazon.com/images/I/51HedKM8mcL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Imsa-Moda-Printed-Polycotton-Comfortable/dp/B0GQJNSSGP/ref=sr_1_18?dib=eyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc&dib_tag=se&keywords=mens+clothing&qid=1779860476&sr=8-18"
    },
    {
        "category": "Mens Clothing",
        "productName": "BULLMER",
        "price": "948",
        "rating": "3.9 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "21%",
        "imageUrl": "https://m.media-amazon.com/images/I/61JxTwwj-5L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/BULLMER-Cotton-Trendy-Clothing-Co-Ords/dp/B0CT8XW4PV/ref=sr_1_19?dib=eyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc&dib_tag=se&keywords=mens+clothing&qid=1779860476&sr=8-19"
    },
    {
        "category": "Mens Clothing",
        "productName": "GRECIILOOKS",
        "price": "499",
        "rating": "3.9 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 42,
        "discountPercentage": "32%",
        "imageUrl": "https://m.media-amazon.com/images/I/51sTMxOlN1L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/GRECIILOOKS-Regular-Track-Pant-Gl-Tp-1011-Large-White/dp/B0CXPWH84N/ref=sr_1_20?dib=eyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc&dib_tag=se&keywords=mens+clothing&qid=1779860476&sr=8-20"
    },
    {
        "category": "Mens Clothing",
        "productName": "StitchX",
        "price": "1,999",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "14%",
        "imageUrl": "https://m.media-amazon.com/images/I/71aAP4rBVtL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo1NzIyMzkyNTkyOTMzNzM5OjE3Nzk4NjA0Nzc6c3BfbXRmOjMwMDc5NzgwOTYwNTAzMjo6MDo6&url=%2FStitchX-Textured-Seersucker-Resort-Trouser%2Fdp%2FB0DWJSCTRJ%2Fref%3Dsr_1_21_sspa%3Fdib%3DeyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc%26dib_tag%3Dse%26keywords%3Dmens%2Bclothing%26qid%3D1779860476%26sr%3D8-21-spons%26aref%3DDy3SSXIZxh%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1&aref=Dy3SSXIZxh&sp_cr=ZAZ"
    },
    {
        "category": "Mens Clothing",
        "productName": "Peter England",
        "price": "791",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 14,
        "discountPercentage": "22%",
        "imageUrl": "https://m.media-amazon.com/images/I/71e7pr053dL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo1NzIyMzkyNTkyOTMzNzM5OjE3Nzk4NjA0Nzc6c3BfbXRmOjMwMDQwMTQzNzg0NzYzMjo6MDo6&url=%2FPeter-England-Regular-Shirt-PCKPSRGFF79745_White%2Fdp%2FB0C1RXQBMW%2Fref%3Dsr_1_22_sspa%3Fdib%3DeyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc%26dib_tag%3Dse%26keywords%3Dmens%2Bclothing%26qid%3D1779860476%26sr%3D8-22-spons%26aref%3DNj57oWj3f7%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1&aref=Nj57oWj3f7&sp_cr=ZAZ"
    },
    {
        "category": "Mens Clothing",
        "productName": "TOVIYA",
        "price": "649",
        "rating": "3.8 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 44,
        "discountPercentage": "19%",
        "imageUrl": "https://m.media-amazon.com/images/I/41JFRrQv2fL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo1NzIyMzkyNTkyOTMzNzM5OjE3Nzk4NjA0Nzc6c3BfbXRmOjMwMTAyMzQ0MDc0MTEzMjo6MDo6&url=%2FTOVIYA-Stretchable-Trousers-Comfortable-Classic%2Fdp%2FB0GT4RK2L6%2Fref%3Dsr_1_23_sspa%3Fdib%3DeyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc%26dib_tag%3Dse%26keywords%3Dmens%2Bclothing%26qid%3D1779860476%26sr%3D8-23-spons%26aref%3Die0X8oYBGr%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1&aref=ie0X8oYBGr&sp_cr=ZAZ"
    },
    {
        "category": "Mens Clothing",
        "productName": "SMOWKLY",
        "price": "428",
        "rating": "3.8 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 4,
        "discountPercentage": "67%",
        "imageUrl": "https://m.media-amazon.com/images/I/61gUz1G4WIL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo1NzIyMzkyNTkyOTMzNzM5OjE3Nzk4NjA0Nzc6c3BfbXRmOjMwMDk3MzM1MTIzMDUzMjo6MDo6&url=%2FSMOWKLY-Lightweight-Drawstring-Comfortable-1707_CK_34%2Fdp%2FB0GJKSKXT8%2Fref%3Dsr_1_24_sspa%3Fdib%3DeyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc%26dib_tag%3Dse%26keywords%3Dmens%2Bclothing%26qid%3D1779860476%26sr%3D8-24-spons%26aref%3DGPxvzQuAB1%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1&aref=GPxvzQuAB1&sp_cr=ZAZ"
    },
    {
        "category": "Mens Clothing",
        "productName": "Imsa Moda",
        "price": "344",
        "rating": "4.3 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "19%",
        "imageUrl": "https://m.media-amazon.com/images/I/41XW2a3R7DL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Imsa-Moda-Polycotton-Loose-Comfortable/dp/B0GWVMPD5W/ref=sr_1_25?dib=eyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc&dib_tag=se&keywords=mens+clothing&qid=1779860476&sr=8-25"
    },
    {
        "category": "Mens Clothing",
        "productName": "JUARI BE A GENTLEMAN",
        "price": "298",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 6,
        "discountPercentage": "13%",
        "imageUrl": "https://m.media-amazon.com/images/I/61xWsb300LL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/JUARI-BE-GENTLEMAN-Mens-Sleeveless/dp/B0FB8XVZ8Q/ref=sr_1_26?dib=eyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc&dib_tag=se&keywords=mens+clothing&qid=1779860476&sr=8-26"
    },
    {
        "category": "Mens Clothing",
        "productName": "Lymio",
        "price": "799",
        "rating": "3.6 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "36%",
        "imageUrl": "https://m.media-amazon.com/images/I/61u5oAftaeL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Lymio-Cargo-Cotton-Cargos-Cargo-46-49/dp/B0DF794BDK/ref=sr_1_27?dib=eyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc&dib_tag=se&keywords=mens+clothing&qid=1779860476&sr=8-27"
    },
    {
        "category": "Mens Clothing",
        "productName": "Lymio",
        "price": "549",
        "rating": "3.6 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 18,
        "discountPercentage": "67%",
        "imageUrl": "https://m.media-amazon.com/images/I/71qJNrZhd1L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Men-shorts-cotton-casual-Short-11-Lightgrey-M/dp/B0DRFN6D65/ref=sr_1_28?dib=eyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc&dib_tag=se&keywords=mens+clothing&qid=1779860476&sr=8-28"
    },
    {
        "category": "Mens Clothing",
        "productName": "BULLMER",
        "price": "959",
        "rating": "3.8 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "16%",
        "imageUrl": "https://m.media-amazon.com/images/I/61hY8Xbn9pL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/BULLMER-Clothing-Trendy-Co-ords-X-Large/dp/B0D1CH9K6K/ref=sr_1_29?dib=eyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc&dib_tag=se&keywords=mens+clothing&qid=1779860476&sr=8-29"
    },
    {
        "category": "Mens Clothing",
        "productName": "ROYALSCOUT",
        "price": "796",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 28,
        "discountPercentage": "55%",
        "imageUrl": "https://m.media-amazon.com/images/I/51yp4qFyp-L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/ROYALSCOUT-Polyester-Regular-Lightweight-Occasion/dp/B0F9TC6YB8/ref=sr_1_30?dib=eyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc&dib_tag=se&keywords=mens+clothing&qid=1779860476&sr=8-30"
    },
    {
        "category": "Mens Clothing",
        "productName": "London Hills",
        "price": "399",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "37%",
        "imageUrl": "https://m.media-amazon.com/images/I/71WJmOPYYiL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/London-Hills-Vertical-Polyester-T-Shirts/dp/B0GMXDFMDQ/ref=sr_1_31?dib=eyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc&dib_tag=se&keywords=mens+clothing&qid=1779860476&sr=8-31"
    },
    {
        "category": "Mens Clothing",
        "productName": "Lymio",
        "price": "449",
        "rating": "3.8 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 43,
        "discountPercentage": "26%",
        "imageUrl": "https://m.media-amazon.com/images/I/61m5W8DEuLL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Lymio-Regular-Elastic-Available-TP-07-Black-M/dp/B0CPVR2RMW/ref=sr_1_32?dib=eyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc&dib_tag=se&keywords=mens+clothing&qid=1779860476&sr=8-32"
    },
    {
        "category": "Mens Clothing",
        "productName": "JVX",
        "price": "599",
        "rating": "3.9 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "46%",
        "imageUrl": "https://m.media-amazon.com/images/I/51sSJUx8mwL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/JVX-Sweatshirts-Unisex-Available-SWEATSHIRT-11/dp/B0FLY3HF9F/ref=sr_1_33?dib=eyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc&dib_tag=se&keywords=mens+clothing&qid=1779860476&sr=8-33"
    },
    {
        "category": "Mens Clothing",
        "productName": "BULLMER",
        "price": "599",
        "rating": "3.6 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "31%",
        "imageUrl": "https://m.media-amazon.com/images/I/61bULdJcMsL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/BULLMER-Clothing-Oversized-T-Shirt-Burgundy/dp/B0DB8WRHKY/ref=sr_1_34?dib=eyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc&dib_tag=se&keywords=mens+clothing&qid=1779860476&sr=8-34"
    },
    {
        "category": "Mens Clothing",
        "productName": "Van Heusen",
        "price": "499",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 7,
        "discountPercentage": "14%",
        "imageUrl": "https://m.media-amazon.com/images/I/61W8YLsLmSL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Van-Heusen-Cotton-Trunks-8907670962534_10032_X-Large_Anthra/dp/B073WCLVH4/ref=sr_1_35?dib=eyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc&dib_tag=se&keywords=mens+clothing&qid=1779860476&sr=8-35"
    },
    {
        "category": "Mens Clothing",
        "productName": "Mack Jonney",
        "price": "389",
        "rating": "3.6 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 18,
        "discountPercentage": "19%",
        "imageUrl": "https://m.media-amazon.com/images/I/41r3Yu+ZnOL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Mack-Jonney-Regular-Trouser-Pant-MACK640434/dp/B0DVZH1R7B/ref=sr_1_36?dib=eyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc&dib_tag=se&keywords=mens+clothing&qid=1779860476&sr=8-36"
    },
    {
        "category": "Mens Clothing",
        "productName": "GRECIILOOKS",
        "price": "599",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 21,
        "discountPercentage": "9%",
        "imageUrl": "https://m.media-amazon.com/images/I/71Amu7-gYmL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/GRECIILOOKS-Summer-Casual-Outfit-Textured/dp/B0F88DD38H/ref=sr_1_37?dib=eyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc&dib_tag=se&keywords=mens+clothing&qid=1779860476&sr=8-37"
    },
    {
        "category": "Mens Clothing",
        "productName": "Lymio",
        "price": "429",
        "rating": "3.6 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 11,
        "discountPercentage": "6%",
        "imageUrl": "https://m.media-amazon.com/images/I/71NJJsDK3aL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Lymio-Shirt-T-Shirt-Polo-43-Chiku-L-Beige/dp/B0DP7M6DRY/ref=sr_1_38?dib=eyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc&dib_tag=se&keywords=mens+clothing&qid=1779860476&sr=8-38"
    },
    {
        "category": "Mens Clothing",
        "productName": "Trillion",
        "price": "398",
        "rating": "4.3 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 24,
        "discountPercentage": "9%",
        "imageUrl": "https://m.media-amazon.com/images/I/517lj8QTcNL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Trillion-Textured-Fabric-Half-Open-T-Shirt/dp/B0GM6X11DV/ref=sr_1_39?dib=eyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc&dib_tag=se&keywords=mens+clothing&qid=1779860476&sr=8-39"
    },
    {
        "category": "Mens Clothing",
        "productName": "adidas",
        "price": "799",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 20,
        "discountPercentage": "29%",
        "imageUrl": "https://m.media-amazon.com/images/I/71qCIOkILoL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Adidas-Polyester-CLASSIC-Sports-T-Shirts/dp/B07XQ8YB28/ref=sr_1_40?dib=eyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc&dib_tag=se&keywords=mens+clothing&qid=1779860476&sr=8-40"
    },
    {
        "category": "Mens Clothing",
        "productName": "Allen Solly",
        "price": "959",
        "rating": "3.9 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 24,
        "discountPercentage": "54%",
        "imageUrl": "https://m.media-amazon.com/images/I/61NjR45J15L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Allen-Solly-Casual-ASSFWMOFX67262_Sky-Blue_40/dp/B07DMQRHCW/ref=sr_1_41?dib=eyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc&dib_tag=se&keywords=mens+clothing&qid=1779860476&sr=8-41"
    },
    {
        "category": "Mens Clothing",
        "productName": "QUIXEL",
        "price": "380",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 14,
        "discountPercentage": "68%",
        "imageUrl": "https://m.media-amazon.com/images/I/41LNFuUCqYL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Trackpants-Oversized-Streetwear-Comfortable-Joggers/dp/B0FVYF6PWS/ref=sr_1_42?dib=eyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc&dib_tag=se&keywords=mens+clothing&qid=1779860476&sr=8-42"
    },
    {
        "category": "Mens Clothing",
        "productName": "NAVII CLOTHING",
        "price": "349",
        "rating": "3.8 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "6%",
        "imageUrl": "https://m.media-amazon.com/images/I/41mWSgeJHdL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/NAVII-CLOTHING-Pockets-Elastic-Standard/dp/B0GTM9J551/ref=sr_1_43?dib=eyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc&dib_tag=se&keywords=mens+clothing&qid=1779860476&sr=8-43"
    },
    {
        "category": "Mens Clothing",
        "productName": "DEELMO",
        "price": "498",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 44,
        "discountPercentage": "27%",
        "imageUrl": "https://m.media-amazon.com/images/I/61xXImTCydL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/DEELMO-Regular-Polyester-Collared-Standard/dp/B0F4P75CMT/ref=sr_1_44?dib=eyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc&dib_tag=se&keywords=mens+clothing&qid=1779860476&sr=8-44"
    },
    {
        "category": "Mens Clothing",
        "productName": "LEOTUDE",
        "price": "298",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "5%",
        "imageUrl": "https://m.media-amazon.com/images/I/61WYx598KKL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/LEOTUDE-Cottonblend-Graphic-Oversized-FS49_Navy_Boston_P_Navy/dp/B0FHDL7JY8/ref=sr_1_45?dib=eyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc&dib_tag=se&keywords=mens+clothing&qid=1779860476&sr=8-45"
    },
    {
        "category": "Mens Clothing",
        "productName": "Generic",
        "price": "289",
        "rating": "3.9 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 16,
        "discountPercentage": "19%",
        "imageUrl": "https://m.media-amazon.com/images/I/414KewQFJkL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Khadie-Half-Sleeves-Shirt-Green_XL/dp/B0FTZHKP7T/ref=sr_1_46?dib=eyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc&dib_tag=se&keywords=mens+clothing&qid=1779860476&sr=8-46"
    },
    {
        "category": "Mens Clothing",
        "productName": "Lymio",
        "price": "449",
        "rating": "3.6 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 28,
        "discountPercentage": "60%",
        "imageUrl": "https://m.media-amazon.com/images/I/81thHw9c7qL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Lymio-Clothing-Regular-Printed-Tiedite-Cream-Blue-L/dp/B0DWSB8HT4/ref=sr_1_47?dib=eyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc&dib_tag=se&keywords=mens+clothing&qid=1779860476&sr=8-47"
    },
    {
        "category": "Mens Clothing",
        "productName": "Zombom",
        "price": "494",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 28,
        "discountPercentage": "47%",
        "imageUrl": "https://m.media-amazon.com/images/I/71ImuGqzpOL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Zombom-Cotton-Straight-Regular-Sleeve/dp/B0D94FS3QX/ref=sr_1_48?dib=eyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc&dib_tag=se&keywords=mens+clothing&qid=1779860476&sr=8-48"
    },
    {
        "category": "Mens Clothing",
        "productName": "DEELMO",
        "price": "488",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 43,
        "discountPercentage": "61%",
        "imageUrl": "https://m.media-amazon.com/images/I/71okmF4khEL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/DEELMO-Cotton-Mandarin-Collar-Regular/dp/B0CMR1MTVX/ref=sr_1_49?dib=eyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc&dib_tag=se&keywords=mens+clothing&qid=1779860476&sr=8-49"
    },
    {
        "category": "Mens Clothing",
        "productName": "DEELMO",
        "price": "498",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 42,
        "discountPercentage": "54%",
        "imageUrl": "https://m.media-amazon.com/images/I/51kcgfHORtL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/DEELMO-Cotton-Regular-Sleeve-Trendy/dp/B0FDG34K71/ref=sr_1_50?dib=eyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc&dib_tag=se&keywords=mens+clothing&qid=1779860476&sr=8-50"
    },
    {
        "category": "Mens Clothing",
        "productName": "Samfor",
        "price": "499",
        "rating": "3.6 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "35%",
        "imageUrl": "https://m.media-amazon.com/images/I/71EqqfXr8jL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Samfor-Comfortable-Corduroy-Trousers-Cream/dp/B0FP4QXWWY/ref=sr_1_51?dib=eyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc&dib_tag=se&keywords=mens+clothing&qid=1779860476&sr=8-51"
    },
    {
        "category": "Mens Clothing",
        "productName": "AUSK",
        "price": "198",
        "rating": "3.8 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "17%",
        "imageUrl": "https://m.media-amazon.com/images/I/71sfmqKrOPL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/AUSK-Regular-Printed-Sleeveless-Color-Grey/dp/B0D32QKW25/ref=sr_1_52?dib=eyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc&dib_tag=se&keywords=mens+clothing&qid=1779860476&sr=8-52"
    },
    {
        "category": "Mens Clothing",
        "productName": "The Modern Soul",
        "price": "299",
        "rating": "3.5 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "21%",
        "imageUrl": "https://m.media-amazon.com/images/I/61bN6KmRy1L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Modern-Soul-Cotton-Athletic-Sleeveless/dp/B0FBMFQQR5/ref=sr_1_53?dib=eyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc&dib_tag=se&keywords=mens+clothing&qid=1779860476&sr=8-53"
    },
    {
        "category": "Mens Clothing",
        "productName": "Van Heusen",
        "price": "649",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "53%",
        "imageUrl": "https://m.media-amazon.com/images/I/61Vj+b1w0ML._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Van-Heusen-Regular-VSKP517S011407_Grey-Melange_Large/dp/B076CHSL6P/ref=sr_1_54?dib=eyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc&dib_tag=se&keywords=mens+clothing&qid=1779860476&sr=8-54"
    },
    {
        "category": "Mens Clothing",
        "productName": "Bellstone",
        "price": "448",
        "rating": "3.6 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 18,
        "discountPercentage": "66%",
        "imageUrl": "https://m.media-amazon.com/images/I/71u-xPW2saL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Bellstone-Solid-Cotton-Blend-Straight/dp/B0CJJRXQKX/ref=sr_1_55?dib=eyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc&dib_tag=se&keywords=mens+clothing&qid=1779860476&sr=8-55"
    },
    {
        "category": "Mens Clothing",
        "productName": "Hmkm",
        "price": "299",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 50,
        "discountPercentage": "30%",
        "imageUrl": "https://m.media-amazon.com/images/I/51dubLCsZrL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Hmkm-Summer-Regular-Stylish-Everyday-Regular/dp/B0GCN61GX1/ref=sr_1_56?dib=eyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc&dib_tag=se&keywords=mens+clothing&qid=1779860476&sr=8-56"
    },
    {
        "category": "Mens Clothing",
        "productName": "Spense Clothing",
        "price": "450",
        "rating": "3.5 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 38,
        "discountPercentage": "52%",
        "imageUrl": "https://m.media-amazon.com/images/I/51hb0SCISiL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo1NzIyMzkyNTkyOTMzNzM5OjE3Nzk4NjA0Nzc6c3BfYnRmOjMwMDM4NDI0ODI5NTczMjo6MDo6&url=%2FSpense-Clothing-Sleepwear-Nightdress-M_P_H_126_Grey_Medium%2Fdp%2FB0DJD7S5JW%2Fref%3Dsr_1_57_sspa%3Fdib%3DeyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc%26dib_tag%3Dse%26keywords%3Dmens%2Bclothing%26qid%3D1779860476%26sr%3D8-57-spons%26aref%3DOoJxeH2oIb%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1&aref=OoJxeH2oIb&sp_cr=ZAZ"
    },
    {
        "category": "Mens Clothing",
        "productName": "Veirdo",
        "price": "799",
        "rating": "4.3 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "49%",
        "imageUrl": "https://m.media-amazon.com/images/I/61AbeVysSVL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo1NzIyMzkyNTkyOTMzNzM5OjE3Nzk4NjA0Nzc6c3BfYnRmOjMwMTAwODY5MjU4NDQzMjo6MDo6&url=%2FVeirdo%25C2%25AE-Graphic-Comfortable-Cotton-Oversized%2Fdp%2FB0FL7ZBG83%2Fref%3Dsr_1_58_sspa%3Fdib%3DeyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc%26dib_tag%3Dse%26keywords%3Dmens%2Bclothing%26qid%3D1779860476%26sr%3D8-58-spons%26aref%3D1l1RJAfMxL%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1&aref=1l1RJAfMxL&sp_cr=ZAZ"
    },
    {
        "category": "Mens Clothing",
        "productName": "Amazon Brand - INKAST",
        "price": "649",
        "rating": "3.9 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 20,
        "discountPercentage": "62%",
        "imageUrl": "https://m.media-amazon.com/images/I/81YJwsjgDIL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo1NzIyMzkyNTkyOTMzNzM5OjE3Nzk4NjA0Nzc6c3BfYnRmOjMwMTAzMDA1NDQ1NzIzMjo6MDo6&url=%2FAmazon-Brand-Comfortable-Professional-Checkered%2Fdp%2FB0GSJZKN3J%2Fref%3Dsr_1_59_sspa%3Fdib%3DeyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc%26dib_tag%3Dse%26keywords%3Dmens%2Bclothing%26qid%3D1779860476%26sr%3D8-59-spons%26aref%3D3HlIDySJkx%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1&aref=3HlIDySJkx&sp_cr=ZAZ"
    },
    {
        "category": "Mens Clothing",
        "productName": "DEELMO",
        "price": "403",
        "rating": "3.8 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 9,
        "discountPercentage": "15%",
        "imageUrl": "https://m.media-amazon.com/images/I/51kqAqlylGL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo1NzIyMzkyNTkyOTMzNzM5OjE3Nzk4NjA0Nzc6c3BfYnRmOjMwMDgzMDE4NjQ2ODAzMjo6MDo6&url=%2FDEELMO-Corduroy-Textured-Button-Down-Layering%2Fdp%2FB0FDWWCZLQ%2Fref%3Dsr_1_60_sspa%3Fdib%3DeyJ2IjoiMSJ9.C2SLGYdgozKrPLwzL3kicgXN5RTAZbcfU6kzJYCmeWGGKKjprZ4pU4Ebd0cBGQjvuTsDHhZR_pV5yr3jzXU8-qZ3hl-hGxprd4-2ryf9OtrTj7PbW0vD0GKP31UuxsqADQLxU6uwf4cVaG1M07BINCctuAYRTFjFOjR1Jz00dlfWzccUu-466Xi8T0TrLIgtoJFFIdI6qTNaZp9JkZJL6-AvjOgmd5itduJ5akwRLo6N0wyJNRGK3MshKbg4BzhX9V-DgyUvltJYZj53MTYklqB0a8LoWjEyujsESGBwWQo.yFGtMvOBy-o-ljrgzrLeEVJckLQnNfplbTlAPqCXHrc%26dib_tag%3Dse%26keywords%3Dmens%2Bclothing%26qid%3D1779860476%26sr%3D8-60-spons%26aref%3D9zSzfVYMwm%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1&aref=9zSzfVYMwm&sp_cr=ZAZ"
    },
    {
        "category": "Womens Clothing",
        "productName": "SG",
        "price": "503",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 23,
        "discountPercentage": "62%",
        "imageUrl": "https://m.media-amazon.com/images/I/51Ekvjz61WL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MToyMjc4MjYzMDAwMTM1NDc4OjE3Nzk4NjA1MDI6c3BfYXRmOjMwMTExNDM2Njc2NDEzMjo6MDo6&url=%2FSG-T-Shirt-Running-Training-SS24WTE615%2Fdp%2FB0D73RXCVB%2Fref%3Dsr_1_1_sspa%3Fdib%3DeyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M%26dib_tag%3Dse%26keywords%3Dwomens%2Bclothing%26qid%3D1779860501%26sr%3D8-1-spons%26aref%3DxT8IDUbbPA%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=xT8IDUbbPA&sp_cr=ZAZ"
    },
    {
        "category": "Womens Clothing",
        "productName": "SG",
        "price": "1,181",
        "rating": "N/A",
        "stockStatus": "Limited Stock",
        "stockQuantity": 17,
        "discountPercentage": "59%",
        "imageUrl": "https://m.media-amazon.com/images/I/514+3A9trdL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MToyMjc4MjYzMDAwMTM1NDc4OjE3Nzk4NjA1MDI6c3BfYXRmOjMwMDg3Mjc1NjE0MzUzMjo6MDo6&url=%2FSG-Sports-Women-H1WSB8044-Light%2Fdp%2FB0F3P98HZ8%2Fref%3Dsr_1_2_sspa%3Fdib%3DeyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M%26dib_tag%3Dse%26keywords%3Dwomens%2Bclothing%26qid%3D1779860501%26sr%3D8-2-spons%26aref%3D2igGksu71h%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=2igGksu71h&sp_cr=ZAZ"
    },
    {
        "category": "Womens Clothing",
        "productName": "SG",
        "price": "951",
        "rating": "N/A",
        "stockStatus": "Limited Stock",
        "stockQuantity": 30,
        "discountPercentage": "39%",
        "imageUrl": "https://m.media-amazon.com/images/I/61X2eGTzdHL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MToyMjc4MjYzMDAwMTM1NDc4OjE3Nzk4NjA1MDI6c3BfYXRmOjMwMTExNDM2Njc2MzUzMjo6MDo6&url=%2FSG-Sports-Women-H2WSB8176-Navy%2Fdp%2FB0FCMZVTK2%2Fref%3Dsr_1_3_sspa%3Fdib%3DeyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M%26dib_tag%3Dse%26keywords%3Dwomens%2Bclothing%26qid%3D1779860501%26sr%3D8-3-spons%26aref%3D4vZ29h8MH8%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=4vZ29h8MH8&sp_cr=ZAZ"
    },
    {
        "category": "Womens Clothing",
        "productName": "SG",
        "price": "815",
        "rating": "N/A",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "36%",
        "imageUrl": "https://m.media-amazon.com/images/I/61nxs5HQPRL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MToyMjc4MjYzMDAwMTM1NDc4OjE3Nzk4NjA1MDI6c3BfYXRmOjMwMDg3Mjc1NjE1MDAzMjo6MDo6&url=%2FSG-Sports-Women-H1WSB8041-Black%2Fdp%2FB0FCMSR671%2Fref%3Dsr_1_4_sspa%3Fdib%3DeyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M%26dib_tag%3Dse%26keywords%3Dwomens%2Bclothing%26qid%3D1779860501%26sr%3D8-4-spons%26aref%3DnLPztL3be1%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=nLPztL3be1&sp_cr=ZAZ"
    },
    {
        "category": "Womens Clothing",
        "productName": "ANNI DESIGNER",
        "price": "499",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 17,
        "discountPercentage": "61%",
        "imageUrl": "https://m.media-amazon.com/images/I/51jOoX3aoQL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/ANNI-Designer-Straight-RIMPY-Brown_M_Brown_Medium/dp/B0G493XP7N/ref=sr_1_5?dib=eyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M&dib_tag=se&keywords=womens+clothing&qid=1779860501&sr=8-5"
    },
    {
        "category": "Womens Clothing",
        "productName": "KLOSIA",
        "price": "699",
        "rating": "4.5 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 29,
        "discountPercentage": "16%",
        "imageUrl": "https://m.media-amazon.com/images/I/616i8sDpl8L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/KLOSIA-Womens-Printed-Straight-Dupatta/dp/B0GPQYTLSD/ref=sr_1_6?dib=eyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M&dib_tag=se&keywords=womens+clothing&qid=1779860501&sr=8-6"
    },
    {
        "category": "Womens Clothing",
        "productName": "KLOSIA",
        "price": "799",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 29,
        "discountPercentage": "50%",
        "imageUrl": "https://m.media-amazon.com/images/I/71I53evweVL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/KLOSIA-Women-Printed-Anarkali-Dupatta/dp/B0FDWB8BZ5/ref=sr_1_7?dib=eyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M&dib_tag=se&keywords=womens+clothing&qid=1779860501&sr=8-7"
    },
    {
        "category": "Womens Clothing",
        "productName": "KLOSIA",
        "price": "799",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 46,
        "discountPercentage": "47%",
        "imageUrl": "https://m.media-amazon.com/images/I/51JtGs04X7L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/KLOSIA-Printed-Anarkali-Dupatta-Maroon/dp/B0FRFW2S81/ref=sr_1_8?dib=eyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M&dib_tag=se&keywords=womens+clothing&qid=1779860501&sr=8-8"
    },
    {
        "category": "Womens Clothing",
        "productName": "PARTHVI",
        "price": "833",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "43%",
        "imageUrl": "https://m.media-amazon.com/images/I/810v-fGAGLL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/PARTHVI-Printed-Palazzo-Dupatta-W-1103-Green-XXL/dp/B0FLYCRCJH/ref=sr_1_9?dib=eyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M&dib_tag=se&keywords=womens+clothing&qid=1779860501&sr=8-9"
    },
    {
        "category": "Womens Clothing",
        "productName": "ANNI DESIGNER",
        "price": "499",
        "rating": "3.9 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "66%",
        "imageUrl": "https://m.media-amazon.com/images/I/51yquppLtaL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/ANNI-DESIGNER-Viscose-SURAI-White_S_White_Small/dp/B0FHKRVX3B/ref=sr_1_10?dib=eyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M&dib_tag=se&keywords=womens+clothing&qid=1779860501&sr=8-10"
    },
    {
        "category": "Womens Clothing",
        "productName": "GoSriKi",
        "price": "799",
        "rating": "3.4 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 16,
        "discountPercentage": "25%",
        "imageUrl": "https://m.media-amazon.com/images/I/713jWuxPG6L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/GoSriKi-Viscose-Anarkali-Printed-Maroon-GS_L_Maroon_Large/dp/B0FMFF5V88/ref=sr_1_11?dib=eyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M&dib_tag=se&keywords=womens+clothing&qid=1779860501&sr=8-11"
    },
    {
        "category": "Womens Clothing",
        "productName": "GoSriKi",
        "price": "794",
        "rating": "3.7 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 36,
        "discountPercentage": "70%",
        "imageUrl": "https://m.media-amazon.com/images/I/71mX4WATh-L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/GoSriKi-Anarkali-Printed-Dupatta-Yellow-GS_M_Yellow_Medium/dp/B0DD76X72T/ref=sr_1_12?dib=eyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M&dib_tag=se&keywords=womens+clothing&qid=1779860501&sr=8-12"
    },
    {
        "category": "Womens Clothing",
        "productName": "BlissClub",
        "price": "999",
        "rating": "4.4 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 50,
        "discountPercentage": "55%",
        "imageUrl": "https://m.media-amazon.com/images/I/41-MeW+9SQL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/BlissClub-Women-Ultimate-Flare-Pants/dp/B0CN3BSZPS/ref=sr_1_13?dib=eyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M&dib_tag=se&keywords=womens+clothing&qid=1779860501&sr=8-13"
    },
    {
        "category": "Womens Clothing",
        "productName": "GoSriKi",
        "price": "799",
        "rating": "2.8 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 22,
        "discountPercentage": "56%",
        "imageUrl": "https://m.media-amazon.com/images/I/61Ow9mZcWEL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/GoSriKi-Printed-Straight-Dupatta-Multi-GS_L_Multicolor_Large/dp/B0DTK876Z1/ref=sr_1_14?dib=eyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M&dib_tag=se&keywords=womens+clothing&qid=1779860501&sr=8-14"
    },
    {
        "category": "Womens Clothing",
        "productName": "ANNI DESIGNER",
        "price": "699",
        "rating": "3.6 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 20,
        "discountPercentage": "64%",
        "imageUrl": "https://m.media-amazon.com/images/I/61PHOMhPdCL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/ANNI-DESIGNER-Straight-CHAKORI-MAROON-VKS05_M_Maroon_Medium/dp/B0F8ZXJXLK/ref=sr_1_15?dib=eyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M&dib_tag=se&keywords=womens+clothing&qid=1779860501&sr=8-15"
    },
    {
        "category": "Womens Clothing",
        "productName": "TRASA",
        "price": "379",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 1,
        "discountPercentage": "56%",
        "imageUrl": "https://m.media-amazon.com/images/I/616rIgjcUjL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/TRASA-Cotton-Regular-Palazzo-Womens/dp/B0BCGHRCS6/ref=sr_1_16?dib=eyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M&dib_tag=se&keywords=womens+clothing&qid=1779860501&sr=8-16"
    },
    {
        "category": "Womens Clothing",
        "productName": "KLOSIA",
        "price": "799",
        "rating": "3.8 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 41,
        "discountPercentage": "47%",
        "imageUrl": "https://m.media-amazon.com/images/I/71DCFWHFolL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/KLOSIA-Women-Embroidery-Anarkali-Dupatta/dp/B0FMYLBCXW/ref=sr_1_17?dib=eyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M&dib_tag=se&keywords=womens+clothing&qid=1779860501&sr=8-17"
    },
    {
        "category": "Womens Clothing",
        "productName": "rytras",
        "price": "599",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "61%",
        "imageUrl": "https://m.media-amazon.com/images/I/61zYeJ27oGL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/rytras-Womens-Printed-Straight-Palazzo/dp/B0DM8LN6HW/ref=sr_1_18?dib=eyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M&dib_tag=se&keywords=womens+clothing&qid=1779860501&sr=8-18"
    },
    {
        "category": "Womens Clothing",
        "productName": "Nermosa",
        "price": "699",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "38%",
        "imageUrl": "https://m.media-amazon.com/images/I/71Xvagl5gsL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Nermosa-Block-Printed-Kurta-Dupatta/dp/B0DCZBTRZ1/ref=sr_1_19?dib=eyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M&dib_tag=se&keywords=womens+clothing&qid=1779860501&sr=8-19"
    },
    {
        "category": "Womens Clothing",
        "productName": "SRB CORP",
        "price": "345",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 8,
        "discountPercentage": "45%",
        "imageUrl": "https://m.media-amazon.com/images/I/61eLgolXMkL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/SRB-CORP-Striped-Vertical-Oversized/dp/B0GZH5SMXX/ref=sr_1_20?dib=eyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M&dib_tag=se&keywords=womens+clothing&qid=1779860501&sr=8-20"
    },
    {
        "category": "Womens Clothing",
        "productName": "SLEIN",
        "price": "1,199",
        "rating": "N/A",
        "stockStatus": "Limited Stock",
        "stockQuantity": 43,
        "discountPercentage": "59%",
        "imageUrl": "https://m.media-amazon.com/images/I/410GYEoR1RL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MToyMjc4MjYzMDAwMTM1NDc4OjE3Nzk4NjA1MDI6c3BfbXRmOjMwMTExMzczNTg3NjgzMjo6MDo6&url=%2FSLEIN-Seamless-Activewear-Breathable-Nylon-Spandex%2Fdp%2FB0GY84MQ3S%2Fref%3Dsr_1_21_sspa%3Fdib%3DeyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M%26dib_tag%3Dse%26keywords%3Dwomens%2Bclothing%26qid%3D1779860501%26sr%3D8-21-spons%26aref%3DC2Ghba8ek7%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1&aref=C2Ghba8ek7&sp_cr=ZAZ"
    },
    {
        "category": "Womens Clothing",
        "productName": "Q - RIOUS",
        "price": "419",
        "rating": "3.0 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 23,
        "discountPercentage": "11%",
        "imageUrl": "https://m.media-amazon.com/images/I/51Kk393oKyL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MToyMjc4MjYzMDAwMTM1NDc4OjE3Nzk4NjA1MDI6c3BfbXRmOjMwMTA2NzAwMjkxMjYzMjo6MDo6&url=%2FWaisted-Drawstring-Athletic-Joggers-Beige_28%2Fdp%2FB0GR7825GW%2Fref%3Dsr_1_22_sspa%3Fdib%3DeyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M%26dib_tag%3Dse%26keywords%3Dwomens%2Bclothing%26qid%3D1779860501%26sr%3D8-22-spons%26aref%3DuQsLdRb9dx%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1&aref=uQsLdRb9dx&sp_cr=ZAZ"
    },
    {
        "category": "Womens Clothing",
        "productName": "FABSPORTS",
        "price": "1,298",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 6,
        "discountPercentage": "57%",
        "imageUrl": "https://m.media-amazon.com/images/I/61r4TS4k6FL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MToyMjc4MjYzMDAwMTM1NDc4OjE3Nzk4NjA1MDI6c3BfbXRmOjMwMDM0NjU4NDg1NzUzMjo6MDo6&url=%2FFABSPORTS-Protection-Clothing-Lightweight-Protective%2Fdp%2FB0DHLH7WWL%2Fref%3Dsr_1_23_sspa%3Fdib%3DeyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M%26dib_tag%3Dse%26keywords%3Dwomens%2Bclothing%26qid%3D1779860501%26sr%3D8-23-spons%26aref%3D8d0LLXE9o5%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1&aref=8d0LLXE9o5&sp_cr=ZAZ"
    },
    {
        "category": "Womens Clothing",
        "productName": "Sirona",
        "price": "169",
        "rating": "3.9 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 24,
        "discountPercentage": "59%",
        "imageUrl": "https://m.media-amazon.com/images/I/61wJEFn8A0L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MToyMjc4MjYzMDAwMTM1NDc4OjE3Nzk4NjA1MDI6c3BfbXRmOjIwMDY0NzI1NTk2ODk4OjowOjo&url=%2FSirona-Fashion-Clothes-Double-Strips%2Fdp%2FB0B82MHB5C%2Fref%3Dsr_1_24_sspa%3Fdib%3DeyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M%26dib_tag%3Dse%26keywords%3Dwomens%2Bclothing%26qid%3D1779860501%26sr%3D8-24-spons%26aref%3DylJ86imk3V%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1&aref=ylJ86imk3V&sp_cr=ZAZ"
    },
    {
        "category": "Womens Clothing",
        "productName": "Jockey",
        "price": "490",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "39%",
        "imageUrl": "https://m.media-amazon.com/images/I/61bMkDF97VL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Jockey-Womens-Hipster-1406_Dark-Assorted_M/dp/B010FMJP76/ref=sr_1_25?dib=eyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M&dib_tag=se&keywords=womens+clothing&qid=1779860501&sr=8-25"
    },
    {
        "category": "Womens Clothing",
        "productName": "ANNI DESIGNER",
        "price": "589",
        "rating": "3.7 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 23,
        "discountPercentage": "29%",
        "imageUrl": "https://m.media-amazon.com/images/I/613hWWYasoL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/ANNI-Designer-Anarkali-QUSHI-Cream_M_Cream_Medium/dp/B0FJY1KWLN/ref=sr_1_26?dib=eyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M&dib_tag=se&keywords=womens+clothing&qid=1779860501&sr=8-26"
    },
    {
        "category": "Womens Clothing",
        "productName": "Q - RIOUS",
        "price": "377",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 45,
        "discountPercentage": "67%",
        "imageUrl": "https://m.media-amazon.com/images/I/51ugSQyrOiL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Waisted-Drawstring-Athletic-Joggers-Pockets/dp/B0F3JK3FTP/ref=sr_1_27?dib=eyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M&dib_tag=se&keywords=womens+clothing&qid=1779860501&sr=8-27"
    },
    {
        "category": "Womens Clothing",
        "productName": "ALENJAN",
        "price": "299",
        "rating": "3.6 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 21,
        "discountPercentage": "58%",
        "imageUrl": "https://m.media-amazon.com/images/I/61sYCnM+18L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/ALENJAN-Back-Breathable-Relaxed-Mustard/dp/B0GN2XKR15/ref=sr_1_28?dib=eyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M&dib_tag=se&keywords=womens+clothing&qid=1779860501&sr=8-28"
    },
    {
        "category": "Womens Clothing",
        "productName": "SRB CORP",
        "price": "345",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 22,
        "discountPercentage": "11%",
        "imageUrl": "https://m.media-amazon.com/images/I/61HyvvPK2KL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/SRB-CORP-Striped-Vertical-Oversized/dp/B0GZGPD3PX/ref=sr_1_29?dib=eyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M&dib_tag=se&keywords=womens+clothing&qid=1779860501&sr=8-29"
    },
    {
        "category": "Womens Clothing",
        "productName": "ANNI DESIGNER",
        "price": "699",
        "rating": "3.7 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "31%",
        "imageUrl": "https://m.media-amazon.com/images/I/51suEsggRLL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/ANNI-DESIGNER-Raja-Saab-Purple-VKS01_M_Purple_Medium/dp/B0DC5B84VL/ref=sr_1_30?dib=eyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M&dib_tag=se&keywords=womens+clothing&qid=1779860501&sr=8-30"
    },
    {
        "category": "Womens Clothing",
        "productName": "ANNI DESIGNER",
        "price": "499",
        "rating": "3.7 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "38%",
        "imageUrl": "https://m.media-amazon.com/images/I/71o1NWeOTQL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/ANNI-Designer-Straight-Daniel-Blue_XL_Blue_X-Large/dp/B0GHD91CC5/ref=sr_1_31?dib=eyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M&dib_tag=se&keywords=womens+clothing&qid=1779860501&sr=8-31"
    },
    {
        "category": "Womens Clothing",
        "productName": "AUSK",
        "price": "291",
        "rating": "3.9 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 27,
        "discountPercentage": "9%",
        "imageUrl": "https://m.media-amazon.com/images/I/71kSq+PxfkL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/AUSK-Oversized-T-Shirts-Womens-Printed/dp/B0FDB38DLN/ref=sr_1_32?dib=eyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M&dib_tag=se&keywords=womens+clothing&qid=1779860501&sr=8-32"
    },
    {
        "category": "Womens Clothing",
        "productName": "Nermosa",
        "price": "799",
        "rating": "4.5 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "11%",
        "imageUrl": "https://m.media-amazon.com/images/I/71rjJMwzQaL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Nermosa-Women-Embroidery-Dupatta-Morepeach/dp/B0G7189R4V/ref=sr_1_33?dib=eyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M&dib_tag=se&keywords=womens+clothing&qid=1779860501&sr=8-33"
    },
    {
        "category": "Womens Clothing",
        "productName": "Celary",
        "price": "699",
        "rating": "3.6 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 13,
        "discountPercentage": "45%",
        "imageUrl": "https://m.media-amazon.com/images/I/61H0uYfY3cL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Celary-Breathable-Available-Comfortable-Sleepwear/dp/B0G3Q95PRQ/ref=sr_1_34?dib=eyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M&dib_tag=se&keywords=womens+clothing&qid=1779860501&sr=8-34"
    },
    {
        "category": "Womens Clothing",
        "productName": "KLOSIA",
        "price": "579",
        "rating": "4.4 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "33%",
        "imageUrl": "https://m.media-amazon.com/images/I/41YF5GlKMXL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Klosia-Palazzo-Sleeveless-Printed-Friendly/dp/B0GGHTFL61/ref=sr_1_35?dib=eyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M&dib_tag=se&keywords=womens+clothing&qid=1779860501&sr=8-35"
    },
    {
        "category": "Womens Clothing",
        "productName": "GoSriKi",
        "price": "672",
        "rating": "3.8 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 44,
        "discountPercentage": "17%",
        "imageUrl": "https://m.media-amazon.com/images/I/61v+nArmvAL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/GoSriKi-Womens-Viscose-ANVI-RED-GS_L_Red_Large/dp/B0F9PTXTQX/ref=sr_1_36?dib=eyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M&dib_tag=se&keywords=womens+clothing&qid=1779860501&sr=8-36"
    },
    {
        "category": "Womens Clothing",
        "productName": "MENLEE",
        "price": "279",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 34,
        "discountPercentage": "61%",
        "imageUrl": "https://m.media-amazon.com/images/I/51IoXtxlhlL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/MENLEE-Length-Cotton-Colourful-Colours/dp/B0CHGHGK2P/ref=sr_1_37?dib=eyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M&dib_tag=se&keywords=womens+clothing&qid=1779860501&sr=8-37"
    },
    {
        "category": "Womens Clothing",
        "productName": "Nermosa",
        "price": "799",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 48,
        "discountPercentage": "27%",
        "imageUrl": "https://m.media-amazon.com/images/I/71t36fW+BUL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Nermosa-Women-Embroidery-Anarkali-Dupatta/dp/B0G1HPX5TT/ref=sr_1_38?dib=eyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M&dib_tag=se&keywords=womens+clothing&qid=1779860501&sr=8-38"
    },
    {
        "category": "Womens Clothing",
        "productName": "KLOSIA",
        "price": "799",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 47,
        "discountPercentage": "7%",
        "imageUrl": "https://m.media-amazon.com/images/I/71nd1eiKq5L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/KLOSIA-Women-Printed-Anarkali-Dupatta/dp/B0FRFVWT46/ref=sr_1_39?dib=eyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M&dib_tag=se&keywords=womens+clothing&qid=1779860501&sr=8-39"
    },
    {
        "category": "Womens Clothing",
        "productName": "FABNEX",
        "price": "501",
        "rating": "3.5 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 26,
        "discountPercentage": "10%",
        "imageUrl": "https://m.media-amazon.com/images/I/51IG4UWlvoL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/FABNEX-Cotton-Blend-Regular-F-74-Blue-S_Blue/dp/B0DBPX8PXZ/ref=sr_1_40?dib=eyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M&dib_tag=se&keywords=womens+clothing&qid=1779860501&sr=8-40"
    },
    {
        "category": "Womens Clothing",
        "productName": "rytras",
        "price": "659",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 36,
        "discountPercentage": "48%",
        "imageUrl": "https://m.media-amazon.com/images/I/61r67q9q9FL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/rytras-Womens-Printed-Palazzo-RYT583/dp/B0DBDTGKYD/ref=sr_1_41?dib=eyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M&dib_tag=se&keywords=womens+clothing&qid=1779860501&sr=8-41"
    },
    {
        "category": "Womens Clothing",
        "productName": "Modestouze Attires",
        "price": "934",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 1,
        "discountPercentage": "40%",
        "imageUrl": "https://m.media-amazon.com/images/I/71LFGZk5LCL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Modestouze-Attires-Coord-Women-Cotton/dp/B0FSLKSYDW/ref=sr_1_42?dib=eyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M&dib_tag=se&keywords=womens+clothing&qid=1779860501&sr=8-42"
    },
    {
        "category": "Womens Clothing",
        "productName": "SNMMIFER",
        "price": "159",
        "rating": "3.7 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 37,
        "discountPercentage": "54%",
        "imageUrl": "https://m.media-amazon.com/images/I/61RB937xEBL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/SNMMIFER-Invisible-Lingerie-Clothing-Strength/dp/B0DKX3HX1W/ref=sr_1_43?dib=eyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M&dib_tag=se&keywords=womens+clothing&qid=1779860501&sr=8-43"
    },
    {
        "category": "Womens Clothing",
        "productName": "KLOSIA",
        "price": "799",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 18,
        "discountPercentage": "29%",
        "imageUrl": "https://m.media-amazon.com/images/I/41KIAExIjWL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Klosia-Women-Solid-Embroidery-Dupatta/dp/B0G4F6B1SB/ref=sr_1_44?dib=eyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M&dib_tag=se&keywords=womens+clothing&qid=1779860501&sr=8-44"
    },
    {
        "category": "Womens Clothing",
        "productName": "FLYNGO",
        "price": "299",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 38,
        "discountPercentage": "56%",
        "imageUrl": "https://m.media-amazon.com/images/I/41YYXeQcK0L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/FLYNGO-Skinny-Winter-Thermal-Leggings/dp/B0G4JQ7T7R/ref=sr_1_45?dib=eyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M&dib_tag=se&keywords=womens+clothing&qid=1779860501&sr=8-45"
    },
    {
        "category": "Womens Clothing",
        "productName": "rytras",
        "price": "419",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 9,
        "discountPercentage": "35%",
        "imageUrl": "https://m.media-amazon.com/images/I/71IxguwPEfL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/rytras-Womens-Printed-Straight-RYT311_Blue_X-Large/dp/B0B38XB7XV/ref=sr_1_46?dib=eyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M&dib_tag=se&keywords=womens+clothing&qid=1779860501&sr=8-46"
    },
    {
        "category": "Womens Clothing",
        "productName": "SXV STYLE",
        "price": "699",
        "rating": "4.4 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 50,
        "discountPercentage": "43%",
        "imageUrl": "https://m.media-amazon.com/images/I/71rXi3gfIlL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/SXV-STYLE-Asymmetrical-Cocktail-Oversized/dp/B0FWRQCJ92/ref=sr_1_47?dib=eyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M&dib_tag=se&keywords=womens+clothing&qid=1779860501&sr=8-47"
    },
    {
        "category": "Womens Clothing",
        "productName": "Shasmi",
        "price": "599",
        "rating": "4.4 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 34,
        "discountPercentage": "54%",
        "imageUrl": "https://m.media-amazon.com/images/I/61OzjLUVZZL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Shasmi-Cinched-Western-Elegant-246/dp/B0FLK9RWQV/ref=sr_1_48?dib=eyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M&dib_tag=se&keywords=womens+clothing&qid=1779860501&sr=8-48"
    },
    {
        "category": "Womens Clothing",
        "productName": "MEERA FAB",
        "price": "774",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 44,
        "discountPercentage": "12%",
        "imageUrl": "https://m.media-amazon.com/images/I/71T-yPIj-sL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/MEERA-FAB-Printed-Anarkali-Palazzo/dp/B0BTX2DWV1/ref=sr_1_49?dib=eyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M&dib_tag=se&keywords=womens+clothing&qid=1779860501&sr=8-49"
    },
    {
        "category": "Womens Clothing",
        "productName": "Amayra",
        "price": "928",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 41,
        "discountPercentage": "10%",
        "imageUrl": "https://m.media-amazon.com/images/I/81IQzobx04L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Amayra-Printed-Straight-Dupatta-TCK614/dp/B0FBG8S8BM/ref=sr_1_50?dib=eyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M&dib_tag=se&keywords=womens+clothing&qid=1779860501&sr=8-50"
    },
    {
        "category": "Womens Clothing",
        "productName": "Gufrina",
        "price": "418",
        "rating": "3.7 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 37,
        "discountPercentage": "54%",
        "imageUrl": "https://m.media-amazon.com/images/I/61VW43-uP4L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Gufrina-Button-Down-Multicolor-Sleeves-TOP-112/dp/B0F8BVHBF6/ref=sr_1_51?dib=eyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M&dib_tag=se&keywords=womens+clothing&qid=1779860501&sr=8-51"
    },
    {
        "category": "Womens Clothing",
        "productName": "Gufrina",
        "price": "448",
        "rating": "3.9 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "30%",
        "imageUrl": "https://m.media-amazon.com/images/I/71+8o4O1WCL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Gufrina-Printed-Mandarin-Relaxed-Rose-5XL/dp/B0FNX51WZJ/ref=sr_1_52?dib=eyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M&dib_tag=se&keywords=womens+clothing&qid=1779860501&sr=8-52"
    },
    {
        "category": "Womens Clothing",
        "productName": "ANNI DESIGNER",
        "price": "699",
        "rating": "3.2 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 3,
        "discountPercentage": "38%",
        "imageUrl": "https://m.media-amazon.com/images/I/71L4OyrOCiL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/ANNI-DESIGNER-Viscose-DHRUVIKA-Rust_XXL_Rust_XX-Large/dp/B0F9PTS5V4/ref=sr_1_53?dib=eyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M&dib_tag=se&keywords=womens+clothing&qid=1779860501&sr=8-53"
    },
    {
        "category": "Womens Clothing",
        "productName": "Aahwan",
        "price": "589",
        "rating": "3.2 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 19,
        "discountPercentage": "28%",
        "imageUrl": "https://m.media-amazon.com/images/I/61-hWuxivJL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Aahwan-Striped-Button-Sleeve-354-SBlack-M/dp/B0GF82Y38J/ref=sr_1_54?dib=eyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M&dib_tag=se&keywords=womens+clothing&qid=1779860501&sr=8-54"
    },
    {
        "category": "Womens Clothing",
        "productName": "GRECIILOOKS",
        "price": "699",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "14%",
        "imageUrl": "https://m.media-amazon.com/images/I/71SYSZfPJDL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/GRECIILOOKS-Rayon-Bodycon-Dresses-GL-WD1231_Multicolor/dp/B0DF2R1Z3Q/ref=sr_1_55?dib=eyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M&dib_tag=se&keywords=womens+clothing&qid=1779860501&sr=8-55"
    },
    {
        "category": "Womens Clothing",
        "productName": "London Hills",
        "price": "299",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 50,
        "discountPercentage": "51%",
        "imageUrl": "https://m.media-amazon.com/images/I/A1wBuArpcTL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/London-Hills-T-shirt-Sleeve-zipper/dp/B0CV7KXJ31/ref=sr_1_56?dib=eyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M&dib_tag=se&keywords=womens+clothing&qid=1779860501&sr=8-56"
    },
    {
        "category": "Womens Clothing",
        "productName": "RADHI HANDICRAFT",
        "price": "1,599",
        "rating": "N/A",
        "stockStatus": "Only Few Left",
        "stockQuantity": 2,
        "discountPercentage": "13%",
        "imageUrl": "https://m.media-amazon.com/images/I/51qVkAApKtL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MToyMjc4MjYzMDAwMTM1NDc4OjE3Nzk4NjA1MDI6c3BfYnRmOjMwMTA4NTA2MTY5MDQzMjo6MDo6&url=%2FRADHI-HANDICRAFT-Embroidery-Straight-Orange-M%2Fdp%2FB0GMHG717F%2Fref%3Dsr_1_57_sspa%3Fdib%3DeyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M%26dib_tag%3Dse%26keywords%3Dwomens%2Bclothing%26qid%3D1779860501%26sr%3D8-57-spons%26aref%3DDZ4i5sihGm%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1&aref=DZ4i5sihGm&sp_cr=ZAZ"
    },
    {
        "category": "Womens Clothing",
        "productName": "Q - RIOUS",
        "price": "377",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 22,
        "discountPercentage": "66%",
        "imageUrl": "https://m.media-amazon.com/images/I/51ugSQyrOiL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MToyMjc4MjYzMDAwMTM1NDc4OjE3Nzk4NjA1MDI6c3BfYnRmOjMwMDk2NDcyNjI0MTgzMjo6MDo6&url=%2FWaisted-Drawstring-Athletic-Joggers-Pockets%2Fdp%2FB0F3JH38ZW%2Fref%3Dsr_1_58_sspa%3Fdib%3DeyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M%26dib_tag%3Dse%26keywords%3Dwomens%2Bclothing%26qid%3D1779860501%26sr%3D8-58-spons%26aref%3DcBVS535COX%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1&aref=cBVS535COX&sp_cr=ZAZ"
    },
    {
        "category": "Womens Clothing",
        "productName": "UB Unity Brand",
        "price": "198",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "70%",
        "imageUrl": "https://m.media-amazon.com/images/I/71MsgoLQY+L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MToyMjc4MjYzMDAwMTM1NDc4OjE3Nzk4NjA1MDI6c3BfYnRmOjMwMDg2MzU1NTQ4ODIzMjo6MDo6&url=%2FUB-Unity-Brand-clothes-Transparent%2Fdp%2FB0G49B76CQ%2Fref%3Dsr_1_59_sspa%3Fdib%3DeyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M%26dib_tag%3Dse%26keywords%3Dwomens%2Bclothing%26qid%3D1779860501%26sr%3D8-59-spons%26aref%3DjbL5CcQBy6%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1&aref=jbL5CcQBy6&sp_cr=ZAZ"
    },
    {
        "category": "Womens Clothing",
        "productName": "Lavos",
        "price": "474",
        "rating": "4.4 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 15,
        "discountPercentage": "29%",
        "imageUrl": "https://m.media-amazon.com/images/I/516i15DEdeL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MToyMjc4MjYzMDAwMTM1NDc4OjE3Nzk4NjA1MDI6c3BfYnRmOjMwMDUzOTQ2NjU1ODIzMjo6MDo6&url=%2FLavos-Non-Paded-Everyday-Comfort-X-Large%2Fdp%2FB07RRQLBCW%2Fref%3Dsr_1_60_sspa%3Fdib%3DeyJ2IjoiMSJ9.zeEBHRQvZ2x3h9GWlRSu_KY6Yql2kRLx2woogHEBfMvhwOwSB6xeRA-ho9nlPVXxwcb4B-Hg3-o9gltM1eaztSOdGifshfJtPFma5UHREd-GIiTujCukoIzlyVMSxe5kVxCRA4VX9G8atRHQQ5xW2N4C2WBBXGPLcznlpiPpHrOCL_bhGcAFMI_Pp0CTFnIZnJlGIHZcLo7kgZLRE2yoKMsXLwfsBVGKnCIbtiBTnpTM3rsPEKPS3Ir4lMOEeQA63Puwj0G7cDoNx0bUHcJqTOnGcJcK0AhNKMm2VxalTho.zlgIV3imqf4bw6-TzGZM0SjQ88ZEK8nmGmV25Qzhw0M%26dib_tag%3Dse%26keywords%3Dwomens%2Bclothing%26qid%3D1779860501%26sr%3D8-60-spons%26aref%3DU5jt24q6ad%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1&aref=U5jt24q6ad&sp_cr=ZAZ"
    },
    {
        "category": "Kids Clothing",
        "productName": "A.T.U.N. (ALL THINGS UBER NICE)",
        "price": "639",
        "rating": "3.0 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 24,
        "discountPercentage": "16%",
        "imageUrl": "https://m.media-amazon.com/images/I/51WY8fUGkjL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo1NjgyMDQ4NjUyMTkyNTY3OjE3Nzk4NjA1MjU6c3BfYXRmOjMwMTAxMDk2ODg4MDUzMjo6MDo6&url=%2FT-U-N-ALL-THINGS-UBER-NICE%2Fdp%2FB0GLPYMJR4%2Fref%3Dsr_1_1_sspa%3Fdib%3DeyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk%26dib_tag%3Dse%26keywords%3Dkids%2Bclothing%26qid%3D1779860525%26sr%3D8-1-spons%26aref%3DLdQ1246WiI%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=LdQ1246WiI&sp_cr=ZAZ"
    },
    {
        "category": "Kids Clothing",
        "productName": "A.T.U.N. (ALL THINGS UBER NICE)",
        "price": "549",
        "rating": "3.9 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 31,
        "discountPercentage": "24%",
        "imageUrl": "https://m.media-amazon.com/images/I/51YUghCW56L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo1NjgyMDQ4NjUyMTkyNTY3OjE3Nzk4NjA1MjU6c3BfYXRmOjMwMTAxMDk2ODkxMDgzMjo6MDo6&url=%2FT-U-N-ALL-THINGS-UBER-NICE%2Fdp%2FB0GLPLCG92%2Fref%3Dsr_1_2_sspa%3Fdib%3DeyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk%26dib_tag%3Dse%26keywords%3Dkids%2Bclothing%26qid%3D1779860525%26sr%3D8-2-spons%26aref%3DdkHXpKpiPz%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=dkHXpKpiPz&sp_cr=ZAZ"
    },
    {
        "category": "Kids Clothing",
        "productName": "A.T.U.N. (ALL THINGS UBER NICE)",
        "price": "999",
        "rating": "N/A",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "13%",
        "imageUrl": "https://m.media-amazon.com/images/I/51fYLaMkRDL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo1NjgyMDQ4NjUyMTkyNTY3OjE3Nzk4NjA1MjU6c3BfYXRmOjMwMTAxMDk2ODg3MzgzMjo6MDo6&url=%2FT-U-N-ALL-THINGS-UBER-NICE%2Fdp%2FB0GLPLJ2KC%2Fref%3Dsr_1_3_sspa%3Fdib%3DeyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk%26dib_tag%3Dse%26keywords%3Dkids%2Bclothing%26qid%3D1779860525%26sr%3D8-3-spons%26aref%3DwE9SxeKmf8%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=wE9SxeKmf8&sp_cr=ZAZ"
    },
    {
        "category": "Kids Clothing",
        "productName": "A.T.U.N. (ALL THINGS UBER NICE)",
        "price": "599",
        "rating": "N/A",
        "stockStatus": "In Stock",
        "stockQuantity": 20,
        "discountPercentage": "68%",
        "imageUrl": "https://m.media-amazon.com/images/I/41dXbPEgL0L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo1NjgyMDQ4NjUyMTkyNTY3OjE3Nzk4NjA1MjU6c3BfYXRmOjMwMTAxMDk2ODg5OTIzMjo6MDo6&url=%2FT-U-N-ALL-THINGS-UBER-NICE%2Fdp%2FB0GLPMWXMN%2Fref%3Dsr_1_4_sspa%3Fdib%3DeyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk%26dib_tag%3Dse%26keywords%3Dkids%2Bclothing%26qid%3D1779860525%26sr%3D8-4-spons%26aref%3D02hahNpNkc%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=02hahNpNkc&sp_cr=ZAZ"
    },
    {
        "category": "Kids Clothing",
        "productName": "Generic",
        "price": "230",
        "rating": "3.8 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 14,
        "discountPercentage": "14%",
        "imageUrl": "https://m.media-amazon.com/images/I/41smUl33D3L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/BareBliss-fashionable-Stylish-Clothing-2-3Y/dp/B0G4B3HYG8/ref=sr_1_5?dib=eyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk&dib_tag=se&keywords=kids+clothing&qid=1779860525&sr=8-5"
    },
    {
        "category": "Kids Clothing",
        "productName": "Toonyport",
        "price": "519",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 9,
        "discountPercentage": "49%",
        "imageUrl": "https://m.media-amazon.com/images/I/71or+A8hVFL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Toonyport-Summer-T-shirts-Shorts-Multicolor/dp/B0D8THZHZ7/ref=sr_1_6?dib=eyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk&dib_tag=se&keywords=kids+clothing&qid=1779860525&sr=8-6"
    },
    {
        "category": "Kids Clothing",
        "productName": "Googo Gaaga",
        "price": "532",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 12,
        "discountPercentage": "52%",
        "imageUrl": "https://m.media-amazon.com/images/I/51Qy6ffb9IL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Googo-Gaaga-Sleeves-Tshirt-Cotton/dp/B07YL3879B/ref=sr_1_7?dib=eyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk&dib_tag=se&keywords=kids+clothing&qid=1779860525&sr=8-7"
    },
    {
        "category": "Kids Clothing",
        "productName": "Generic",
        "price": "199",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 35,
        "discountPercentage": "21%",
        "imageUrl": "https://m.media-amazon.com/images/I/61UqfP3eeYL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Sleeveless-Cotton-T-Shirt-Stylish-Toddlers/dp/B0GW915Y25/ref=sr_1_8?dib=eyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk&dib_tag=se&keywords=kids+clothing&qid=1779860525&sr=8-8"
    },
    {
        "category": "Kids Clothing",
        "productName": "URBAN OX",
        "price": "477",
        "rating": "3.6 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 40,
        "discountPercentage": "15%",
        "imageUrl": "https://m.media-amazon.com/images/I/61Gx55Fcn-L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/URBAN-OX-Stylish-Multi-Color-Comfortable/dp/B0DFWMBHY5/ref=sr_1_9?dib=eyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk&dib_tag=se&keywords=kids+clothing&qid=1779860525&sr=8-9"
    },
    {
        "category": "Kids Clothing",
        "productName": "Kuchipoo",
        "price": "624",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 10,
        "discountPercentage": "19%",
        "imageUrl": "https://m.media-amazon.com/images/I/71yAPXtG-0L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Kuchipoo-Regular-T-Shirts-MKUC-BSUT-141-Multi-Colored/dp/B0F7HVVC9X/ref=sr_1_10?dib=eyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk&dib_tag=se&keywords=kids+clothing&qid=1779860525&sr=8-10"
    },
    {
        "category": "Kids Clothing",
        "productName": "Kuchipoo",
        "price": "698",
        "rating": "4.3 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "65%",
        "imageUrl": "https://m.media-amazon.com/images/I/71tmBLM6bEL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Kuchipoo-Regular-T-Shirts-KUC-PSUT-171-Multi-Colored/dp/B0FJFCWPN4/ref=sr_1_11?dib=eyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk&dib_tag=se&keywords=kids+clothing&qid=1779860525&sr=8-11"
    },
    {
        "category": "Kids Clothing",
        "productName": "Bold N Elegant",
        "price": "469",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "30%",
        "imageUrl": "https://m.media-amazon.com/images/I/511jcn-nkkL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Bold-Elegant-Printed-T-Shirt-Clothing/dp/B0FJMM6GZN/ref=sr_1_12?dib=eyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk&dib_tag=se&keywords=kids+clothing&qid=1779860525&sr=8-12"
    },
    {
        "category": "Kids Clothing",
        "productName": "Kuchipoo",
        "price": "626",
        "rating": "4.6 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "22%",
        "imageUrl": "https://m.media-amazon.com/images/I/71Q73q899-L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Kuchipoo-Regular-T-Shirts-KUC-BSUT-129-Multi-Colored/dp/B0F8VZCB98/ref=sr_1_13?dib=eyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk&dib_tag=se&keywords=kids+clothing&qid=1779860525&sr=8-13"
    },
    {
        "category": "Kids Clothing",
        "productName": "Generic",
        "price": "499",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 28,
        "discountPercentage": "55%",
        "imageUrl": "https://m.media-amazon.com/images/I/51ZcMc75foL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Indhrani-Clothes-Comfortable-Playtime-Designed/dp/B0GK7M8KH7/ref=sr_1_14?dib=eyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk&dib_tag=se&keywords=kids+clothing&qid=1779860525&sr=8-14"
    },
    {
        "category": "Kids Clothing",
        "productName": "Vikita Enterprise",
        "price": "428",
        "rating": "3.8 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 28,
        "discountPercentage": "66%",
        "imageUrl": "https://m.media-amazon.com/images/I/51cw1xiL94L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Vikita-Enterprise-Printed-Hosiery-Regular/dp/B0DV3PR35Y/ref=sr_1_15?dib=eyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk&dib_tag=se&keywords=kids+clothing&qid=1779860525&sr=8-15"
    },
    {
        "category": "Kids Clothing",
        "productName": "Kuchipoo",
        "price": "684",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 4,
        "discountPercentage": "22%",
        "imageUrl": "https://m.media-amazon.com/images/I/71+iFiaFviL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Kuchipoo-Regular-T-Shirts-KUC-PSUT-169-Multi-Colored/dp/B0FKHC77XG/ref=sr_1_16?dib=eyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk&dib_tag=se&keywords=kids+clothing&qid=1779860525&sr=8-16"
    },
    {
        "category": "Kids Clothing",
        "productName": "Generic",
        "price": "473",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 5,
        "discountPercentage": "27%",
        "imageUrl": "https://m.media-amazon.com/images/I/61VOwadukcL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Unisex-Cotton-T-shirt-Comfort-Season/dp/B0GFY4XYDR/ref=sr_1_17?dib=eyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk&dib_tag=se&keywords=kids+clothing&qid=1779860525&sr=8-17"
    },
    {
        "category": "Kids Clothing",
        "productName": "Kuchipoo",
        "price": "521",
        "rating": "4.3 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 26,
        "discountPercentage": "38%",
        "imageUrl": "https://m.media-amazon.com/images/I/71cNvE0zI2L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Kuchipoo-Regular-Cotton-KUC-SHT-139-Multicolor/dp/B0CVVBTQ2J/ref=sr_1_18?dib=eyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk&dib_tag=se&keywords=kids+clothing&qid=1779860525&sr=8-18"
    },
    {
        "category": "Kids Clothing",
        "productName": "Hopscotch",
        "price": "811",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "15%",
        "imageUrl": "https://m.media-amazon.com/images/I/512OCgOX5yL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Hopscotch-Animal-Print-T-shirtDungaree-Months/dp/B08GZC5LTS/ref=sr_1_19?dib=eyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk&dib_tag=se&keywords=kids+clothing&qid=1779860525&sr=8-19"
    },
    {
        "category": "Kids Clothing",
        "productName": "Generic",
        "price": "263",
        "rating": "3.8 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "27%",
        "imageUrl": "https://m.media-amazon.com/images/I/61Zd158UVWL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/fashionable-Cotton-Co-ord-Summer-Regular/dp/B0GPFZJYFQ/ref=sr_1_20?dib=eyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk&dib_tag=se&keywords=kids+clothing&qid=1779860525&sr=8-20"
    },
    {
        "category": "Kids Clothing",
        "productName": "Generic",
        "price": "399",
        "rating": "3.7 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 4,
        "discountPercentage": "32%",
        "imageUrl": "https://m.media-amazon.com/images/I/31Ub3JJKE+L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo1NjgyMDQ4NjUyMTkyNTY3OjE3Nzk4NjA1MjU6c3BfbXRmOjMwMTAzNzU1Mzk3NjQzMjo6MDo6&url=%2FKids-Unisex-Dyed-Item-9-10%2Fdp%2FB0D4WNYWGN%2Fref%3Dsr_1_21_sspa%3Fdib%3DeyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk%26dib_tag%3Dse%26keywords%3Dkids%2Bclothing%26qid%3D1779860525%26sr%3D8-21-spons%26aref%3DrZB8NTaVHv%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1&aref=rZB8NTaVHv&sp_cr=ZAZ"
    },
    {
        "category": "Kids Clothing",
        "productName": "KYRENA",
        "price": "499",
        "rating": "N/A",
        "stockStatus": "In Stock",
        "stockQuantity": 48,
        "discountPercentage": "46%",
        "imageUrl": "https://m.media-amazon.com/images/I/615G0muZIqL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo1NjgyMDQ4NjUyMTkyNTY3OjE3Nzk4NjA1MjU6c3BfbXRmOjMwMDkzODI4MzEwNzEzMjo6MDo6&url=%2FKYRENA-Regular-Printed-Clothing-Comfortable%2Fdp%2FB0GHRJCWT7%2Fref%3Dsr_1_22_sspa%3Fdib%3DeyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk%26dib_tag%3Dse%26keywords%3Dkids%2Bclothing%26qid%3D1779860525%26sr%3D8-22-spons%26aref%3Dt4qSduCcHY%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1&aref=t4qSduCcHY&sp_cr=ZAZ"
    },
    {
        "category": "Kids Clothing",
        "productName": "Little Star by Kitex USA",
        "price": "799",
        "rating": "N/A",
        "stockStatus": "In Stock",
        "stockQuantity": 45,
        "discountPercentage": "26%",
        "imageUrl": "https://m.media-amazon.com/images/I/419RlkeVJOL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo1NjgyMDQ4NjUyMTkyNTY3OjE3Nzk4NjA1MjU6c3BfbXRmOjMwMTA2NDg2NTE5OTQzMjo6MDo6&url=%2FLittle-Star-Kitex-USA-Stretchable%2Fdp%2FB0GJLXNMGW%2Fref%3Dsr_1_23_sspa%3Fdib%3DeyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk%26dib_tag%3Dse%26keywords%3Dkids%2Bclothing%26qid%3D1779860525%26sr%3D8-23-spons%26aref%3DRnQKKWbdUb%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1&aref=RnQKKWbdUb&sp_cr=ZAZ"
    },
    {
        "category": "Kids Clothing",
        "productName": "A.T.U.N. (ALL THINGS UBER NICE)",
        "price": "739",
        "rating": "4.5 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 9,
        "discountPercentage": "66%",
        "imageUrl": "https://m.media-amazon.com/images/I/51UkTm0oX8L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo1NjgyMDQ4NjUyMTkyNTY3OjE3Nzk4NjA1MjU6c3BfbXRmOjMwMTAxMDk2ODg4MDQzMjo6MDo6&url=%2FT-U-N-ALL-THINGS-UBER-NICE%2Fdp%2FB0GLP1L6BT%2Fref%3Dsr_1_24_sspa%3Fdib%3DeyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk%26dib_tag%3Dse%26keywords%3Dkids%2Bclothing%26qid%3D1779860525%26sr%3D8-24-spons%26aref%3DJe6n7Nb74n%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1&aref=Je6n7Nb74n&sp_cr=ZAZ"
    },
    {
        "category": "Kids Clothing",
        "productName": "Toonyport",
        "price": "529",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 2,
        "discountPercentage": "28%",
        "imageUrl": "https://m.media-amazon.com/images/I/71u9p1TKjoL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Toonyport-Summer-T-shirts-Shorts-Multicolors/dp/B0D8TMSCDS/ref=sr_1_25?dib=eyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk&dib_tag=se&keywords=kids+clothing&qid=1779860525&sr=8-25"
    },
    {
        "category": "Kids Clothing",
        "productName": "Dsnsenterprize",
        "price": "499",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 30,
        "discountPercentage": "32%",
        "imageUrl": "https://m.media-amazon.com/images/I/61NhA3gj0oL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Dsnsenterprize-Printed-Collared-Spandex-DSNS_10130/dp/B0DG59XSK7/ref=sr_1_26?dib=eyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk&dib_tag=se&keywords=kids+clothing&qid=1779860525&sr=8-26"
    },
    {
        "category": "Kids Clothing",
        "productName": "MI Kidz",
        "price": "479",
        "rating": "4.3 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "27%",
        "imageUrl": "https://m.media-amazon.com/images/I/71KPInxRYmL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/MI-Kidz-Cotton-Collared-T-Shirt/dp/B0D7YTRNXJ/ref=sr_1_27?dib=eyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk&dib_tag=se&keywords=kids+clothing&qid=1779860525&sr=8-27"
    },
    {
        "category": "Kids Clothing",
        "productName": "White Bubble",
        "price": "293",
        "rating": "3.8 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "47%",
        "imageUrl": "https://m.media-amazon.com/images/I/61spsbEyOrL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/White-Bubble-Innerwear-Sleeveless-Multicolour/dp/B0G4F4DMJ5/ref=sr_1_28?dib=eyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk&dib_tag=se&keywords=kids+clothing&qid=1779860525&sr=8-28"
    },
    {
        "category": "Kids Clothing",
        "productName": "Generic",
        "price": "185",
        "rating": "2.4 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 36,
        "discountPercentage": "21%",
        "imageUrl": "https://m.media-amazon.com/images/I/31stVkVEN4L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Printed-Cotton-Blend-Bottom-Clothing/dp/B0FLTW35R7/ref=sr_1_29?dib=eyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk&dib_tag=se&keywords=kids+clothing&qid=1779860525&sr=8-29"
    },
    {
        "category": "Kids Clothing",
        "productName": "minicult",
        "price": "653",
        "rating": "4.3 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 36,
        "discountPercentage": "27%",
        "imageUrl": "https://m.media-amazon.com/images/I/714YKHr9K-L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/minicult-Unisex-Regular-Character-Multicolour/dp/B0F2CMS8CH/ref=sr_1_30?dib=eyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk&dib_tag=se&keywords=kids+clothing&qid=1779860525&sr=8-30"
    },
    {
        "category": "Kids Clothing",
        "productName": "Googo Gaaga",
        "price": "532",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 19,
        "discountPercentage": "68%",
        "imageUrl": "https://m.media-amazon.com/images/I/51a0QHAi7jL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Googo-Gaaga-Printed-Clothing-Multicolor/dp/B0B5VFX1Y9/ref=sr_1_31?dib=eyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk&dib_tag=se&keywords=kids+clothing&qid=1779860525&sr=8-31"
    },
    {
        "category": "Kids Clothing",
        "productName": "Kuchipoo",
        "price": "557",
        "rating": "4.3 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 36,
        "discountPercentage": "51%",
        "imageUrl": "https://m.media-amazon.com/images/I/61+IKLDFDfL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Kuchipoo-Regular-Baby-Girls-Pyjamas/dp/B0DNXMNFK2/ref=sr_1_32?dib=eyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk&dib_tag=se&keywords=kids+clothing&qid=1779860525&sr=8-32"
    },
    {
        "category": "Kids Clothing",
        "productName": "Generic",
        "price": "473",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "68%",
        "imageUrl": "https://m.media-amazon.com/images/I/61IxiEKsHLL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Unisex-Cotton-T-shirt-Comfort-Season/dp/B0GFY9CJQS/ref=sr_1_33?dib=eyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk&dib_tag=se&keywords=kids+clothing&qid=1779860525&sr=8-33"
    },
    {
        "category": "Kids Clothing",
        "productName": "Lush Plush",
        "price": "398",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "13%",
        "imageUrl": "https://m.media-amazon.com/images/I/71lchQx-6yL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Lush-Plush-Colour-Vest-Lightweight/dp/B0F9TZ4XDN/ref=sr_1_34?dib=eyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk&dib_tag=se&keywords=kids+clothing&qid=1779860525&sr=8-34"
    },
    {
        "category": "Kids Clothing",
        "productName": "Ninas",
        "price": "399",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 30,
        "discountPercentage": "20%",
        "imageUrl": "https://m.media-amazon.com/images/I/41Huyl8q5wL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Ninas-Girls-Solid-Cotton-Shorts/dp/B0FGVFXDD6/ref=sr_1_35?dib=eyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk&dib_tag=se&keywords=kids+clothing&qid=1779860525&sr=8-35"
    },
    {
        "category": "Kids Clothing",
        "productName": "Kuchipoo",
        "price": "600",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 36,
        "discountPercentage": "69%",
        "imageUrl": "https://m.media-amazon.com/images/I/71wX0vZqTrL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Kuchipoo-Regular-T-Shirts-KUC-NSUT-152-Multi-Colored/dp/B0F66S2X68/ref=sr_1_36?dib=eyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk&dib_tag=se&keywords=kids+clothing&qid=1779860525&sr=8-36"
    },
    {
        "category": "Kids Clothing",
        "productName": "LOFN",
        "price": "442",
        "rating": "3.9 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 48,
        "discountPercentage": "21%",
        "imageUrl": "https://m.media-amazon.com/images/I/61lWtjIeSTL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Lofn-Cotton-Clothing-Girls-Printed/dp/B0CRQBNT26/ref=sr_1_37?dib=eyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk&dib_tag=se&keywords=kids+clothing&qid=1779860525&sr=8-37"
    },
    {
        "category": "Kids Clothing",
        "productName": "Generic",
        "price": "N/A",
        "rating": "N/A",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "34%",
        "imageUrl": "https://m.media-amazon.com/images/I/61zxn6D9wPL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Cotton-Clothing-T-Shirt-Toddler-Hosiery/dp/B0GYXBF7BF/ref=sr_1_38?dib=eyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk&dib_tag=se&keywords=kids+clothing&qid=1779860525&sr=8-38"
    },
    {
        "category": "Kids Clothing",
        "productName": "Generic",
        "price": "209",
        "rating": "1.0 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "33%",
        "imageUrl": "https://m.media-amazon.com/images/I/71iCO7AVI5L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Jersey-Tshirt-Kids-Boys-6-7Years-Multicolor-101/dp/B0GX6NWHP5/ref=sr_1_39?dib=eyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk&dib_tag=se&keywords=kids+clothing&qid=1779860525&sr=8-39"
    },
    {
        "category": "Kids Clothing",
        "productName": "Googo Gaaga",
        "price": "532",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "66%",
        "imageUrl": "https://m.media-amazon.com/images/I/614M8j0A6rL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Googo-Gaaga-T-shirt-Rainbow-Clothing/dp/B0F5QMP9TF/ref=sr_1_40?dib=eyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk&dib_tag=se&keywords=kids+clothing&qid=1779860525&sr=8-40"
    },
    {
        "category": "Kids Clothing",
        "productName": "FINEWAVE Lage Soft Dikhe Hot",
        "price": "629",
        "rating": "N/A",
        "stockStatus": "Limited Stock",
        "stockQuantity": 7,
        "discountPercentage": "10%",
        "imageUrl": "https://m.media-amazon.com/images/I/71jGgVUIS-L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/FINEWAVE-Summer-Clothing-Printed-Multicolor/dp/B0GY8J289Z/ref=sr_1_41?dib=eyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk&dib_tag=se&keywords=kids+clothing&qid=1779860525&sr=8-41"
    },
    {
        "category": "Kids Clothing",
        "productName": "Googo Gaaga",
        "price": "615",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 17,
        "discountPercentage": "23%",
        "imageUrl": "https://m.media-amazon.com/images/I/61X39luvv3L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Googo-Gaaga-Cotton-Sleeves-Sweatshirt/dp/B08M9PY7C5/ref=sr_1_42?dib=eyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk&dib_tag=se&keywords=kids+clothing&qid=1779860525&sr=8-42"
    },
    {
        "category": "Kids Clothing",
        "productName": "MENVY",
        "price": "459",
        "rating": "3.3 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 36,
        "discountPercentage": "35%",
        "imageUrl": "https://m.media-amazon.com/images/I/61BmOx9xEhL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/MENVY-Cotton-Casual-Outfit-Stylish/dp/B0GDQQR313/ref=sr_1_43?dib=eyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk&dib_tag=se&keywords=kids+clothing&qid=1779860525&sr=8-43"
    },
    {
        "category": "Kids Clothing",
        "productName": "Googo Gaaga",
        "price": "615",
        "rating": "4.3 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 47,
        "discountPercentage": "42%",
        "imageUrl": "https://m.media-amazon.com/images/I/71a-N6ZxCOL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Googogaaga-Cotton-Printed-Sweatshirt-Joggers/dp/B097RK8XR8/ref=sr_1_44?dib=eyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk&dib_tag=se&keywords=kids+clothing&qid=1779860525&sr=8-44"
    },
    {
        "category": "Kids Clothing",
        "productName": "BABY GO",
        "price": "431",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "34%",
        "imageUrl": "https://m.media-amazon.com/images/I/61mh56Au50L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/BABY-GO-Sleeves-Clothing-Clothes/dp/B0B8VKDRNC/ref=sr_1_45?dib=eyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk&dib_tag=se&keywords=kids+clothing&qid=1779860525&sr=8-45"
    },
    {
        "category": "Kids Clothing",
        "productName": "Ninas",
        "price": "399",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 1,
        "discountPercentage": "36%",
        "imageUrl": "https://m.media-amazon.com/images/I/3140HLXJgfL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Ninas-Girls-Solid-Cotton-Dungarees/dp/B0FY5WFPTX/ref=sr_1_46?dib=eyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk&dib_tag=se&keywords=kids+clothing&qid=1779860525&sr=8-46"
    },
    {
        "category": "Kids Clothing",
        "productName": "Gtoro",
        "price": "499",
        "rating": "5.0 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "50%",
        "imageUrl": "https://m.media-amazon.com/images/I/61Xs6a9F9FL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Gtoro-Stylish-Sleeve-Comfortable-Clothing/dp/B0GVKT7BQ8/ref=sr_1_47?dib=eyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk&dib_tag=se&keywords=kids+clothing&qid=1779860525&sr=8-47"
    },
    {
        "category": "Kids Clothing",
        "productName": "T2F",
        "price": "579",
        "rating": "4.4 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "47%",
        "imageUrl": "https://m.media-amazon.com/images/I/71XI0Toh0iL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/T2F-Printed-Nightgown-Nightdress-Sleepwear/dp/B0F4KZDP3S/ref=sr_1_48?dib=eyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk&dib_tag=se&keywords=kids+clothing&qid=1779860525&sr=8-48"
    },
    {
        "category": "Kids Clothing",
        "productName": "ZIPWELL",
        "price": "412",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 7,
        "discountPercentage": "18%",
        "imageUrl": "https://m.media-amazon.com/images/I/51eYSgmX-pL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/ZIPWELL-Unisex-Clothing-T-Shirt-Sleeveless/dp/B0FXB2XVDV/ref=sr_1_49?dib=eyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk&dib_tag=se&keywords=kids+clothing&qid=1779860525&sr=8-49"
    },
    {
        "category": "Kids Clothing",
        "productName": "Niren Enterprise",
        "price": "498",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "69%",
        "imageUrl": "https://m.media-amazon.com/images/I/611eRjfgeVL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Niren-Enterprise-Hornbill-Floral-Printed/dp/B0CMTF4YZF/ref=sr_1_50?dib=eyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk&dib_tag=se&keywords=kids+clothing&qid=1779860525&sr=8-50"
    },
    {
        "category": "Kids Clothing",
        "productName": "NammaBaby",
        "price": "679",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 14,
        "discountPercentage": "21%",
        "imageUrl": "https://m.media-amazon.com/images/I/81rtGqr3WVL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/NammaBaby-Cotton-Pajama-Infants-Multicolour/dp/B0719DTQ1B/ref=sr_1_51?dib=eyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk&dib_tag=se&keywords=kids+clothing&qid=1779860525&sr=8-51"
    },
    {
        "category": "Kids Clothing",
        "productName": "Max",
        "price": "449",
        "rating": "4.4 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "16%",
        "imageUrl": "https://m.media-amazon.com/images/I/61IJb8217ML._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Max-Regular-Jeans-P23DBD01DARK-Blue_Dark/dp/B0CCPC338X/ref=sr_1_52?dib=eyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk&dib_tag=se&keywords=kids+clothing&qid=1779860525&sr=8-52"
    },
    {
        "category": "Kids Clothing",
        "productName": "BONUM",
        "price": "354",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 46,
        "discountPercentage": "13%",
        "imageUrl": "https://m.media-amazon.com/images/I/51VfNx2xsDL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/BONUM-Cotton-Half-Sleeves-Clothes/dp/B0GBLCK5LS/ref=sr_1_53?dib=eyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk&dib_tag=se&keywords=kids+clothing&qid=1779860525&sr=8-53"
    },
    {
        "category": "Kids Clothing",
        "productName": "First Kick",
        "price": "399",
        "rating": "4.4 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 30,
        "discountPercentage": "31%",
        "imageUrl": "https://m.media-amazon.com/images/I/61S4+YtnqtL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/First-Kick-Presents-Summer-Clothes/dp/B0D9SHRKB7/ref=sr_1_54?dib=eyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk&dib_tag=se&keywords=kids+clothing&qid=1779860525&sr=8-54"
    },
    {
        "category": "Kids Clothing",
        "productName": "Generic",
        "price": "499",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 49,
        "discountPercentage": "32%",
        "imageUrl": "https://m.media-amazon.com/images/I/51jjgc9i0AL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/T-shirt-Printed-Half-Sleeves-Clothing/dp/B0D14MP29X/ref=sr_1_55?dib=eyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk&dib_tag=se&keywords=kids+clothing&qid=1779860525&sr=8-55"
    },
    {
        "category": "Kids Clothing",
        "productName": "LuvLap",
        "price": "579",
        "rating": "4.4 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 30,
        "discountPercentage": "19%",
        "imageUrl": "https://m.media-amazon.com/images/I/81gXW3J6RWL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/LuvLap-Sleeve-T-Shirt-Printed-Multicolour/dp/B0DNF7Q1B5/ref=sr_1_56?dib=eyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk&dib_tag=se&keywords=kids+clothing&qid=1779860525&sr=8-56"
    },
    {
        "category": "Kids Clothing",
        "productName": "A.T.U.N. (ALL THINGS UBER NICE)",
        "price": "1,169",
        "rating": "N/A",
        "stockStatus": "Limited Stock",
        "stockQuantity": 1,
        "discountPercentage": "15%",
        "imageUrl": "https://m.media-amazon.com/images/I/71bFs7XQOiL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo1NjgyMDQ4NjUyMTkyNTY3OjE3Nzk4NjA1MjU6c3BfYnRmOjMwMTAxMDk2ODg4MDgzMjo6MDo6&url=%2FT-U-N-ALL-THINGS-UBER-NICE%2Fdp%2FB0GLPF3DFH%2Fref%3Dsr_1_57_sspa%3Fdib%3DeyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk%26dib_tag%3Dse%26keywords%3Dkids%2Bclothing%26qid%3D1779860525%26sr%3D8-57-spons%26aref%3DQ6Tt4RZGsj%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1&aref=Q6Tt4RZGsj&sp_cr=ZAZ"
    },
    {
        "category": "Kids Clothing",
        "productName": "A.T.U.N. (ALL THINGS UBER NICE)",
        "price": "1,039",
        "rating": "3.0 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 1,
        "discountPercentage": "20%",
        "imageUrl": "https://m.media-amazon.com/images/I/41D1bF4LqKL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo1NjgyMDQ4NjUyMTkyNTY3OjE3Nzk4NjA1MjU6c3BfYnRmOjMwMTAxMDk2ODkwMTczMjo6MDo6&url=%2FT-U-N-ALL-THINGS-UBER-NICE%2Fdp%2FB0GLPMF684%2Fref%3Dsr_1_58_sspa%3Fdib%3DeyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk%26dib_tag%3Dse%26keywords%3Dkids%2Bclothing%26qid%3D1779860525%26sr%3D8-58-spons%26aref%3DcxIVtssjQo%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1&aref=cxIVtssjQo&sp_cr=ZAZ"
    },
    {
        "category": "Kids Clothing",
        "productName": "POLKA TOTS",
        "price": "649",
        "rating": "4.4 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 11,
        "discountPercentage": "70%",
        "imageUrl": "https://m.media-amazon.com/images/I/61CEfHbnb8L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo1NjgyMDQ4NjUyMTkyNTY3OjE3Nzk4NjA1MjU6c3BfYnRmOjMwMDk1MjEzNjAyNDEzMjo6MDo6&url=%2FPOLKA-TOTS-Traditional-Nightwear-Dinosaur%2Fdp%2FB0FTVY5NMH%2Fref%3Dsr_1_59_sspa%3Fdib%3DeyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk%26dib_tag%3Dse%26keywords%3Dkids%2Bclothing%26qid%3D1779860525%26sr%3D8-59-spons%26aref%3DVHQdLX5eHx%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1&aref=VHQdLX5eHx&sp_cr=ZAZ"
    },
    {
        "category": "Kids Clothing",
        "productName": "Nap Chief",
        "price": "990",
        "rating": "4.4 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 16,
        "discountPercentage": "44%",
        "imageUrl": "https://m.media-amazon.com/images/I/51RwWeOjA3L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo1NjgyMDQ4NjUyMTkyNTY3OjE3Nzk4NjA1MjU6c3BfYnRmOjMwMTEwMjc4MzEzNjIzMjo6MDo6&url=%2FNap-Chief-Classic-Spidey-AV4078Y_Red_9-10%2Fdp%2FB0H21LSSH6%2Fref%3Dsr_1_60_sspa%3Fdib%3DeyJ2IjoiMSJ9.6_Ehh48MtPBoqlW8uyL1QwBQZTUSHuuUg4KNvjRrpDJxfLEYHJ5R3W1USGevhm9Kk6rS5xHjCIFDy47MxFCiz5R0vnoJzNHu44MPN6-K0WcWv9SjpfB6kxoOvHu8mI9V98DggoCkbAoXIcOJDnPquFGu_wAN8oDwHFaAfugUEFeYVSAnRfEMlHQQi0wrxA3R8yIONo2rs1hwXUq5NR6EFoLEJYmu-MnHz8ukRbKegdbI4iyCC1W5J8sjAdwaXR4wVJRO0u7DWh2kYiddIZishLlBLZlcSA7IcVv7IIrrmLo.sXZ2xpfXxItOxCiZDp_rtYczQMATDPqStykhGHvfMyk%26dib_tag%3Dse%26keywords%3Dkids%2Bclothing%26qid%3D1779860525%26sr%3D8-60-spons%26aref%3DxoP3xNd6qD%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1&aref=xoP3xNd6qD&sp_cr=ZAZ"
    },
    {
        "category": "Mens Shoes",
        "productName": "Boldfit",
        "price": "1,699",
        "rating": "4.3 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "22%",
        "imageUrl": "https://m.media-amazon.com/images/I/61aviqCzqFL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MToxNzYwMTg5MDAwOTE3OTIyOjE3Nzk4NjA1NDk6c3BfYXRmOjMwMTAzNjQxMDUxNDIzMjo6MDo6&url=%2FBoldfit-Sneakers-Men-Casual-Breathable%2Fdp%2FB0GFX5MLRS%2Fref%3Dsr_1_1_sspa%3Fdib%3DeyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY%26dib_tag%3Dse%26keywords%3Dmens%2Bshoes%26qid%3D1779860549%26sr%3D8-1-spons%26aref%3DLbzoU4mxa6%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=LbzoU4mxa6&sp_cr=ZAZ"
    },
    {
        "category": "Mens Shoes",
        "productName": "Centrino",
        "price": "799",
        "rating": "3.8 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 49,
        "discountPercentage": "70%",
        "imageUrl": "https://m.media-amazon.com/images/I/71IVDpzwBIL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MToxNzYwMTg5MDAwOTE3OTIyOjE3Nzk4NjA1NDk6c3BfYXRmOjMwMDQ0NTEyNzk3NzYzMjo6MDo6&url=%2FCentrino-Mens-Black-Moccasins-8-3392-04%2Fdp%2FB08NZDPFP1%2Fref%3Dsr_1_2_sspa%3Fdib%3DeyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY%26dib_tag%3Dse%26keywords%3Dmens%2Bshoes%26qid%3D1779860549%26sr%3D8-2-spons%26aref%3DysrBUjSMMy%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=ysrBUjSMMy&sp_cr=ZAZ"
    },
    {
        "category": "Mens Shoes",
        "productName": "DOCTOR EXTRA SOFT",
        "price": "1,294",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 21,
        "discountPercentage": "7%",
        "imageUrl": "https://m.media-amazon.com/images/I/71-4Ou0XDjL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MToxNzYwMTg5MDAwOTE3OTIyOjE3Nzk4NjA1NDk6c3BfYXRmOjMwMDA4MzI1OTMzNDczMjo6MDo6&url=%2FDOCTOR-EXTRA-SOFT-Lightweight-D-2002%2Fdp%2FB0CKWG2TPH%2Fref%3Dsr_1_3_sspa%3Fdib%3DeyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY%26dib_tag%3Dse%26keywords%3Dmens%2Bshoes%26qid%3D1779860549%26sr%3D8-3-spons%26aref%3Dqtyu5oRdxK%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=qtyu5oRdxK&sp_cr=ZAZ"
    },
    {
        "category": "Mens Shoes",
        "productName": "ESPERTO",
        "price": "999",
        "rating": "N/A",
        "stockStatus": "In Stock",
        "stockQuantity": 18,
        "discountPercentage": "63%",
        "imageUrl": "https://m.media-amazon.com/images/I/61q9UnnJKML._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MToxNzYwMTg5MDAwOTE3OTIyOjE3Nzk4NjA1NDk6c3BfYXRmOjMwMTEwNjc0MzIzMTEzMjo6MDo6&url=%2FESPERTO-Moccasin-Footwear-System-Numeric%2Fdp%2FB0H1M5MMSR%2Fref%3Dsr_1_4_sspa%3Fdib%3DeyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY%26dib_tag%3Dse%26keywords%3Dmens%2Bshoes%26qid%3D1779860549%26sr%3D8-4-spons%26aref%3DRax2wLZzfh%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=Rax2wLZzfh&sp_cr=ZAZ"
    },
    {
        "category": "Mens Shoes",
        "productName": "GENERIC",
        "price": "231",
        "rating": "3.1 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 9,
        "discountPercentage": "68%",
        "imageUrl": "https://m.media-amazon.com/images/I/51hmXQ3rIOL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Fashion-Trendy-Stylish-Shoe-Black/dp/B0F143XKPS/ref=sr_1_5?dib=eyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY&dib_tag=se&keywords=mens+shoes&qid=1779860549&sr=8-5"
    },
    {
        "category": "Mens Shoes",
        "productName": "ASIAN",
        "price": "599",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 3,
        "discountPercentage": "45%",
        "imageUrl": "https://m.media-amazon.com/images/I/61utX8kBDlL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/ASIAN-Wonder-13-Sports-Running-Shoes/dp/B01N54ZM9W/ref=sr_1_6?dib=eyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY&dib_tag=se&keywords=mens+shoes&qid=1779860549&sr=8-6"
    },
    {
        "category": "Mens Shoes",
        "productName": "ASIAN",
        "price": "799",
        "rating": "3.7 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 30,
        "discountPercentage": "28%",
        "imageUrl": "https://m.media-amazon.com/images/I/81R6YbNKOzL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/ASIAN-MEXICO-11-Synthetic-Lightweight-Comfortable/dp/B0DBD9KHVF/ref=sr_1_7?dib=eyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY&dib_tag=se&keywords=mens+shoes&qid=1779860549&sr=8-7"
    },
    {
        "category": "Mens Shoes",
        "productName": "Campus",
        "price": "1,139",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 20,
        "discountPercentage": "51%",
        "imageUrl": "https://m.media-amazon.com/images/I/71RiFU3KvLL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Campus-First-L-Gry-Running-Shoes/dp/B08WPM5D99/ref=sr_1_8?dib=eyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY&dib_tag=se&keywords=mens+shoes&qid=1779860549&sr=8-8"
    },
    {
        "category": "Mens Shoes",
        "productName": "Bata",
        "price": "449",
        "rating": "3.7 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 19,
        "discountPercentage": "47%",
        "imageUrl": "https://m.media-amazon.com/images/I/51zA3Xl-12L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Bata-Men-Casuals-Slipon-Shoes/dp/B00SWEFA1U/ref=sr_1_9?dib=eyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY&dib_tag=se&keywords=mens+shoes&qid=1779860549&sr=8-9"
    },
    {
        "category": "Mens Shoes",
        "productName": "BRUTON",
        "price": "549",
        "rating": "3.6 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 25,
        "discountPercentage": "32%",
        "imageUrl": "https://m.media-amazon.com/images/I/719uGTxwMWL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/BRUTON-Sport-Shoes-Running-White/dp/B0F4KTYFF7/ref=sr_1_10?dib=eyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY&dib_tag=se&keywords=mens+shoes&qid=1779860549&sr=8-10"
    },
    {
        "category": "Mens Shoes",
        "productName": "Campus",
        "price": "729",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 11,
        "discountPercentage": "21%",
        "imageUrl": "https://m.media-amazon.com/images/I/61xIgcDynvL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Campus-OXYFIT-Walking-Shoes-India/dp/B09RPCVBKY/ref=sr_1_11?dib=eyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY&dib_tag=se&keywords=mens+shoes&qid=1779860549&sr=8-11"
    },
    {
        "category": "Mens Shoes",
        "productName": "ASIAN",
        "price": "674",
        "rating": "3.8 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 25,
        "discountPercentage": "55%",
        "imageUrl": "https://m.media-amazon.com/images/I/71ivYMOzncL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/ASIAN-TARZAN-04-Sneaker-Synthetic-Lightweight/dp/B0DJD89THD/ref=sr_1_12?dib=eyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY&dib_tag=se&keywords=mens+shoes&qid=1779860549&sr=8-12"
    },
    {
        "category": "Mens Shoes",
        "productName": "PUMA",
        "price": "1,549",
        "rating": "3.9 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "35%",
        "imageUrl": "https://m.media-amazon.com/images/I/51GOpp8rAJL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Puma-Dazzler-Black-Puma-Silver-Sneaker/dp/B09RGJCVW6/ref=sr_1_13?dib=eyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY&dib_tag=se&keywords=mens+shoes&qid=1779860549&sr=8-13"
    },
    {
        "category": "Mens Shoes",
        "productName": "Campus",
        "price": "899",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 45,
        "discountPercentage": "61%",
        "imageUrl": "https://m.media-amazon.com/images/I/61XwYMOyfwL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Campus-Wells-Running-Shoes-10-UK/dp/B08VGP9PB7/ref=sr_1_14?dib=eyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY&dib_tag=se&keywords=mens+shoes&qid=1779860549&sr=8-14"
    },
    {
        "category": "Mens Shoes",
        "productName": "Campus",
        "price": "1,169",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "28%",
        "imageUrl": "https://m.media-amazon.com/images/I/61rWcMP4s9L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Campus-First-B-ORG-Running-Shoes/dp/B0915349Y4/ref=sr_1_15?dib=eyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY&dib_tag=se&keywords=mens+shoes&qid=1779860549&sr=8-15"
    },
    {
        "category": "Mens Shoes",
        "productName": "SPARX",
        "price": "664",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 29,
        "discountPercentage": "51%",
        "imageUrl": "https://m.media-amazon.com/images/I/61UoRfL+urL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/SPARX-SD0439G-White-Sneakers-SD0439G_WHWH0008/dp/B07Y5BKQ5R/ref=sr_1_16?dib=eyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY&dib_tag=se&keywords=mens+shoes&qid=1779860549&sr=8-16"
    },
    {
        "category": "Mens Shoes",
        "productName": "SPARX",
        "price": "729",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 14,
        "discountPercentage": "32%",
        "imageUrl": "https://m.media-amazon.com/images/I/71Qoyw-YcdL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/SPARX-SM-648-Enhanced-Durability/dp/B08K9KNXT5/ref=sr_1_17?dib=eyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY&dib_tag=se&keywords=mens+shoes&qid=1779860549&sr=8-17"
    },
    {
        "category": "Mens Shoes",
        "productName": "Campus",
        "price": "969",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 41,
        "discountPercentage": "27%",
        "imageUrl": "https://m.media-amazon.com/images/I/61lSvGVT2PL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Campus-Hurricane-BTGRN-BLK-Running-Shoes/dp/B09HCDZ8JJ/ref=sr_1_18?dib=eyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY&dib_tag=se&keywords=mens+shoes&qid=1779860549&sr=8-18"
    },
    {
        "category": "Mens Shoes",
        "productName": "Campus",
        "price": "N/A",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 18,
        "discountPercentage": "28%",
        "imageUrl": "https://m.media-amazon.com/images/I/61DtkP2ktlL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Campus-DRIVO-L-Sky-Running-Shoes/dp/B0FWKWPDDD/ref=sr_1_19?dib=eyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY&dib_tag=se&keywords=mens+shoes&qid=1779860549&sr=8-19"
    },
    {
        "category": "Mens Shoes",
        "productName": "HotStyle",
        "price": "267",
        "rating": "3.0 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "21%",
        "imageUrl": "https://m.media-amazon.com/images/I/51hSlt1CEhL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/HotStyle-First-Trendy-Stylish-Shoe/dp/B0G132S838/ref=sr_1_20?dib=eyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY&dib_tag=se&keywords=mens+shoes&qid=1779860549&sr=8-20"
    },
    {
        "category": "Mens Shoes",
        "productName": "FUEL",
        "price": "599",
        "rating": "N/A",
        "stockStatus": "Only Few Left",
        "stockQuantity": 23,
        "discountPercentage": "19%",
        "imageUrl": "https://m.media-amazon.com/images/I/71cQJlAjHiL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MToxNzYwMTg5MDAwOTE3OTIyOjE3Nzk4NjA1NDk6c3BfbXRmOjMwMTExMjQwNTkwMjQzMjo6MDo6&url=%2FFUEL-Sneaks-Mens-Sneakers-Stylish%2Fdp%2FB0FGDMDQN6%2Fref%3Dsr_1_21_sspa%3Fdib%3DeyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY%26dib_tag%3Dse%26keywords%3Dmens%2Bshoes%26qid%3D1779860549%26sr%3D8-21-spons%26aref%3Dmk2upn7vK9%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1&aref=mk2upn7vK9&sp_cr=ZAZ"
    },
    {
        "category": "Mens Shoes",
        "productName": "ATHCO",
        "price": "749",
        "rating": "3.7 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 45,
        "discountPercentage": "16%",
        "imageUrl": "https://m.media-amazon.com/images/I/71RT3cnoFQL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MToxNzYwMTg5MDAwOTE3OTIyOjE3Nzk4NjA1NDk6c3BfbXRmOjMwMDk1MTE0MzM3MzMzMjo6MDo6&url=%2FATHCO-Houston-Running-Shoes_09-ATHST-2%2Fdp%2FB0CWP73X44%2Fref%3Dsr_1_22_sspa%3Fdib%3DeyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY%26dib_tag%3Dse%26keywords%3Dmens%2Bshoes%26qid%3D1779860549%26sr%3D8-22-spons%26aref%3DQcGRozasi2%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1&aref=QcGRozasi2&sp_cr=ZAZ"
    },
    {
        "category": "Mens Shoes",
        "productName": "ATHCO",
        "price": "749",
        "rating": "3.9 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 34,
        "discountPercentage": "32%",
        "imageUrl": "https://m.media-amazon.com/images/I/71kG+P5sJmL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MToxNzYwMTg5MDAwOTE3OTIyOjE3Nzk4NjA1NDk6c3BfbXRmOjMwMDkyOTA2MjI0OTYzMjo6MDo6&url=%2FATHCO-Akron-Running-Shoes_9-ATHST-15%2Fdp%2FB0CMJGMFPL%2Fref%3Dsr_1_23_sspa%3Fdib%3DeyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY%26dib_tag%3Dse%26keywords%3Dmens%2Bshoes%26qid%3D1779860549%26sr%3D8-23-spons%26aref%3DcvCTa0QAlF%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1&aref=cvCTa0QAlF&sp_cr=ZAZ"
    },
    {
        "category": "Mens Shoes",
        "productName": "JQR",
        "price": "899",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "48%",
        "imageUrl": "https://m.media-amazon.com/images/I/71YC0hZ5RcL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MToxNzYwMTg5MDAwOTE3OTIyOjE3Nzk4NjA1NDk6c3BfbXRmOjMwMDQ2MjM2NjAwNTkzMjo6MDo6&url=%2FJQR-Sports-Running-Walking-Signature-Full-Wht-G%2Fdp%2FB0CPWMCF71%2Fref%3Dsr_1_24_sspa%3Fdib%3DeyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY%26dib_tag%3Dse%26keywords%3Dmens%2Bshoes%26qid%3D1779860549%26sr%3D8-24-spons%26aref%3DjeLy14u87h%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1&aref=jeLy14u87h&sp_cr=ZAZ"
    },
    {
        "category": "Mens Shoes",
        "productName": "Campus",
        "price": "729",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 14,
        "discountPercentage": "22%",
        "imageUrl": "https://m.media-amazon.com/images/I/91hmsGm-jYL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Campus-OXYFIT-D-Gry-Walking-Shoes/dp/B09RPC54GK/ref=sr_1_25?dib=eyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY&dib_tag=se&keywords=mens+shoes&qid=1779860549&sr=8-25"
    },
    {
        "category": "Mens Shoes",
        "productName": "Reebok",
        "price": "1,499",
        "rating": "3.8 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "5%",
        "imageUrl": "https://m.media-amazon.com/images/I/71hi7j5ta3L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Reebok-Stride-Runner-Running-Shoes/dp/B09SHVH6PP/ref=sr_1_26?dib=eyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY&dib_tag=se&keywords=mens+shoes&qid=1779860549&sr=8-26"
    },
    {
        "category": "Mens Shoes",
        "productName": "Bata",
        "price": "1,419",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 24,
        "discountPercentage": "27%",
        "imageUrl": "https://m.media-amazon.com/images/I/514N4bUR79L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Bata-Men-Casual-Derby-Shoes/dp/B09WYG14Y6/ref=sr_1_27?dib=eyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY&dib_tag=se&keywords=mens+shoes&qid=1779860549&sr=8-27"
    },
    {
        "category": "Mens Shoes",
        "productName": "Bata",
        "price": "838",
        "rating": "3.7 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 32,
        "discountPercentage": "34%",
        "imageUrl": "https://m.media-amazon.com/images/I/71rYxtbE8SS._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Bata-Mens-Lace-up-Formal-Shoes/dp/B096BGXWKT/ref=sr_1_28?dib=eyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY&dib_tag=se&keywords=mens+shoes&qid=1779860549&sr=8-28"
    },
    {
        "category": "Mens Shoes",
        "productName": "Campus",
        "price": "1,099",
        "rating": "4.5 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "10%",
        "imageUrl": "https://m.media-amazon.com/images/I/71lDfZEVFML._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Campus-FEROX-Bleached-Denim-Running/dp/B0GWMFN72J/ref=sr_1_29?dib=eyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY&dib_tag=se&keywords=mens+shoes&qid=1779860549&sr=8-29"
    },
    {
        "category": "Mens Shoes",
        "productName": "Campus",
        "price": "1,099",
        "rating": "4.5 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 40,
        "discountPercentage": "35%",
        "imageUrl": "https://m.media-amazon.com/images/I/61rwD5xbvoL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Campus-FEROX-White-Running-Shoes/dp/B0GY9FT3XM/ref=sr_1_30?dib=eyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY&dib_tag=se&keywords=mens+shoes&qid=1779860549&sr=8-30"
    },
    {
        "category": "Mens Shoes",
        "productName": "Campus",
        "price": "729",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "47%",
        "imageUrl": "https://m.media-amazon.com/images/I/7198NljaZlL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Campus-OXYFIT-Walking-Shoes-India/dp/B09RPVZK5S/ref=sr_1_31?dib=eyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY&dib_tag=se&keywords=mens+shoes&qid=1779860549&sr=8-31"
    },
    {
        "category": "Mens Shoes",
        "productName": "Skechers",
        "price": "2,500",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 11,
        "discountPercentage": "37%",
        "imageUrl": "https://m.media-amazon.com/images/I/81zlutgZlzL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Skechers-Black-Mens-Casual-Shoes-232057ID-BBK-SUMMITS-Brisbane-UK9/dp/B09XXR4TXK/ref=sr_1_32?dib=eyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY&dib_tag=se&keywords=mens+shoes&qid=1779860549&sr=8-32"
    },
    {
        "category": "Mens Shoes",
        "productName": "Bacca Bucci",
        "price": "999",
        "rating": "3.8 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 19,
        "discountPercentage": "32%",
        "imageUrl": "https://m.media-amazon.com/images/I/6157WaPyAyL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Bacca-Afterburn-Disruptor-Multiple-Sneakers-White/dp/B07S7MTB5G/ref=sr_1_33?dib=eyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY&dib_tag=se&keywords=mens+shoes&qid=1779860549&sr=8-33"
    },
    {
        "category": "Mens Shoes",
        "productName": "Campus",
        "price": "1,293",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 26,
        "discountPercentage": "24%",
        "imageUrl": "https://m.media-amazon.com/images/I/61swsekadjL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Campus-DRIVO-L-Gry-Running-Shoes/dp/B0FWKT6PFP/ref=sr_1_34?dib=eyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY&dib_tag=se&keywords=mens+shoes&qid=1779860549&sr=8-34"
    },
    {
        "category": "Mens Shoes",
        "productName": "SPARX",
        "price": "649",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 29,
        "discountPercentage": "17%",
        "imageUrl": "https://m.media-amazon.com/images/I/51dlKPoS6NL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/SPARX-Athleisure-Shoes-Black-Silver/dp/B08WHYZM1Z/ref=sr_1_35?dib=eyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY&dib_tag=se&keywords=mens+shoes&qid=1779860549&sr=8-35"
    },
    {
        "category": "Mens Shoes",
        "productName": "Campus",
        "price": "1,255",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 11,
        "discountPercentage": "42%",
        "imageUrl": "https://m.media-amazon.com/images/I/610x0URrXpL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Campus-Mens-DRIVO-Running-Shoes/dp/B0FWKQRYTJ/ref=sr_1_36?dib=eyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY&dib_tag=se&keywords=mens+shoes&qid=1779860549&sr=8-36"
    },
    {
        "category": "Mens Shoes",
        "productName": "U.S. POLO ASSN.",
        "price": "2,199",
        "rating": "4.4 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 2,
        "discountPercentage": "24%",
        "imageUrl": "https://m.media-amazon.com/images/I/71Jqccq3+aL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Stefan-Stylish-Casual-Sneaker-Shoes/dp/B0B8T7RRZT/ref=sr_1_37?dib=eyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY&dib_tag=se&keywords=mens+shoes&qid=1779860549&sr=8-37"
    },
    {
        "category": "Mens Shoes",
        "productName": "Campus",
        "price": "999",
        "rating": "4.4 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "23%",
        "imageUrl": "https://m.media-amazon.com/images/I/61U9jZL5Z+L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Campus-Mens-Revolt-Sneakers-Off/dp/B0DYXT4K91/ref=sr_1_38?dib=eyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY&dib_tag=se&keywords=mens+shoes&qid=1779860549&sr=8-38"
    },
    {
        "category": "Mens Shoes",
        "productName": "adidas",
        "price": "1,579",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 44,
        "discountPercentage": "68%",
        "imageUrl": "https://m.media-amazon.com/images/I/81XmlwOysHL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Adidas-CGRANI-Running-Shoes-7-CL7631_7/dp/B07M8RL4QY/ref=sr_1_39?dib=eyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY&dib_tag=se&keywords=mens+shoes&qid=1779860549&sr=8-39"
    },
    {
        "category": "Mens Shoes",
        "productName": "Campus",
        "price": "999",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 35,
        "discountPercentage": "52%",
        "imageUrl": "https://m.media-amazon.com/images/I/61ZxPkdyfWL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Campus-Mens-Navy-Running-Shoes/dp/B0DFH5MQKN/ref=sr_1_40?dib=eyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY&dib_tag=se&keywords=mens+shoes&qid=1779860549&sr=8-40"
    },
    {
        "category": "Mens Shoes",
        "productName": "Skechers",
        "price": "8,999",
        "rating": "4.8 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 38,
        "discountPercentage": "37%",
        "imageUrl": "https://m.media-amazon.com/images/I/71UWZrj0PvL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Skechers-220938-DKNV-Skechers-Slip-INS-MENS-SHOES-220938-DKNV-8/dp/B0G2MHP3K3/ref=sr_1_41?dib=eyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY&dib_tag=se&keywords=mens+shoes&qid=1779860549&sr=8-41"
    },
    {
        "category": "Mens Shoes",
        "productName": "Campus",
        "price": "1,249",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 14,
        "discountPercentage": "70%",
        "imageUrl": "https://m.media-amazon.com/images/I/61NVwCFR9PL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Campus-Mens-Terminator-Running-Shoes/dp/B095T1W5GR/ref=sr_1_42?dib=eyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY&dib_tag=se&keywords=mens+shoes&qid=1779860549&sr=8-42"
    },
    {
        "category": "Mens Shoes",
        "productName": "Bata",
        "price": "449",
        "rating": "3.8 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 11,
        "discountPercentage": "67%",
        "imageUrl": "https://m.media-amazon.com/images/I/612p4ArEeNL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Bata-Casual-Slipon-Canvas-Shoes/dp/B0BX4H17P6/ref=sr_1_43?dib=eyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY&dib_tag=se&keywords=mens+shoes&qid=1779860549&sr=8-43"
    },
    {
        "category": "Mens Shoes",
        "productName": "Onitsuka Tiger",
        "price": "40,243",
        "rating": "4.6 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 34,
        "discountPercentage": "66%",
        "imageUrl": "https://m.media-amazon.com/images/I/618RNzrUcfL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Onitsuka-Tiger-Unisex-Corsair-Peacoat/dp/B0BTS1QP83/ref=sr_1_44?dib=eyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY&dib_tag=se&keywords=mens+shoes&qid=1779860549&sr=8-44"
    },
    {
        "category": "Mens Shoes",
        "productName": "Skechers",
        "price": "4,949",
        "rating": "3.7 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 11,
        "discountPercentage": "15%",
        "imageUrl": "https://m.media-amazon.com/images/I/51yxqiXqC2L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Skechers-MAX-CUSHIONING-ELITE-Navy-UK9-Elite-Navy-UK9/dp/B0B6GB47NV/ref=sr_1_45?dib=eyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY&dib_tag=se&keywords=mens+shoes&qid=1779860549&sr=8-45"
    },
    {
        "category": "Mens Shoes",
        "productName": "Campus",
        "price": "1,274",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 18,
        "discountPercentage": "14%",
        "imageUrl": "https://m.media-amazon.com/images/I/711w4urOaiL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Campus-STRUT-Running-Shoes-L-Gry/dp/B0F4DFC6FV/ref=sr_1_46?dib=eyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY&dib_tag=se&keywords=mens+shoes&qid=1779860549&sr=8-46"
    },
    {
        "category": "Mens Shoes",
        "productName": "Campus",
        "price": "1,309",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 38,
        "discountPercentage": "6%",
        "imageUrl": "https://m.media-amazon.com/images/I/61e6ved+oZL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Campus-Camp-Glacier-Running-Shoes-India/dp/B0BCQX2GZN/ref=sr_1_47?dib=eyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY&dib_tag=se&keywords=mens+shoes&qid=1779860549&sr=8-47"
    },
    {
        "category": "Mens Shoes",
        "productName": "Skechers",
        "price": "3,749",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 23,
        "discountPercentage": "54%",
        "imageUrl": "https://m.media-amazon.com/images/I/815Nn8HkxVL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Skechers-White-Blue-Mens-Casual-Shoes-232358-WBL-DLUX-Fitness/dp/B0B4DL6ND9/ref=sr_1_48?dib=eyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY&dib_tag=se&keywords=mens+shoes&qid=1779860549&sr=8-48"
    },
    {
        "category": "Mens Shoes",
        "productName": "ASICS",
        "price": "4,549",
        "rating": "3.2 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 50,
        "discountPercentage": "40%",
        "imageUrl": "https://m.media-amazon.com/images/I/71MWBzfJELL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/ASICS-Gel-Venture-Midnight-Winter-Running/dp/B0FB9G16Z4/ref=sr_1_49?dib=eyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY&dib_tag=se&keywords=mens+shoes&qid=1779860549&sr=8-49"
    },
    {
        "category": "Mens Shoes",
        "productName": "Boldfit",
        "price": "739",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 20,
        "discountPercentage": "14%",
        "imageUrl": "https://m.media-amazon.com/images/I/61AbHzB9gUL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Boldfit-Badminton-Shuttle-Marking-Breathable/dp/B0DRKM7XH7/ref=sr_1_50?dib=eyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY&dib_tag=se&keywords=mens+shoes&qid=1779860549&sr=8-50"
    },
    {
        "category": "Mens Shoes",
        "productName": "Under Armour",
        "price": "22,445",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "11%",
        "imageUrl": "https://m.media-amazon.com/images/I/71F6eJvAiIL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Under-Armour-Charged-Hard-Wearing-Comfortable/dp/B0BZWZT5Z1/ref=sr_1_51?dib=eyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY&dib_tag=se&keywords=mens+shoes&qid=1779860549&sr=8-51"
    },
    {
        "category": "Mens Shoes",
        "productName": "Campus",
        "price": "1,149",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 21,
        "discountPercentage": "12%",
        "imageUrl": "https://m.media-amazon.com/images/I/61BPnfilugL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Campus-North-Black-Running-Shoes/dp/B08PSHLJGL/ref=sr_1_52?dib=eyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY&dib_tag=se&keywords=mens+shoes&qid=1779860549&sr=8-52"
    },
    {
        "category": "Mens Shoes",
        "productName": "adidas",
        "price": "2,399",
        "rating": "4.4 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "19%",
        "imageUrl": "https://m.media-amazon.com/images/I/41xC4bMMfWL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/adidas-Men-Cloudfoam-CUXXION-Lounger/dp/B0G2Y9SBSD/ref=sr_1_53?dib=eyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY&dib_tag=se&keywords=mens+shoes&qid=1779860549&sr=8-53"
    },
    {
        "category": "Mens Shoes",
        "productName": "Nike",
        "price": "9,516",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 34,
        "discountPercentage": "47%",
        "imageUrl": "https://m.media-amazon.com/images/I/4162gCM8QRL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Nike-Pegasus-Black-Hyper-Turq-Concord-Running/dp/B0FMYJG3LG/ref=sr_1_54?dib=eyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY&dib_tag=se&keywords=mens+shoes&qid=1779860549&sr=8-54"
    },
    {
        "category": "Mens Shoes",
        "productName": "Liberty",
        "price": "739",
        "rating": "3.9 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 44,
        "discountPercentage": "61%",
        "imageUrl": "https://m.media-amazon.com/images/I/6106QRIe40L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Liberty-Neather-1E-D-Grey-Walking-Shoes/dp/B0CX5L9BSF/ref=sr_1_55?dib=eyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY&dib_tag=se&keywords=mens+shoes&qid=1779860549&sr=8-55"
    },
    {
        "category": "Mens Shoes",
        "productName": "new balance",
        "price": "5,498",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 49,
        "discountPercentage": "30%",
        "imageUrl": "https://m.media-amazon.com/images/I/61uqRLMMYyL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/new-balance-mens-GREY-Running/dp/B093QJKX7S/ref=sr_1_56?dib=eyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY&dib_tag=se&keywords=mens+shoes&qid=1779860549&sr=8-56"
    },
    {
        "category": "Mens Shoes",
        "productName": "Leo's Fitness Shoes",
        "price": "980",
        "rating": "3.5 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 10,
        "discountPercentage": "10%",
        "imageUrl": "https://m.media-amazon.com/images/I/71t0xlIMPVL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MToxNzYwMTg5MDAwOTE3OTIyOjE3Nzk4NjA1NDk6c3BfYnRmOjMwMDQ3Mzk4OTU3NzIzMjo6MDo6&url=%2FWaterproof-Shoes-Trekking-Outdoor-Activities%2Fdp%2FB0DCNQVML8%2Fref%3Dsr_1_57_sspa%3Fdib%3DeyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY%26dib_tag%3Dse%26keywords%3Dmens%2Bshoes%26qid%3D1779860549%26sr%3D8-57-spons%26aref%3DfgxxKFlxBi%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1&aref=fgxxKFlxBi&sp_cr=ZAZ"
    },
    {
        "category": "Mens Shoes",
        "productName": "Big Fox",
        "price": "999",
        "rating": "3.9 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 33,
        "discountPercentage": "30%",
        "imageUrl": "https://m.media-amazon.com/images/I/31ZqrOso6GL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MToxNzYwMTg5MDAwOTE3OTIyOjE3Nzk4NjA1NDk6c3BfYnRmOjMwMTEwNzc5MjQ2MzQzMjo6MDo6&url=%2FBig-Fox-Yas-2-Sneakers-White%2Fdp%2FB0C74JC83L%2Fref%3Dsr_1_58_sspa%3Fdib%3DeyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY%26dib_tag%3Dse%26keywords%3Dmens%2Bshoes%26qid%3D1779860549%26sr%3D8-58-spons%26aref%3DOhbZsSjyXv%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1&aref=OhbZsSjyXv&sp_cr=ZAZ"
    },
    {
        "category": "Mens Shoes",
        "productName": "Language",
        "price": "7,641",
        "rating": "N/A",
        "stockStatus": "Limited Stock",
        "stockQuantity": 38,
        "discountPercentage": "15%",
        "imageUrl": "https://m.media-amazon.com/images/I/517R2tDFcdL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MToxNzYwMTg5MDAwOTE3OTIyOjE3Nzk4NjA1NDk6c3BfYnRmOjMwMTA2NjE5ODc0MTAzMjo6MDo6&url=%2FLanguage-Hand-Painted-Flexible-Cushioned-Grip-Enhanced%2Fdp%2FB0DQXTZPFS%2Fref%3Dsr_1_59_sspa%3Fdib%3DeyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY%26dib_tag%3Dse%26keywords%3Dmens%2Bshoes%26qid%3D1779860549%26sr%3D8-59-spons%26aref%3DqfQZE1nzoi%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1&aref=qfQZE1nzoi&sp_cr=ZAZ"
    },
    {
        "category": "Mens Shoes",
        "productName": "Boldfit",
        "price": "899",
        "rating": "3.9 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "58%",
        "imageUrl": "https://m.media-amazon.com/images/I/61+wVdUwUeL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MToxNzYwMTg5MDAwOTE3OTIyOjE3Nzk4NjA1NDk6c3BfYnRmOjMwMDU4MjE2NzM4ODkzMjo6MDo6&url=%2FBoldfit-Walking-Cushion-Without-Jogging%2Fdp%2FB0F94C4H6S%2Fref%3Dsr_1_60_sspa%3Fdib%3DeyJ2IjoiMSJ9.SOkjvSkarPqAyljVe715bom4NT27tM-cZm6YFp_ciE8nF5F-DEfb7mY_BnCv9Gc-oNKfewxMPo-Dx-yDv8_c1VniDWnoVAGEOCsKncWkwazBbvLciOoxfvwNY-Lou7JQGfDJWWHM2cqDW8tzouoyH9BztkvT4W30ig0Gbp7yKttHSbSgz7tA__npU8e3E0goNIDNz3UV20wj_RdEHv1Q9QzqtCcbdTxGAGZg5hNVRlPErJVfG-ejWq-ejYb7kMertqHBR_wm6qTyXwwM8CzMcMwCgloJN5WG5JDD3P9cScU.JAcVQ0w5CxklJBwtpSZBRLNirz2NOqmElN3JDmLCvgY%26dib_tag%3Dse%26keywords%3Dmens%2Bshoes%26qid%3D1779860549%26sr%3D8-60-spons%26aref%3Dir9Jgyz133%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1&aref=ir9Jgyz133&sp_cr=ZAZ"
    },
    {
        "category": "Womens Shoes",
        "productName": "Campus",
        "price": "999",
        "rating": "4.3 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 21,
        "discountPercentage": "11%",
        "imageUrl": "https://m.media-amazon.com/images/I/71Lj1YMdXbL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MToyOTY4MzI3NDE2NDQ3OTcwOjE3Nzk4NjA1NzU6c3BfYXRmOjMwMDMyMzc4NTI3NTczMjo6MDo6&url=%2FCampus-Womens-Walking-Mauve-India%2Fdp%2FB0BVQWV2TV%2Fref%3Dsr_1_1_sspa%3Fdib%3DeyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE%26dib_tag%3Dse%26keywords%3Dwomens%2Bshoes%26qid%3D1779860575%26sr%3D8-1-spons%26aref%3DLHMrk31yva%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=LHMrk31yva&sp_cr=ZAZ"
    },
    {
        "category": "Womens Shoes",
        "productName": "Boldfit",
        "price": "999",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "50%",
        "imageUrl": "https://m.media-amazon.com/images/I/71WHDR0ZkOL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MToyOTY4MzI3NDE2NDQ3OTcwOjE3Nzk4NjA1NzU6c3BfYXRmOjMwMDkzOTY2NTc3NjYzMjo6MDo6&url=%2FBoldfit-Breathable-Cushioned-Lightweight-Slip-Resistant%2Fdp%2FB0G4484GY3%2Fref%3Dsr_1_2_sspa%3Fdib%3DeyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE%26dib_tag%3Dse%26keywords%3Dwomens%2Bshoes%26qid%3D1779860575%26sr%3D8-2-spons%26aref%3DGbynOKlESz%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=GbynOKlESz&sp_cr=ZAZ"
    },
    {
        "category": "Womens Shoes",
        "productName": "Crocs",
        "price": "3,995",
        "rating": "4.4 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 3,
        "discountPercentage": "61%",
        "imageUrl": "https://m.media-amazon.com/images/I/41bsMQP2BkL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MToyOTY4MzI3NDE2NDQ3OTcwOjE3Nzk4NjA1NzU6c3BfYXRmOjMwMTA3OTU0MjM3MjUzMjo6MDo6&url=%2FCrocs-Women-Classic-209793-001-Black%2Fdp%2FB0CK2B3813%2Fref%3Dsr_1_3_sspa%3Fdib%3DeyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE%26dib_tag%3Dse%26keywords%3Dwomens%2Bshoes%26qid%3D1779860575%26sr%3D8-3-spons%26aref%3DnUSK7r5jLl%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=nUSK7r5jLl&sp_cr=ZAZ"
    },
    {
        "category": "Womens Shoes",
        "productName": "Crocs",
        "price": "5,995",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 6,
        "discountPercentage": "68%",
        "imageUrl": "https://m.media-amazon.com/images/I/71CwJiZoybL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MToyOTY4MzI3NDE2NDQ3OTcwOjE3Nzk4NjA1NzU6c3BfYXRmOjMwMTAwNDU5OTQ5ODIzMjo6MDo6&url=%2FCrocs-Brooklyn-Platform-Sandals-Mushroom%2Fdp%2FB0C53SXQGZ%2Fref%3Dsr_1_4_sspa%3Fdib%3DeyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE%26dib_tag%3Dse%26keywords%3Dwomens%2Bshoes%26qid%3D1779860575%26sr%3D8-4-spons%26aref%3DUsomS5dQHT%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=UsomS5dQHT&sp_cr=ZAZ"
    },
    {
        "category": "Womens Shoes",
        "productName": "Longwalk",
        "price": "390",
        "rating": "3.8 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "36%",
        "imageUrl": "https://m.media-amazon.com/images/I/6143nGlNWKL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Longwalk-Women-Sneakers-Walking-Running/dp/B08GZ5ZPND/ref=sr_1_5?dib=eyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE&dib_tag=se&keywords=womens+shoes&qid=1779860575&sr=8-5"
    },
    {
        "category": "Womens Shoes",
        "productName": "VIGENT",
        "price": "549",
        "rating": "3.4 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 15,
        "discountPercentage": "67%",
        "imageUrl": "https://m.media-amazon.com/images/I/51WbKfJDrxL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/VIGENT-Sneakers-Comfortable-Synthetic-Lightweight/dp/B0GSZWJJV1/ref=sr_1_6?dib=eyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE&dib_tag=se&keywords=womens+shoes&qid=1779860575&sr=8-6"
    },
    {
        "category": "Womens Shoes",
        "productName": "SPARX",
        "price": "768",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "51%",
        "imageUrl": "https://m.media-amazon.com/images/I/81hcU5wAyuL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/SPARX-Sports-Shoe-SL-167-Women/dp/B0C6TX544P/ref=sr_1_7?dib=eyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE&dib_tag=se&keywords=womens+shoes&qid=1779860575&sr=8-7"
    },
    {
        "category": "Womens Shoes",
        "productName": "Campus",
        "price": "999",
        "rating": "4.3 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 23,
        "discountPercentage": "30%",
        "imageUrl": "https://m.media-amazon.com/images/I/71Lj1YMdXbL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Campus-Womens-Walking-Mauve-India/dp/B0BVQTG9VW/ref=sr_1_8?dib=eyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE&dib_tag=se&keywords=womens+shoes&qid=1779860575&sr=8-8"
    },
    {
        "category": "Womens Shoes",
        "productName": "Campus",
        "price": "969",
        "rating": "4.5 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 5,
        "discountPercentage": "10%",
        "imageUrl": "https://m.media-amazon.com/images/I/61ngKk3pmyL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Campus-Womens-Off-WHT-Baby-Pink-Running/dp/B0DFHCJQSR/ref=sr_1_9?dib=eyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE&dib_tag=se&keywords=womens+shoes&qid=1779860575&sr=8-9"
    },
    {
        "category": "Womens Shoes",
        "productName": "Campus",
        "price": "999",
        "rating": "4.6 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "58%",
        "imageUrl": "https://m.media-amazon.com/images/I/71nubNfTppL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Campus-Womens-Spero-D-Lilac-Walking/dp/B0GY916SGS/ref=sr_1_10?dib=eyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE&dib_tag=se&keywords=womens+shoes&qid=1779860575&sr=8-10"
    },
    {
        "category": "Womens Shoes",
        "productName": "ASIAN",
        "price": "719",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "34%",
        "imageUrl": "https://m.media-amazon.com/images/I/71BR2EQFZTL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/ASIAN-FIREFLY-09-Running-Technology-Lightweight/dp/B0BX43KSB9/ref=sr_1_11?dib=eyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE&dib_tag=se&keywords=womens+shoes&qid=1779860575&sr=8-11"
    },
    {
        "category": "Womens Shoes",
        "productName": "Campus",
        "price": "799",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 21,
        "discountPercentage": "57%",
        "imageUrl": "https://m.media-amazon.com/images/I/71CbxzDHidL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Campus-Womens-Annie-Walking-Shoes/dp/B09RBH5Y59/ref=sr_1_12?dib=eyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE&dib_tag=se&keywords=womens+shoes&qid=1779860575&sr=8-12"
    },
    {
        "category": "Womens Shoes",
        "productName": "Vendoz",
        "price": "671",
        "rating": "3.9 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 19,
        "discountPercentage": "28%",
        "imageUrl": "https://m.media-amazon.com/images/I/51V+o9sZBgL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Vendoz-Women-Casual-Sneakers-CNV6053WT-37/dp/B0DHPSY7NN/ref=sr_1_13?dib=eyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE&dib_tag=se&keywords=womens+shoes&qid=1779860575&sr=8-13"
    },
    {
        "category": "Womens Shoes",
        "productName": "Skechers",
        "price": "2,000",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 4,
        "discountPercentage": "51%",
        "imageUrl": "https://m.media-amazon.com/images/I/81nMxUcy6EL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Skechers-Womens-Sneaker-896223ID-NVPR-Purple/dp/B0CHVXNM74/ref=sr_1_14?dib=eyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE&dib_tag=se&keywords=womens+shoes&qid=1779860575&sr=8-14"
    },
    {
        "category": "Womens Shoes",
        "productName": "Reebok",
        "price": "1,659",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "35%",
        "imageUrl": "https://m.media-amazon.com/images/I/61j7QibWxnL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Reebok-Womens-Black-Connect-Running/dp/B09N6M77VR/ref=sr_1_15?dib=eyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE&dib_tag=se&keywords=womens+shoes&qid=1779860575&sr=8-15"
    },
    {
        "category": "Womens Shoes",
        "productName": "ASIAN",
        "price": "637",
        "rating": "3.8 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "20%",
        "imageUrl": "https://m.media-amazon.com/images/I/818rLYfMb3L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/ASIAN-PARADISE-12-Casual-Sneakers-Stylish/dp/B0G6WZ31QB/ref=sr_1_16?dib=eyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE&dib_tag=se&keywords=womens+shoes&qid=1779860575&sr=8-16"
    },
    {
        "category": "Womens Shoes",
        "productName": "Campus",
        "price": "839",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 17,
        "discountPercentage": "10%",
        "imageUrl": "https://m.media-amazon.com/images/I/618Ylh6YkzL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Campus-Sneakers-OGL-09-Stylish-Water-Resistant/dp/B0D4YW7PZF/ref=sr_1_17?dib=eyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE&dib_tag=se&keywords=womens+shoes&qid=1779860575&sr=8-17"
    },
    {
        "category": "Womens Shoes",
        "productName": "PUMA",
        "price": "2,199",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 48,
        "discountPercentage": "21%",
        "imageUrl": "https://m.media-amazon.com/images/I/51WLO0otstL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Unisex-Adult-SkyVolt-White-Poised-Sneaker-30927606/dp/B0FD43KV4Z/ref=sr_1_18?dib=eyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE&dib_tag=se&keywords=womens+shoes&qid=1779860575&sr=8-18"
    },
    {
        "category": "Womens Shoes",
        "productName": "ASIAN",
        "price": "699",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "46%",
        "imageUrl": "https://m.media-amazon.com/images/I/71RdRviwXoL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/ASIAN-Stella-02-Sneakers-Comfortable-Lightweight/dp/B0FVSXYX5K/ref=sr_1_19?dib=eyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE&dib_tag=se&keywords=womens+shoes&qid=1779860575&sr=8-19"
    },
    {
        "category": "Womens Shoes",
        "productName": "Campus",
        "price": "969",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 29,
        "discountPercentage": "53%",
        "imageUrl": "https://m.media-amazon.com/images/I/51Qd1ioFwfL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Campus-Womens-OG-L3-Silver-Sneakers/dp/B0CGRRJQB5/ref=sr_1_20?dib=eyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE&dib_tag=se&keywords=womens+shoes&qid=1779860575&sr=8-20"
    },
    {
        "category": "Womens Shoes",
        "productName": "ATHCO",
        "price": "749",
        "rating": "4.3 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 44,
        "discountPercentage": "15%",
        "imageUrl": "https://m.media-amazon.com/images/I/71cKveP4ZGL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MToyOTY4MzI3NDE2NDQ3OTcwOjE3Nzk4NjA1NzU6c3BfbXRmOjMwMDY1MDE0MDI5NDEzMjo6MDo6&url=%2FATHCO-Womens-Running-Shoes_07-ATHST-74%2Fdp%2FB0FC6XSCFS%2Fref%3Dsr_1_21_sspa%3Fdib%3DeyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE%26dib_tag%3Dse%26keywords%3Dwomens%2Bshoes%26qid%3D1779860575%26sr%3D8-21-spons%26aref%3DCz2nxLw7wp%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1&aref=Cz2nxLw7wp&sp_cr=ZAZ"
    },
    {
        "category": "Womens Shoes",
        "productName": "YOHO",
        "price": "1,424",
        "rating": "4.4 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 37,
        "discountPercentage": "51%",
        "imageUrl": "https://m.media-amazon.com/images/I/716NEcaS-IL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MToyOTY4MzI3NDE2NDQ3OTcwOjE3Nzk4NjA1NzU6c3BfbXRmOjMwMDc2MTA0NTc5MDAzMjo6MDo6&url=%2FYOHO-Sneakers-Stylish-Lightweight-Everyday%2Fdp%2FB0FQCM7X39%2Fref%3Dsr_1_22_sspa%3Fdib%3DeyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE%26dib_tag%3Dse%26keywords%3Dwomens%2Bshoes%26qid%3D1779860575%26sr%3D8-22-spons%26aref%3DrsH8RK1Xap%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1&aref=rsH8RK1Xap&sp_cr=ZAZ"
    },
    {
        "category": "Womens Shoes",
        "productName": "ATHCO",
        "price": "799",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 35,
        "discountPercentage": "15%",
        "imageUrl": "https://m.media-amazon.com/images/I/711K6DQAN-L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MToyOTY4MzI3NDE2NDQ3OTcwOjE3Nzk4NjA1NzU6c3BfbXRmOjMwMDk3MjUwMDY1NzQzMjo6MDo6&url=%2FATHCO-Womens-Running-Shoes_05-ATHST-70%2Fdp%2FB0FB8S5NDJ%2Fref%3Dsr_1_23_sspa%3Fdib%3DeyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE%26dib_tag%3Dse%26keywords%3Dwomens%2Bshoes%26qid%3D1779860575%26sr%3D8-23-spons%26aref%3DM25kAKv9br%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1&aref=M25kAKv9br&sp_cr=ZAZ"
    },
    {
        "category": "Womens Shoes",
        "productName": "layasa",
        "price": "499",
        "rating": "2.8 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 44,
        "discountPercentage": "21%",
        "imageUrl": "https://m.media-amazon.com/images/I/41WZlCcXpKL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MToyOTY4MzI3NDE2NDQ3OTcwOjE3Nzk4NjA1NzU6c3BfbXRmOjMwMDkyMjE3ODk4NzQzMjo6MDo6&url=%2Flayasa-Lace-Up-Sneakers-Lightweight-Girls_5%2Fdp%2FB0CVGVKY6J%2Fref%3Dsr_1_24_sspa%3Fdib%3DeyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE%26dib_tag%3Dse%26keywords%3Dwomens%2Bshoes%26qid%3D1779860575%26sr%3D8-24-spons%26aref%3D33VFCjCD4f%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1&aref=33VFCjCD4f&sp_cr=ZAZ"
    },
    {
        "category": "Womens Shoes",
        "productName": "Campus",
        "price": "719",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 12,
        "discountPercentage": "17%",
        "imageUrl": "https://m.media-amazon.com/images/I/71CPi24VP8L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Campus-Womens-Callie-Walking-India/dp/B0BFFKGVT1/ref=sr_1_25?dib=eyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE&dib_tag=se&keywords=womens+shoes&qid=1779860575&sr=8-25"
    },
    {
        "category": "Womens Shoes",
        "productName": "SPARX",
        "price": "806",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 21,
        "discountPercentage": "45%",
        "imageUrl": "https://m.media-amazon.com/images/I/61dsxIzUG4L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/SPARX-Sports-SL-168-Black-Women/dp/B0DDTWF7KZ/ref=sr_1_26?dib=eyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE&dib_tag=se&keywords=womens+shoes&qid=1779860575&sr=8-26"
    },
    {
        "category": "Womens Shoes",
        "productName": "Campus",
        "price": "899",
        "rating": "4.4 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 1,
        "discountPercentage": "5%",
        "imageUrl": "https://m.media-amazon.com/images/I/71hgt1m6OgL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Campus-Womens-Siren-Purple-Running/dp/B0D5BGNQCL/ref=sr_1_27?dib=eyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE&dib_tag=se&keywords=womens+shoes&qid=1779860575&sr=8-27"
    },
    {
        "category": "Womens Shoes",
        "productName": "Campus",
        "price": "999",
        "rating": "4.3 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "70%",
        "imageUrl": "https://m.media-amazon.com/images/I/712AbOzIAkL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Campus-Womens-Camp-Walking-India/dp/B0BSR46RB5/ref=sr_1_28?dib=eyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE&dib_tag=se&keywords=womens+shoes&qid=1779860575&sr=8-28"
    },
    {
        "category": "Womens Shoes",
        "productName": "Bata",
        "price": "549",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "60%",
        "imageUrl": "https://m.media-amazon.com/images/I/81P1+eA5-vL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Bata-Selah-Women-Slip-Shoes/dp/B0CFV6YKH3/ref=sr_1_29?dib=eyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE&dib_tag=se&keywords=womens+shoes&qid=1779860575&sr=8-29"
    },
    {
        "category": "Womens Shoes",
        "productName": "Skechers",
        "price": "2,296",
        "rating": "4.3 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 21,
        "discountPercentage": "70%",
        "imageUrl": "https://m.media-amazon.com/images/I/81wMr6C9oNL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Skechers-Summits-Womens-Casual-Shoes-896220ID-GYLB-8-Grey-Light/dp/B0CBVNN1HK/ref=sr_1_30?dib=eyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE&dib_tag=se&keywords=womens+shoes&qid=1779860575&sr=8-30"
    },
    {
        "category": "Womens Shoes",
        "productName": "Skechers",
        "price": "2,125",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 4,
        "discountPercentage": "12%",
        "imageUrl": "https://m.media-amazon.com/images/I/81iv5P8eJvL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Skechers-Womens-Dynamight-Casual-Sneakers/dp/B0D9KJRJGL/ref=sr_1_31?dib=eyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE&dib_tag=se&keywords=womens+shoes&qid=1779860575&sr=8-31"
    },
    {
        "category": "Womens Shoes",
        "productName": "Campus",
        "price": "769",
        "rating": "4.3 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 49,
        "discountPercentage": "37%",
        "imageUrl": "https://m.media-amazon.com/images/I/71C8E7VWCXL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Campus-Womens-Julius-Running-Shoes/dp/B0C398GCCM/ref=sr_1_32?dib=eyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE&dib_tag=se&keywords=womens+shoes&qid=1779860575&sr=8-32"
    },
    {
        "category": "Womens Shoes",
        "productName": "adidas",
        "price": "2,299",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "63%",
        "imageUrl": "https://m.media-amazon.com/images/I/81p1waPWhQL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Adidas-Synthetic-SheenWalk-Walking-Silver/dp/B0BJL2VCKR/ref=sr_1_33?dib=eyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE&dib_tag=se&keywords=womens+shoes&qid=1779860575&sr=8-33"
    },
    {
        "category": "Womens Shoes",
        "productName": "Campus",
        "price": "859",
        "rating": "4.3 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 10,
        "discountPercentage": "56%",
        "imageUrl": "https://m.media-amazon.com/images/I/719nvqpwspL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Campus-Womens-L-PRPL-Prple-Running/dp/B0D4YQGWXP/ref=sr_1_34?dib=eyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE&dib_tag=se&keywords=womens+shoes&qid=1779860575&sr=8-34"
    },
    {
        "category": "Womens Shoes",
        "productName": "ATHCO",
        "price": "689",
        "rating": "4.3 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 34,
        "discountPercentage": "30%",
        "imageUrl": "https://m.media-amazon.com/images/I/71US7eHVmTL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/ATHCO-Womens-Walking-Shoes_04-ATHDIP-17/dp/B0FGDJMR8B/ref=sr_1_35?dib=eyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE&dib_tag=se&keywords=womens+shoes&qid=1779860575&sr=8-35"
    },
    {
        "category": "Womens Shoes",
        "productName": "PUMA",
        "price": "1,399",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 4,
        "discountPercentage": "67%",
        "imageUrl": "https://m.media-amazon.com/images/I/51jPM2-koHL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Puma-Maximal-Comfort-Berry-Spring-Lavender-White/dp/B0D6VRCDBJ/ref=sr_1_36?dib=eyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE&dib_tag=se&keywords=womens+shoes&qid=1779860575&sr=8-36"
    },
    {
        "category": "Womens Shoes",
        "productName": "Reebok",
        "price": "1,489",
        "rating": "4.3 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 16,
        "discountPercentage": "48%",
        "imageUrl": "https://m.media-amazon.com/images/I/51Cz1qXw48L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Reebok-FLYLITE-RUSHRUN-Running-Shoes/dp/B0FK599PFX/ref=sr_1_37?dib=eyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE&dib_tag=se&keywords=womens+shoes&qid=1779860575&sr=8-37"
    },
    {
        "category": "Womens Shoes",
        "productName": "Campus",
        "price": "1,349",
        "rating": "5.0 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 47,
        "discountPercentage": "44%",
        "imageUrl": "https://m.media-amazon.com/images/I/61tve2X+cCL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Campus-Womens-CYMBAL-H-Pink-Running/dp/B0GZVZBG9F/ref=sr_1_38?dib=eyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE&dib_tag=se&keywords=womens+shoes&qid=1779860575&sr=8-38"
    },
    {
        "category": "Womens Shoes",
        "productName": "ASIAN",
        "price": "649",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 4,
        "discountPercentage": "43%",
        "imageUrl": "https://m.media-amazon.com/images/I/617LvCZz3lL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/ASIAN-Fashion-02-Running-Training-Numeric_6/dp/B0B5QWKZRB/ref=sr_1_39?dib=eyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE&dib_tag=se&keywords=womens+shoes&qid=1779860575&sr=8-39"
    },
    {
        "category": "Womens Shoes",
        "productName": "Shoetopia",
        "price": "599",
        "rating": "3.6 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "57%",
        "imageUrl": "https://m.media-amazon.com/images/I/61lQNybDaLL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Shoetopia-Casual-Sports-Sneakers-Casuals/dp/B0DRJGW96T/ref=sr_1_40?dib=eyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE&dib_tag=se&keywords=womens+shoes&qid=1779860575&sr=8-40"
    },
    {
        "category": "Womens Shoes",
        "productName": "DOCTOR EXTRA SOFT",
        "price": "894",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 45,
        "discountPercentage": "55%",
        "imageUrl": "https://m.media-amazon.com/images/I/61HE8kAEDHL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/DOCTOR-EXTRA-SOFT-Lightweight-D-1003-NAVY-7/dp/B0BWYX5LSP/ref=sr_1_41?dib=eyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE&dib_tag=se&keywords=womens+shoes&qid=1779860575&sr=8-41"
    },
    {
        "category": "Womens Shoes",
        "productName": "Campus",
        "price": "849",
        "rating": "4.4 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "9%",
        "imageUrl": "https://m.media-amazon.com/images/I/71Ief257VML._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Campus-Womens-LUMI-Walking-Shoes/dp/B0FCYG46RZ/ref=sr_1_42?dib=eyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE&dib_tag=se&keywords=womens+shoes&qid=1779860575&sr=8-42"
    },
    {
        "category": "Womens Shoes",
        "productName": "Skechers",
        "price": "3,899",
        "rating": "4.3 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "35%",
        "imageUrl": "https://m.media-amazon.com/images/I/811gs4jEnNL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Skechers-Womens-Running-Shoes-GO-CONSISTENT-2-0-128624ID-PCH-8/dp/B0FY6RY4NJ/ref=sr_1_43?dib=eyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE&dib_tag=se&keywords=womens+shoes&qid=1779860575&sr=8-43"
    },
    {
        "category": "Womens Shoes",
        "productName": "Nike",
        "price": "4,295",
        "rating": "4.3 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 15,
        "discountPercentage": "61%",
        "imageUrl": "https://m.media-amazon.com/images/I/61TSLiXfcAL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Nike-Womens-Revolution-Magenta-Orange-Running/dp/B0FQJM9QDW/ref=sr_1_44?dib=eyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE&dib_tag=se&keywords=womens+shoes&qid=1779860575&sr=8-44"
    },
    {
        "category": "Womens Shoes",
        "productName": "SPARX",
        "price": "760",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 49,
        "discountPercentage": "5%",
        "imageUrl": "https://m.media-amazon.com/images/I/71chVw8wP-L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Sparx-Womens-SL-194-Walking/dp/B0CWPCCZH7/ref=sr_1_45?dib=eyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE&dib_tag=se&keywords=womens+shoes&qid=1779860575&sr=8-45"
    },
    {
        "category": "Womens Shoes",
        "productName": "Campus",
        "price": "999",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 2,
        "discountPercentage": "23%",
        "imageUrl": "https://m.media-amazon.com/images/I/71vTWuMgmJL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Campus-Womens-Willo-QUIAL-Walking/dp/B0F9PRDDWP/ref=sr_1_46?dib=eyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE&dib_tag=se&keywords=womens+shoes&qid=1779860575&sr=8-46"
    },
    {
        "category": "Womens Shoes",
        "productName": "Skechers",
        "price": "2,698",
        "rating": "4.3 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "6%",
        "imageUrl": "https://m.media-amazon.com/images/I/81FdxrsFu8L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Skechers-Summits-Womens-Casual-Shoes-896220ID-NVHP-7-Navy-Pink/dp/B0CBVNG2LL/ref=sr_1_47?dib=eyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE&dib_tag=se&keywords=womens+shoes&qid=1779860575&sr=8-47"
    },
    {
        "category": "Womens Shoes",
        "productName": "adidas",
        "price": "1,899",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "57%",
        "imageUrl": "https://m.media-amazon.com/images/I/61fcVae7y9S._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Adidas-Womens-Clear-Factor-Running/dp/B08TM6V7CQ/ref=sr_1_48?dib=eyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE&dib_tag=se&keywords=womens+shoes&qid=1779860575&sr=8-48"
    },
    {
        "category": "Womens Shoes",
        "productName": "Shoetopia",
        "price": "499",
        "rating": "3.9 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "9%",
        "imageUrl": "https://m.media-amazon.com/images/I/51gjc+cAWYL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Shoetopia-Womens-Casual-Walking-Sneakers/dp/B09M9RMGW8/ref=sr_1_49?dib=eyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE&dib_tag=se&keywords=womens+shoes&qid=1779860575&sr=8-49"
    },
    {
        "category": "Womens Shoes",
        "productName": "DOCTOR HEALTH SUPER SOFT",
        "price": "649",
        "rating": "3.9 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "55%",
        "imageUrl": "https://m.media-amazon.com/images/I/81A-dVeVGHL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/DOCTOR-HEALTH-SUPER-Comfortable-Lightweight/dp/B0DZCP78JM/ref=sr_1_50?dib=eyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE&dib_tag=se&keywords=womens+shoes&qid=1779860575&sr=8-50"
    },
    {
        "category": "Womens Shoes",
        "productName": "Campus",
        "price": "1,349",
        "rating": "5.0 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 21,
        "discountPercentage": "61%",
        "imageUrl": "https://m.media-amazon.com/images/I/51E233JXviL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Campus-Womens-CYMBAL-Meadow-Running/dp/B0GY9JFZ1J/ref=sr_1_51?dib=eyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE&dib_tag=se&keywords=womens+shoes&qid=1779860575&sr=8-51"
    },
    {
        "category": "Womens Shoes",
        "productName": "Campus",
        "price": "949",
        "rating": "4.6 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 10,
        "discountPercentage": "47%",
        "imageUrl": "https://m.media-amazon.com/images/I/71zVrUWIU+L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Campus-Womens-Spero-L-Sky-Walking/dp/B0GZW1CPVZ/ref=sr_1_52?dib=eyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE&dib_tag=se&keywords=womens+shoes&qid=1779860575&sr=8-52"
    },
    {
        "category": "Womens Shoes",
        "productName": "Campus",
        "price": "949",
        "rating": "4.5 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 21,
        "discountPercentage": "23%",
        "imageUrl": "https://m.media-amazon.com/images/I/61WsUey2g6L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Campus-Womens-Ciara-L-R-Slate-Running/dp/B0DFHC9XZM/ref=sr_1_53?dib=eyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE&dib_tag=se&keywords=womens+shoes&qid=1779860575&sr=8-53"
    },
    {
        "category": "Womens Shoes",
        "productName": "ASIAN",
        "price": "679",
        "rating": "3.7 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 27,
        "discountPercentage": "29%",
        "imageUrl": "https://m.media-amazon.com/images/I/71KkK5u4oIL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/ASIAN-Sneaker-Cushioned-PARADISE-01-Sneakers/dp/B0D8TD6YV5/ref=sr_1_54?dib=eyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE&dib_tag=se&keywords=womens+shoes&qid=1779860575&sr=8-54"
    },
    {
        "category": "Womens Shoes",
        "productName": "Nike",
        "price": "4,295",
        "rating": "4.3 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "45%",
        "imageUrl": "https://m.media-amazon.com/images/I/611JrasW32L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Nike-Revolution-Hydrogen-Void-White-Pearl-Running/dp/B0FQJFYCZR/ref=sr_1_55?dib=eyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE&dib_tag=se&keywords=womens+shoes&qid=1779860575&sr=8-55"
    },
    {
        "category": "Womens Shoes",
        "productName": "Campus",
        "price": "1,349",
        "rating": "4.3 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 11,
        "discountPercentage": "56%",
        "imageUrl": "https://m.media-amazon.com/images/I/71iR4eFTq5L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Campus-Womens-GRIT-Sneakers-L-Sky/dp/B0F4DKP2C8/ref=sr_1_56?dib=eyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE&dib_tag=se&keywords=womens+shoes&qid=1779860575&sr=8-56"
    },
    {
        "category": "Womens Shoes",
        "productName": "Liberty",
        "price": "840",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "47%",
        "imageUrl": "https://m.media-amazon.com/images/I/61YoCCsMOwL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MToyOTY4MzI3NDE2NDQ3OTcwOjE3Nzk4NjA1NzU6c3BfYnRmOjMwMDc1NTcwNjUxODgzMjo6MDo6&url=%2FLiberty-Leap7x-Jimny-61E-Ladies-Purple%2Fdp%2FB0FNCSKWKC%2Fref%3Dsr_1_57_sspa%3Fdib%3DeyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE%26dib_tag%3Dse%26keywords%3Dwomens%2Bshoes%26qid%3D1779860575%26sr%3D8-57-spons%26aref%3DQwqIguuRu4%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1&aref=QwqIguuRu4&sp_cr=ZAZ"
    },
    {
        "category": "Womens Shoes",
        "productName": "layasa",
        "price": "499",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 15,
        "discountPercentage": "18%",
        "imageUrl": "https://m.media-amazon.com/images/I/51UMMVEPAvL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MToyOTY4MzI3NDE2NDQ3OTcwOjE3Nzk4NjA1NzU6c3BfYnRmOjMwMDkyMjE3ODk4NzAzMjo6MDo6&url=%2Flayasa-Womens-Sneaker-Stylish-Women%2Fdp%2FB0FDR6X8B5%2Fref%3Dsr_1_58_sspa%3Fdib%3DeyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE%26dib_tag%3Dse%26keywords%3Dwomens%2Bshoes%26qid%3D1779860575%26sr%3D8-58-spons%26aref%3DW1p8UuwQMz%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1&aref=W1p8UuwQMz&sp_cr=ZAZ"
    },
    {
        "category": "Womens Shoes",
        "productName": "layasa",
        "price": "499",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 45,
        "discountPercentage": "13%",
        "imageUrl": "https://m.media-amazon.com/images/I/419-CxuPHfL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MToyOTY4MzI3NDE2NDQ3OTcwOjE3Nzk4NjA1NzU6c3BfYnRmOjMwMTA2ODIwNDU5MDEzMjo6MDo6&url=%2Flayasa-Unique-Stylish-Women-Sneaker%2Fdp%2FB0FKNFC2CM%2Fref%3Dsr_1_59_sspa%3Fdib%3DeyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE%26dib_tag%3Dse%26keywords%3Dwomens%2Bshoes%26qid%3D1779860575%26sr%3D8-59-spons%26aref%3DsttsH6BzfL%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1&aref=sttsH6BzfL&sp_cr=ZAZ"
    },
    {
        "category": "Womens Shoes",
        "productName": "DOCTOR EXTRA SOFT",
        "price": "894",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "69%",
        "imageUrl": "https://m.media-amazon.com/images/I/71QvOwA+40L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MToyOTY4MzI3NDE2NDQ3OTcwOjE3Nzk4NjA1NzU6c3BfYnRmOjMwMDAyNDY3NzQzODgzMjo6MDo6&url=%2FDOCTOR-EXTRA-SOFT-Lightweight-D-1003-BEIGE-6%2Fdp%2FB0BWYX95SZ%2Fref%3Dsr_1_60_sspa%3Fdib%3DeyJ2IjoiMSJ9.T7757ONTcZ-YA0_0mYU_ky5eDcF3Gz1aBAmrkrom2zCCtZ9LSCUWwtkpDOKZMcpUTchnxSvNhYN0K6v1wKKvnbPkKSj2d9novsrCs5ELFu-bH0SmOIPczQV8HhexUY-FJiXukt1VZmRhvEHvOSpQqBjdyHHPtvyIV55nWI0jYR-r7lgO69jbzgYNYw6jqRJQmJYWdV8ZpiC8E82S9HM8LtlHAdGMWhkDCHRy1OwBz2PwbM4yWPGLxsG5J4jek6KFqnFBsJn-Cio_YpoahoV_tEvzln6MPLZsdEcw35xmHn4.tGGoeF1nHWBZGAWTTd9wLXtm3Z8dZNKrKrb62oCPsGE%26dib_tag%3Dse%26keywords%3Dwomens%2Bshoes%26qid%3D1779860575%26sr%3D8-60-spons%26aref%3DUF0nxelt2S%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1&aref=UF0nxelt2S&sp_cr=ZAZ"
    },
    {
        "category": "Bags",
        "productName": "scarters Downtown Messenger | Premium 15\" Laptop Bag for Men | Travel Laptop Bag with Organisation | Office Bag for Laptop",
        "price": "8,490",
        "rating": "4.4 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 2,
        "discountPercentage": "67%",
        "imageUrl": "https://m.media-amazon.com/images/I/61zl1YDE4WL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo5OTEwNDk3ODQ3Mzk2OToxNzc5ODYwNjAyOnNwX2F0ZjozMDEwNzg2MTEwNTgyMzI6OjA6Og&url=%2Fscarters-Downtown-Messenger-Premium-Organisation%2Fdp%2FB0DGXDKN6T%2Fref%3Dsr_1_1_sspa%3Fdib%3DeyJ2IjoiMSJ9.TKseuCLd2Rm4tnzY1s40K37uZiJ9JNR05uS4T7umOzSw9Bf_LzRB_pyAORktS4_D4uFa_ZHb1ezP0omru2YjbZQEAs4jZWCoNKWaeB0J4mZdEIaSSF0IE3X8HOKEV-iUAfpkVnXpyVEoE5Ryjl4aV2cK7i5nOOLmB2owhfDcUEZg-ew85qyF_gWyffYriUR2buclPPmr6nJKGNdhWMI62GO5lJYMfAKH73hTkSTn5uI.KfmTxvcNIglk0OVcpJm4lhvxupwcqbUksNrfuJVBK44%26dib_tag%3Dse%26keywords%3Dbags%26qid%3D1779860602%26sr%3D8-1-spons%26aref%3DLkoqBQxT8Y%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=LkoqBQxT8Y&sp_cr=ZAZ"
    },
    {
        "category": "Bags",
        "productName": "The Kairo 25L Laptop Backpack | Vegan Leather & Water-Resistant Nylon | Fits 15.6\u201d Laptop|Padded Sleeve| 5 Pockets|Unisex Office, Travel & College Bag | 1-Year Warranty",
        "price": "4,470",
        "rating": "N/A",
        "stockStatus": "In Stock",
        "stockQuantity": 17,
        "discountPercentage": "40%",
        "imageUrl": "https://m.media-amazon.com/images/I/81FQFV7t3wL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo5OTEwNDk3ODQ3Mzk2OToxNzc5ODYwNjAyOnNwX2F0ZjozMDExMTQ3NTA0MjY3MzI6OjA6Og&url=%2FLUGARE-Backpack-Midnight-Leather-Water-Resistant-Warranty%2Fdp%2FB0H2MTNG4Q%2Fref%3Dsr_1_2_sspa%3Fdib%3DeyJ2IjoiMSJ9.TKseuCLd2Rm4tnzY1s40K37uZiJ9JNR05uS4T7umOzSw9Bf_LzRB_pyAORktS4_D4uFa_ZHb1ezP0omru2YjbZQEAs4jZWCoNKWaeB0J4mZdEIaSSF0IE3X8HOKEV-iUAfpkVnXpyVEoE5Ryjl4aV2cK7i5nOOLmB2owhfDcUEZg-ew85qyF_gWyffYriUR2buclPPmr6nJKGNdhWMI62GO5lJYMfAKH73hTkSTn5uI.KfmTxvcNIglk0OVcpJm4lhvxupwcqbUksNrfuJVBK44%26dib_tag%3Dse%26keywords%3Dbags%26qid%3D1779860602%26sr%3D8-2-spons%26aref%3Dc6ZfjGiOyO%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=c6ZfjGiOyO&sp_cr=ZAZ"
    },
    {
        "category": "Bags",
        "productName": "Large Capacity Waterproof Backpack, Lightweight Travel Laptop Bag with Multiple Compartments, Black School Office Shoulder Bag",
        "price": "499",
        "rating": "2.7 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 43,
        "discountPercentage": "38%",
        "imageUrl": "https://m.media-amazon.com/images/I/313QdeKraYL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/Capacity-Waterproof-Backpack-Lightweight-Compartments/dp/B0FQTVLFKF/ref=sr_1_3?dib=eyJ2IjoiMSJ9.TKseuCLd2Rm4tnzY1s40K37uZiJ9JNR05uS4T7umOzSw9Bf_LzRB_pyAORktS4_D4uFa_ZHb1ezP0omru2YjbZQEAs4jZWCoNKWaeB0J4mZdEIaSSF0IE3X8HOKEV-iUAfpkVnXpyVEoE5Ryjl4aV2cK7i5nOOLmB2owhfDcUEZg-ew85qyF_gWyffYriUR2buclPPmr6nJKGNdhWMI62GO5lJYMfAKH73hTkSTn5uI.KfmTxvcNIglk0OVcpJm4lhvxupwcqbUksNrfuJVBK44&dib_tag=se&keywords=bags&qid=1779860602&sr=8-3"
    },
    {
        "category": "Bags",
        "productName": "Medium 35L Durable Fancy Modern Unisex School Bag,Ofice Bag,Travel Bag,Cabin Bag And Luggage Bag(Black Tiranga)",
        "price": "299",
        "rating": "3.5 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 19,
        "discountPercentage": "60%",
        "imageUrl": "https://m.media-amazon.com/images/I/51XVyVOm2oL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/ADAAZEL-Medium-Durable-Luggage-Tiranga/dp/B0GW11SSRD/ref=sr_1_4?dib=eyJ2IjoiMSJ9.TKseuCLd2Rm4tnzY1s40K37uZiJ9JNR05uS4T7umOzSw9Bf_LzRB_pyAORktS4_D4uFa_ZHb1ezP0omru2YjbZQEAs4jZWCoNKWaeB0J4mZdEIaSSF0IE3X8HOKEV-iUAfpkVnXpyVEoE5Ryjl4aV2cK7i5nOOLmB2owhfDcUEZg-ew85qyF_gWyffYriUR2buclPPmr6nJKGNdhWMI62GO5lJYMfAKH73hTkSTn5uI.KfmTxvcNIglk0OVcpJm4lhvxupwcqbUksNrfuJVBK44&dib_tag=se&keywords=bags&qid=1779860602&sr=8-4"
    },
    {
        "category": "Bags",
        "productName": "FUR JADEN Anti Theft Number Lock Backpack Bag with 15.6 Inch Laptop Compartment, USB Charging Port & Organizer Pocket for Men Women Boys Girls",
        "price": "588",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 11,
        "discountPercentage": "16%",
        "imageUrl": "https://m.media-amazon.com/images/I/61egMfcDWlL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/Number-Backpack-Compartment-Charging-Organizer/dp/B09VTDMRY7/ref=sr_1_5?dib=eyJ2IjoiMSJ9.TKseuCLd2Rm4tnzY1s40K37uZiJ9JNR05uS4T7umOzSw9Bf_LzRB_pyAORktS4_D4uFa_ZHb1ezP0omru2YjbZQEAs4jZWCoNKWaeB0J4mZdEIaSSF0IE3X8HOKEV-iUAfpkVnXpyVEoE5Ryjl4aV2cK7i5nOOLmB2owhfDcUEZg-ew85qyF_gWyffYriUR2buclPPmr6nJKGNdhWMI62GO5lJYMfAKH73hTkSTn5uI.KfmTxvcNIglk0OVcpJm4lhvxupwcqbUksNrfuJVBK44&dib_tag=se&keywords=bags&qid=1779860602&sr=8-5"
    },
    {
        "category": "Bags",
        "productName": "Safari Omega spacious/large laptop backpack with Raincover, college bag, travel bag for men and women, Black, 30 Litre",
        "price": "649",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "64%",
        "imageUrl": "https://m.media-amazon.com/images/I/71maWXZscfL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/Safari-Laptop-Backpack-Raincover-college/dp/B097JJ2CK6/ref=sr_1_6?dib=eyJ2IjoiMSJ9.TKseuCLd2Rm4tnzY1s40K37uZiJ9JNR05uS4T7umOzSw9Bf_LzRB_pyAORktS4_D4uFa_ZHb1ezP0omru2YjbZQEAs4jZWCoNKWaeB0J4mZdEIaSSF0IE3X8HOKEV-iUAfpkVnXpyVEoE5Ryjl4aV2cK7i5nOOLmB2owhfDcUEZg-ew85qyF_gWyffYriUR2buclPPmr6nJKGNdhWMI62GO5lJYMfAKH73hTkSTn5uI.KfmTxvcNIglk0OVcpJm4lhvxupwcqbUksNrfuJVBK44&dib_tag=se&keywords=bags&qid=1779860602&sr=8-6"
    },
    {
        "category": "Bags",
        "productName": "Safari Omega Spacious/Large 5 Compartment Laptop Backpack With Raincover, College Bag, Travel Bag For Unisex, Navy Blue, 30 Litre",
        "price": "619",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 31,
        "discountPercentage": "29%",
        "imageUrl": "https://m.media-amazon.com/images/I/81Fbfx0fpuL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/Safari-Spacious-Compartment-Backpack-Raincover/dp/B097LC1DJ6/ref=sr_1_7?dib=eyJ2IjoiMSJ9.TKseuCLd2Rm4tnzY1s40K37uZiJ9JNR05uS4T7umOzSw9Bf_LzRB_pyAORktS4_D4uFa_ZHb1ezP0omru2YjbZQEAs4jZWCoNKWaeB0J4mZdEIaSSF0IE3X8HOKEV-iUAfpkVnXpyVEoE5Ryjl4aV2cK7i5nOOLmB2owhfDcUEZg-ew85qyF_gWyffYriUR2buclPPmr6nJKGNdhWMI62GO5lJYMfAKH73hTkSTn5uI.KfmTxvcNIglk0OVcpJm4lhvxupwcqbUksNrfuJVBK44&dib_tag=se&keywords=bags&qid=1779860602&sr=8-7"
    },
    {
        "category": "Bags",
        "productName": "Safari Omega Spacious/Large 5 Compartment Laptop Backpack With Raincover, College Bag, Travel Bag For Unisex, Teal, 30 Litre",
        "price": "649",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 23,
        "discountPercentage": "19%",
        "imageUrl": "https://m.media-amazon.com/images/I/71XqKCamGaL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/Safari-Laptop-Backpack-Raincover-college/dp/B097JH4V5G/ref=sr_1_8?dib=eyJ2IjoiMSJ9.TKseuCLd2Rm4tnzY1s40K37uZiJ9JNR05uS4T7umOzSw9Bf_LzRB_pyAORktS4_D4uFa_ZHb1ezP0omru2YjbZQEAs4jZWCoNKWaeB0J4mZdEIaSSF0IE3X8HOKEV-iUAfpkVnXpyVEoE5Ryjl4aV2cK7i5nOOLmB2owhfDcUEZg-ew85qyF_gWyffYriUR2buclPPmr6nJKGNdhWMI62GO5lJYMfAKH73hTkSTn5uI.KfmTxvcNIglk0OVcpJm4lhvxupwcqbUksNrfuJVBK44&dib_tag=se&keywords=bags&qid=1779860602&sr=8-8"
    },
    {
        "category": "Bags",
        "productName": "ADISA Laptop Backpack 31 Ltrs",
        "price": "399",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 4,
        "discountPercentage": "32%",
        "imageUrl": "https://m.media-amazon.com/images/I/6175Nru3TXL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/ADISA-BP004-Weight-Casual-Backpack/dp/B07G3CG9FC/ref=sr_1_9?dib=eyJ2IjoiMSJ9.TKseuCLd2Rm4tnzY1s40K37uZiJ9JNR05uS4T7umOzSw9Bf_LzRB_pyAORktS4_D4uFa_ZHb1ezP0omru2YjbZQEAs4jZWCoNKWaeB0J4mZdEIaSSF0IE3X8HOKEV-iUAfpkVnXpyVEoE5Ryjl4aV2cK7i5nOOLmB2owhfDcUEZg-ew85qyF_gWyffYriUR2buclPPmr6nJKGNdhWMI62GO5lJYMfAKH73hTkSTn5uI.KfmTxvcNIglk0OVcpJm4lhvxupwcqbUksNrfuJVBK44&dib_tag=se&keywords=bags&qid=1779860602&sr=8-9"
    },
    {
        "category": "Bags",
        "productName": "Wesley Spartan Unisex Travel Hiking Laptop Bag fits Upto 17.3 inch with Raincover and Internal Organiser Backpack Rucksack College Backpack",
        "price": "748",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "61%",
        "imageUrl": "https://m.media-amazon.com/images/I/810b7vGgpkL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/Wesley-Raincover-Internal-Organiser-Backpack/dp/B0D5QTFT2T/ref=sr_1_10?dib=eyJ2IjoiMSJ9.TKseuCLd2Rm4tnzY1s40K37uZiJ9JNR05uS4T7umOzSw9Bf_LzRB_pyAORktS4_D4uFa_ZHb1ezP0omru2YjbZQEAs4jZWCoNKWaeB0J4mZdEIaSSF0IE3X8HOKEV-iUAfpkVnXpyVEoE5Ryjl4aV2cK7i5nOOLmB2owhfDcUEZg-ew85qyF_gWyffYriUR2buclPPmr6nJKGNdhWMI62GO5lJYMfAKH73hTkSTn5uI.KfmTxvcNIglk0OVcpJm4lhvxupwcqbUksNrfuJVBK44&dib_tag=se&keywords=bags&qid=1779860602&sr=8-10"
    },
    {
        "category": "Bags",
        "productName": "Gear Classic 4 19\"/31L Medium Faux Leather Water Resistant Anti Theft Laptop Backpack | Casual Backpack | Daypack | Travel Backpack | College Bag For Men/Women (Tan - Brown)",
        "price": "1,299",
        "rating": "4.4 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 37,
        "discountPercentage": "38%",
        "imageUrl": "https://m.media-amazon.com/images/I/71UOVYqao4L._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo5OTEwNDk3ODQ3Mzk2OToxNzc5ODYwNjAyOnNwX210ZjozMDEwNjA0MTU3MTkwMzI6OjA6Og&url=%2FGear-Classic-Resistant-Backpack-Tan-Brown%2Fdp%2FB0D87PN1FC%2Fref%3Dsr_1_11_sspa%3Fdib%3DeyJ2IjoiMSJ9.TKseuCLd2Rm4tnzY1s40K37uZiJ9JNR05uS4T7umOzSw9Bf_LzRB_pyAORktS4_D4uFa_ZHb1ezP0omru2YjbZQEAs4jZWCoNKWaeB0J4mZdEIaSSF0IE3X8HOKEV-iUAfpkVnXpyVEoE5Ryjl4aV2cK7i5nOOLmB2owhfDcUEZg-ew85qyF_gWyffYriUR2buclPPmr6nJKGNdhWMI62GO5lJYMfAKH73hTkSTn5uI.KfmTxvcNIglk0OVcpJm4lhvxupwcqbUksNrfuJVBK44%26dib_tag%3Dse%26keywords%3Dbags%26qid%3D1779860602%26sr%3D8-11-spons%26aref%3DYcsx8Xuofw%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1&aref=Ycsx8Xuofw&sp_cr=ZAZ"
    },
    {
        "category": "Bags",
        "productName": "SNITCH Rubik Laptop Cabin Size Off White Polycarbonate Hard Travel Suitcase - Trolley Bag Small & Luggage with 8 Wheels, Premium Lock, Laptop Compartment & Free Shoe Bag",
        "price": "3,499",
        "rating": "3.1 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 9,
        "discountPercentage": "16%",
        "imageUrl": "https://m.media-amazon.com/images/I/51zUaAQJN7L._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo5OTEwNDk3ODQ3Mzk2OToxNzc5ODYwNjAyOnNwX210ZjozMDExMDc0MTg5Mzc0MzI6OjA6Og&url=%2FSNITCH-Laptop-Polycarbonate-Travel-Suitcase%2Fdp%2FB0GY145CCD%2Fref%3Dsr_1_12_sspa%3Fdib%3DeyJ2IjoiMSJ9.TKseuCLd2Rm4tnzY1s40K37uZiJ9JNR05uS4T7umOzSw9Bf_LzRB_pyAORktS4_D4uFa_ZHb1ezP0omru2YjbZQEAs4jZWCoNKWaeB0J4mZdEIaSSF0IE3X8HOKEV-iUAfpkVnXpyVEoE5Ryjl4aV2cK7i5nOOLmB2owhfDcUEZg-ew85qyF_gWyffYriUR2buclPPmr6nJKGNdhWMI62GO5lJYMfAKH73hTkSTn5uI.KfmTxvcNIglk0OVcpJm4lhvxupwcqbUksNrfuJVBK44%26dib_tag%3Dse%26keywords%3Dbags%26qid%3D1779860602%26sr%3D8-12-spons%26aref%3DvIJ3xd1yNd%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1&aref=vIJ3xd1yNd&sp_cr=ZAZ"
    },
    {
        "category": "Bags",
        "productName": "SPENZ BAGS Saffron Mini Laptop Bag School & College Backpack Bag for Boys & Girls | Casual College Bag for boys & girls (GenZ)",
        "price": "349",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 45,
        "discountPercentage": "12%",
        "imageUrl": "https://m.media-amazon.com/images/I/817o1klUflL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/Saffron-Laptop-Casual-Backpack-College/dp/B0CY8RXRZQ/ref=sr_1_13?dib=eyJ2IjoiMSJ9.TKseuCLd2Rm4tnzY1s40K37uZiJ9JNR05uS4T7umOzSw9Bf_LzRB_pyAORktS4_D4uFa_ZHb1ezP0omru2YjbZQEAs4jZWCoNKWaeB0J4mZdEIaSSF0IE3X8HOKEV-iUAfpkVnXpyVEoE5Ryjl4aV2cK7i5nOOLmB2owhfDcUEZg-ew85qyF_gWyffYriUR2buclPPmr6nJKGNdhWMI62GO5lJYMfAKH73hTkSTn5uI.KfmTxvcNIglk0OVcpJm4lhvxupwcqbUksNrfuJVBK44&dib_tag=se&keywords=bags&qid=1779860602&sr=8-13"
    },
    {
        "category": "Bags",
        "productName": "Aristocrat Lava 17 Inch Compatible Laptop Backpack 25L | Premium Durable Fabric | 2 Compartments with Side Bottle Pocket | Padded Backpanel | Office & Travel Backpack for Men & Women",
        "price": "427",
        "rating": "3.7 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 47,
        "discountPercentage": "32%",
        "imageUrl": "https://m.media-amazon.com/images/I/71nXs0aNQSL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/Aristocrat-Compatible-Backpack-Compartments-Backpanel/dp/B0FMY7DLJT/ref=sr_1_14?dib=eyJ2IjoiMSJ9.TKseuCLd2Rm4tnzY1s40K37uZiJ9JNR05uS4T7umOzSw9Bf_LzRB_pyAORktS4_D4uFa_ZHb1ezP0omru2YjbZQEAs4jZWCoNKWaeB0J4mZdEIaSSF0IE3X8HOKEV-iUAfpkVnXpyVEoE5Ryjl4aV2cK7i5nOOLmB2owhfDcUEZg-ew85qyF_gWyffYriUR2buclPPmr6nJKGNdhWMI62GO5lJYMfAKH73hTkSTn5uI.KfmTxvcNIglk0OVcpJm4lhvxupwcqbUksNrfuJVBK44&dib_tag=se&keywords=bags&qid=1779860602&sr=8-14"
    },
    {
        "category": "Bags",
        "productName": "FUR JADEN Anti Theft Number Lock Backpack Bag with 15.6 Inch Laptop Compartment, USB Charging Port & Organizer Pocket for Men Women Boys Girls",
        "price": "699",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 12,
        "discountPercentage": "64%",
        "imageUrl": "https://m.media-amazon.com/images/I/71PRQKJNdHL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/Number-Backpack-Compartment-Charging-Organizer/dp/B09VTCNN75/ref=sr_1_15?dib=eyJ2IjoiMSJ9.TKseuCLd2Rm4tnzY1s40K37uZiJ9JNR05uS4T7umOzSw9Bf_LzRB_pyAORktS4_D4uFa_ZHb1ezP0omru2YjbZQEAs4jZWCoNKWaeB0J4mZdEIaSSF0IE3X8HOKEV-iUAfpkVnXpyVEoE5Ryjl4aV2cK7i5nOOLmB2owhfDcUEZg-ew85qyF_gWyffYriUR2buclPPmr6nJKGNdhWMI62GO5lJYMfAKH73hTkSTn5uI.KfmTxvcNIglk0OVcpJm4lhvxupwcqbUksNrfuJVBK44&dib_tag=se&keywords=bags&qid=1779860602&sr=8-15"
    },
    {
        "category": "Bags",
        "productName": "Safari Nudge Laptop Backpack for men & women, school bag for boys and girls, college bag, office bag, travel bag, 3 compartments, Bottle holder, Front pocket, Color Black",
        "price": "599",
        "rating": "3.9 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 3,
        "discountPercentage": "48%",
        "imageUrl": "https://m.media-amazon.com/images/I/61ZWpOeKc9L._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/Safari-Laptop-Backpack-college-compartments/dp/B097BHM5TV/ref=sr_1_16?dib=eyJ2IjoiMSJ9.TKseuCLd2Rm4tnzY1s40K37uZiJ9JNR05uS4T7umOzSw9Bf_LzRB_pyAORktS4_D4uFa_ZHb1ezP0omru2YjbZQEAs4jZWCoNKWaeB0J4mZdEIaSSF0IE3X8HOKEV-iUAfpkVnXpyVEoE5Ryjl4aV2cK7i5nOOLmB2owhfDcUEZg-ew85qyF_gWyffYriUR2buclPPmr6nJKGNdhWMI62GO5lJYMfAKH73hTkSTn5uI.KfmTxvcNIglk0OVcpJm4lhvxupwcqbUksNrfuJVBK44&dib_tag=se&keywords=bags&qid=1779860602&sr=8-16"
    },
    {
        "category": "Bags",
        "productName": "Safari Terra 37L Casual Printed Backpack, 3 Compartments, Raincover, Armor Base, Organizer, Bottle Holder, Front Pocket, School Bag for Boys and Girls, College Bag, Office Bag, Travel Bag",
        "price": "989",
        "rating": "4.5 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 2,
        "discountPercentage": "66%",
        "imageUrl": "https://m.media-amazon.com/images/I/61k47l+QsbL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/Safari-Compartment-Backpack-Organizer-College/dp/B0F1YNT5TR/ref=sr_1_17?dib=eyJ2IjoiMSJ9.TKseuCLd2Rm4tnzY1s40K37uZiJ9JNR05uS4T7umOzSw9Bf_LzRB_pyAORktS4_D4uFa_ZHb1ezP0omru2YjbZQEAs4jZWCoNKWaeB0J4mZdEIaSSF0IE3X8HOKEV-iUAfpkVnXpyVEoE5Ryjl4aV2cK7i5nOOLmB2owhfDcUEZg-ew85qyF_gWyffYriUR2buclPPmr6nJKGNdhWMI62GO5lJYMfAKH73hTkSTn5uI.KfmTxvcNIglk0OVcpJm4lhvxupwcqbUksNrfuJVBK44&dib_tag=se&keywords=bags&qid=1779860602&sr=8-17"
    },
    {
        "category": "Bags",
        "productName": "Impulse Laptop Bag for Men & Women | Waterproof Office Laptop Backpack | 15.6 Inch College & Travel Bag | Business Laptop Bag for Men & Women",
        "price": "649",
        "rating": "3.9 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 43,
        "discountPercentage": "41%",
        "imageUrl": "https://m.media-amazon.com/images/I/41ALD89z6IL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/Impulse-EmpowerElite-Resistant-Backpack-Black/dp/B0CSYYK6B9/ref=sr_1_18?dib=eyJ2IjoiMSJ9.TKseuCLd2Rm4tnzY1s40K37uZiJ9JNR05uS4T7umOzSw9Bf_LzRB_pyAORktS4_D4uFa_ZHb1ezP0omru2YjbZQEAs4jZWCoNKWaeB0J4mZdEIaSSF0IE3X8HOKEV-iUAfpkVnXpyVEoE5Ryjl4aV2cK7i5nOOLmB2owhfDcUEZg-ew85qyF_gWyffYriUR2buclPPmr6nJKGNdhWMI62GO5lJYMfAKH73hTkSTn5uI.KfmTxvcNIglk0OVcpJm4lhvxupwcqbUksNrfuJVBK44&dib_tag=se&keywords=bags&qid=1779860602&sr=8-18"
    },
    {
        "category": "Bags",
        "productName": "Safari Hitech Large Size 35 Ltrs Water Resistant Standard 4 Compartment Backpack - Black",
        "price": "899",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 3,
        "discountPercentage": "38%",
        "imageUrl": "https://m.media-amazon.com/images/I/61I6joqxQPL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/Safari-HiTech-Water-Resistant-Backpack/dp/B09B267161/ref=sr_1_19?dib=eyJ2IjoiMSJ9.TKseuCLd2Rm4tnzY1s40K37uZiJ9JNR05uS4T7umOzSw9Bf_LzRB_pyAORktS4_D4uFa_ZHb1ezP0omru2YjbZQEAs4jZWCoNKWaeB0J4mZdEIaSSF0IE3X8HOKEV-iUAfpkVnXpyVEoE5Ryjl4aV2cK7i5nOOLmB2owhfDcUEZg-ew85qyF_gWyffYriUR2buclPPmr6nJKGNdhWMI62GO5lJYMfAKH73hTkSTn5uI.KfmTxvcNIglk0OVcpJm4lhvxupwcqbUksNrfuJVBK44&dib_tag=se&keywords=bags&qid=1779860602&sr=8-19"
    },
    {
        "category": "Bags",
        "productName": "American Tourister Valex | 28L Backpack | 17\" Laptop Bag | 2 Compartments | College & Office Backpack for Men and Women | Black | 1 Year Global Warranty",
        "price": "1,299",
        "rating": "4.3 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 12,
        "discountPercentage": "37%",
        "imageUrl": "https://m.media-amazon.com/images/I/51yfw2JIxwL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/American-Tourister-BACKPACK-COMPARTMENT-ORGANIZER/dp/B0BTD4S4XF/ref=sr_1_20?dib=eyJ2IjoiMSJ9.TKseuCLd2Rm4tnzY1s40K37uZiJ9JNR05uS4T7umOzSw9Bf_LzRB_pyAORktS4_D4uFa_ZHb1ezP0omru2YjbZQEAs4jZWCoNKWaeB0J4mZdEIaSSF0IE3X8HOKEV-iUAfpkVnXpyVEoE5Ryjl4aV2cK7i5nOOLmB2owhfDcUEZg-ew85qyF_gWyffYriUR2buclPPmr6nJKGNdhWMI62GO5lJYMfAKH73hTkSTn5uI.KfmTxvcNIglk0OVcpJm4lhvxupwcqbUksNrfuJVBK44&dib_tag=se&keywords=bags&qid=1779860602&sr=8-20"
    },
    {
        "category": "Bags",
        "productName": "DailyObjects Pedal Everyday Casual Laptop Backpack Compatible with upto 14 inch Laptop | Unisex Travel Backpack | Made of Durable Canvas Material | Zippered Compartments with Pockets",
        "price": "1,348",
        "rating": "4.3 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 25,
        "discountPercentage": "32%",
        "imageUrl": "https://m.media-amazon.com/images/I/61QI+d7VzHL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo5OTEwNDk3ODQ3Mzk2OToxNzc5ODYwNjAyOnNwX2J0ZjozMDA5NTUxNjczNjk0MzI6OjA6Og&url=%2FDailyObjects-Everyday-Backpack-Compatible-Compartments%2Fdp%2FB0BRSBXFXM%2Fref%3Dsr_1_21_sspa%3Fdib%3DeyJ2IjoiMSJ9.TKseuCLd2Rm4tnzY1s40K37uZiJ9JNR05uS4T7umOzSw9Bf_LzRB_pyAORktS4_D4uFa_ZHb1ezP0omru2YjbZQEAs4jZWCoNKWaeB0J4mZdEIaSSF0IE3X8HOKEV-iUAfpkVnXpyVEoE5Ryjl4aV2cK7i5nOOLmB2owhfDcUEZg-ew85qyF_gWyffYriUR2buclPPmr6nJKGNdhWMI62GO5lJYMfAKH73hTkSTn5uI.KfmTxvcNIglk0OVcpJm4lhvxupwcqbUksNrfuJVBK44%26dib_tag%3Dse%26keywords%3Dbags%26qid%3D1779860602%26sr%3D8-21-spons%26aref%3D2wMPVNr0hQ%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1&aref=2wMPVNr0hQ&sp_cr=ZAZ"
    },
    {
        "category": "Bags",
        "productName": "MOKOBARA Women The Sunflower Work Tote Bag, Lightweight For Daily Use And Work With Luggage Sleeve And 14\" Laptop Compartment",
        "price": "6,499",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 34,
        "discountPercentage": "19%",
        "imageUrl": "https://m.media-amazon.com/images/I/61c9oH8jXPL._AC_UY218_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo5OTEwNDk3ODQ3Mzk2OToxNzc5ODYwNjAyOnNwX2J0ZjozMDA3MzM2MTk1MDY4MzI6OjA6Og&url=%2FMOKOBARA-Sunflower-Lightweight-Luggage-Compartment%2Fdp%2FB0FR9F59JC%2Fref%3Dsr_1_22_sspa%3Fdib%3DeyJ2IjoiMSJ9.TKseuCLd2Rm4tnzY1s40K37uZiJ9JNR05uS4T7umOzSw9Bf_LzRB_pyAORktS4_D4uFa_ZHb1ezP0omru2YjbZQEAs4jZWCoNKWaeB0J4mZdEIaSSF0IE3X8HOKEV-iUAfpkVnXpyVEoE5Ryjl4aV2cK7i5nOOLmB2owhfDcUEZg-ew85qyF_gWyffYriUR2buclPPmr6nJKGNdhWMI62GO5lJYMfAKH73hTkSTn5uI.KfmTxvcNIglk0OVcpJm4lhvxupwcqbUksNrfuJVBK44%26dib_tag%3Dse%26keywords%3Dbags%26qid%3D1779860602%26sr%3D8-22-spons%26aref%3DkNjSapqOdh%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1&aref=kNjSapqOdh&sp_cr=ZAZ"
    },
    {
        "category": "Fashion Accessories",
        "productName": "SHAPEMOUR",
        "price": "710",
        "rating": "4.6 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 23,
        "discountPercentage": "55%",
        "imageUrl": "https://m.media-amazon.com/images/I/51UmdnN9x-L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo3NzMyOTY4NjQyMTYyODAxOjE3Nzk4NjA2MjM6c3BfYXRmOjMwMDk5ODIyNzUwMTkzMjo6MDo6&url=%2FSHAPEMOUR-Invisible-Skin-Friendly-Adhesive-Breathable%2Fdp%2FB0FQ57MBR8%2Fref%3Dsr_1_1_sspa%3Fdib%3DeyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY%26dib_tag%3Dse%26keywords%3Dfashion%2Baccessories%26qid%3D1779860623%26sr%3D8-1-spons%26aref%3DBk5ePVQOsZ%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=Bk5ePVQOsZ&sp_cr=ZAZ"
    },
    {
        "category": "Fashion Accessories",
        "productName": "PINQ POLKA",
        "price": "999",
        "rating": "3.1 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 11,
        "discountPercentage": "38%",
        "imageUrl": "https://m.media-amazon.com/images/I/71M+JR-l6VL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo3NzMyOTY4NjQyMTYyODAxOjE3Nzk4NjA2MjM6c3BfYXRmOjMwMDkwMDczNTIwNTMzMjo6MDo6&url=%2FPINQ-POLKA-Reusable-Silicone-Invisible%2Fdp%2FB0CV9N97GZ%2Fref%3Dsr_1_2_sspa%3Fdib%3DeyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY%26dib_tag%3Dse%26keywords%3Dfashion%2Baccessories%26qid%3D1779860623%26sr%3D8-2-spons%26aref%3DNzY7TALyOC%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=NzY7TALyOC&sp_cr=ZAZ"
    },
    {
        "category": "Fashion Accessories",
        "productName": "Korean Fashion Style Pearl Rhinestone Metal Hair Clips Hair Pin | Stylish Hair Clips for Women | Cute Clips for Womans | Aesthetic & Pearl Hair Kilip Decoration Accessories (Pack of 11 Pcs)",
        "price": "279",
        "rating": "4.5 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 35,
        "discountPercentage": "21%",
        "imageUrl": "https://m.media-amazon.com/images/I/719Wu6YzV4L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo3NzMyOTY4NjQyMTYyODAxOjE3Nzk4NjA2MjM6c3BfYXRmOjMwMDk1MjgyMjU0NDEzMjo6MDo6&url=%2FJUHIGIFTMALL-Fashion-Rhinestone-Accessories-Jewellery%2Fdp%2FB0DFTSZGMN%2Fref%3Dsr_1_3_sspa%3Fdib%3DeyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY%26dib_tag%3Dse%26keywords%3Dfashion%2Baccessories%26qid%3D1779860623%26sr%3D8-3-spons%26aref%3D9FilZNcQIf%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=9FilZNcQIf&sp_cr=ZAZ"
    },
    {
        "category": "Fashion Accessories",
        "productName": "SALTY",
        "price": "499",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "39%",
        "imageUrl": "https://m.media-amazon.com/images/I/61nswNNZpPL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo3NzMyOTY4NjQyMTYyODAxOjE3Nzk4NjA2MjM6c3BfYXRmOjMwMDk4ODc5NjY4NzIzMjo6MDo6&url=%2FSALTY-Butterfly-Necklace-Jewellery-Accessories%2Fdp%2FB0F5CM6C2G%2Fref%3Dsr_1_4_sspa%3Fdib%3DeyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY%26dib_tag%3Dse%26keywords%3Dfashion%2Baccessories%26qid%3D1779860623%26sr%3D8-4-spons%26aref%3DKNN8ovTYYy%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1&aref=KNN8ovTYYy&sp_cr=ZAZ"
    },
    {
        "category": "Fashion Accessories",
        "productName": "Cerrito",
        "price": "149",
        "rating": "3.8 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "12%",
        "imageUrl": "https://m.media-amazon.com/images/I/71sxSIExY5L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Cerrito-Small-Claw-Clips-Women/dp/B0FLJMW2LM/ref=sr_1_5?dib=eyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY&dib_tag=se&keywords=fashion+accessories&qid=1779860623&sr=8-5"
    },
    {
        "category": "Fashion Accessories",
        "productName": "Fashion Frill",
        "price": "179",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "51%",
        "imageUrl": "https://m.media-amazon.com/images/I/61Td1XNsY9L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Fashion-Frill-Stunning-Adjustable-Bracelet/dp/B0BC1XMNSL/ref=sr_1_6?dib=eyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY&dib_tag=se&keywords=fashion+accessories&qid=1779860623&sr=8-6"
    },
    {
        "category": "Fashion Accessories",
        "productName": "SNMMIFER",
        "price": "159",
        "rating": "3.7 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "54%",
        "imageUrl": "https://m.media-amazon.com/images/I/61RB937xEBL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/SNMMIFER-Invisible-Lingerie-Clothing-Strength/dp/B0DKX3HX1W/ref=sr_1_7?dib=eyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY&dib_tag=se&keywords=fashion+accessories&qid=1779860623&sr=8-7"
    },
    {
        "category": "Fashion Accessories",
        "productName": "Shining Diva Fashion",
        "price": "199",
        "rating": "3.7 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 1,
        "discountPercentage": "66%",
        "imageUrl": "https://m.media-amazon.com/images/I/61dK8fy1dRL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Shining-Diva-Fashion-Stylish-Rings/dp/B0BX62B58N/ref=sr_1_8?dib=eyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY&dib_tag=se&keywords=fashion+accessories&qid=1779860623&sr=8-8"
    },
    {
        "category": "Fashion Accessories",
        "productName": "Shining Diva Fashion",
        "price": "299",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "40%",
        "imageUrl": "https://m.media-amazon.com/images/I/51JBNLtPvQS._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Shining-Diva-Fashion-Austrian-11942b/dp/B091MK45DB/ref=sr_1_9?dib=eyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY&dib_tag=se&keywords=fashion+accessories&qid=1779860623&sr=8-9"
    },
    {
        "category": "Fashion Accessories",
        "productName": "SNMMIFER",
        "price": "179",
        "rating": "4.3 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "63%",
        "imageUrl": "https://m.media-amazon.com/images/I/71nQETUrreL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/SNMMIFER-Silicone-Reusable-Clothing-Accessory/dp/B0D2TSQBQG/ref=sr_1_10?dib=eyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY&dib_tag=se&keywords=fashion+accessories&qid=1779860623&sr=8-10"
    },
    {
        "category": "Fashion Accessories",
        "productName": "Shining Diva Fashion",
        "price": "269",
        "rating": "3.8 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 25,
        "discountPercentage": "59%",
        "imageUrl": "https://m.media-amazon.com/images/I/71UCk9VMVrL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Shining-Diva-Fashion-Multilayer-rr14669b/dp/B0C1N366XM/ref=sr_1_11?dib=eyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY&dib_tag=se&keywords=fashion+accessories&qid=1779860623&sr=8-11"
    },
    {
        "category": "Fashion Accessories",
        "productName": "Shining Diva Fashion",
        "price": "299",
        "rating": "3.8 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 48,
        "discountPercentage": "35%",
        "imageUrl": "https://m.media-amazon.com/images/I/71R2QnSdv+L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Shining-Diva-Fashion-Butterfly-15911np/dp/B0D3DCP7JQ/ref=sr_1_12?dib=eyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY&dib_tag=se&keywords=fashion+accessories&qid=1779860623&sr=8-12"
    },
    {
        "category": "Fashion Accessories",
        "productName": "Cerrito",
        "price": "149",
        "rating": "3.5 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "44%",
        "imageUrl": "https://m.media-amazon.com/images/I/816MsegzW0L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Cerrito-Satin-Scrunchies-Women-Girls/dp/B0FP9GDV87/ref=sr_1_13?dib=eyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY&dib_tag=se&keywords=fashion+accessories&qid=1779860623&sr=8-13"
    },
    {
        "category": "Fashion Accessories",
        "productName": "1 Pcs Vintage Sunglasses Hair Clip Retro Style Hair Accessory Cute Metal Hairpins Barrette Ponytail Holder For Women And Girls Headdress",
        "price": "189",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 10,
        "discountPercentage": "27%",
        "imageUrl": "https://m.media-amazon.com/images/I/71PvFaefFyL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/APOLLINE-Sunglasses-Accessory-Hairpins-Headdress/dp/B0FGD4CKS1/ref=sr_1_14?dib=eyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY&dib_tag=se&keywords=fashion+accessories&qid=1779860623&sr=8-14"
    },
    {
        "category": "Fashion Accessories",
        "productName": "Shining Diva Fashion",
        "price": "299",
        "rating": "3.7 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 27,
        "discountPercentage": "53%",
        "imageUrl": "https://m.media-amazon.com/images/I/61Emq89LIUL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Shining-Diva-Fashion-Necklace-15831np/dp/B0D3DDQH3T/ref=sr_1_15?dib=eyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY&dib_tag=se&keywords=fashion+accessories&qid=1779860623&sr=8-15"
    },
    {
        "category": "Fashion Accessories",
        "productName": "Hair Accessories Set, Hair Bow, Jewellery Set, Bow, Necklace Earrings Combo, Flower Hair Pins, Bracelet, Gift Box for Women & Girls, Premium Girls Gift Hamper, Random Designs as per Latest Trend 5 Pcs",
        "price": "199",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "59%",
        "imageUrl": "https://m.media-amazon.com/images/I/713jnhKVsZL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Accessories-Jewellery-Necklace-Earrings-Bracelet/dp/B0GVFJTPQ2/ref=sr_1_16?dib=eyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY&dib_tag=se&keywords=fashion+accessories&qid=1779860623&sr=8-16"
    },
    {
        "category": "Fashion Accessories",
        "productName": "Shining Diva Fashion",
        "price": "275",
        "rating": "3.8 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 13,
        "discountPercentage": "68%",
        "imageUrl": "https://m.media-amazon.com/images/I/51xwCVQ-kpL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Shining-Diva-Fashion-Platinum-14677b/dp/B0BWTXDC4W/ref=sr_1_17?dib=eyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY&dib_tag=se&keywords=fashion+accessories&qid=1779860623&sr=8-17"
    },
    {
        "category": "Fashion Accessories",
        "productName": "Fashion Frill",
        "price": "189",
        "rating": "3.8 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "7%",
        "imageUrl": "https://m.media-amazon.com/images/I/7194VCDtmzL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Fashion-Frill-Jewellery-Accessories-Boyfriend/dp/B0FHWT3PFS/ref=sr_1_18?dib=eyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY&dib_tag=se&keywords=fashion+accessories&qid=1779860623&sr=8-18"
    },
    {
        "category": "Fashion Accessories",
        "productName": "Fashion Frill",
        "price": "249",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 9,
        "discountPercentage": "28%",
        "imageUrl": "https://m.media-amazon.com/images/I/612xOm1X6LL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Fashion-Frill-Jewellery-Geometric-Stainless/dp/B0BVB8D8XW/ref=sr_1_19?dib=eyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY&dib_tag=se&keywords=fashion+accessories&qid=1779860623&sr=8-19"
    },
    {
        "category": "Fashion Accessories",
        "productName": "SANNIDHI",
        "price": "265",
        "rating": "4.4 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 30,
        "discountPercentage": "5%",
        "imageUrl": "https://m.media-amazon.com/images/I/61m9YE3-1xL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/SANNIDHI%C2%AE-Hairband-Headbands-Headpiece-Accessories/dp/B0FKB6F1QC/ref=sr_1_20?dib=eyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY&dib_tag=se&keywords=fashion+accessories&qid=1779860623&sr=8-20"
    },
    {
        "category": "Fashion Accessories",
        "productName": "SANNIDHI",
        "price": "498",
        "rating": "4.3 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "55%",
        "imageUrl": "https://m.media-amazon.com/images/I/51eseQV7GiL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo3NzMyOTY4NjQyMTYyODAxOjE3Nzk4NjA2MjM6c3BfbXRmOjMwMTEwNTQ3NjU4MTEzMjo6MDo6&url=%2FSANNIDHI%25C2%25AE-Seamless-Wireless-Bralette-Convertible%2Fdp%2FB0GXDF1M55%2Fref%3Dsr_1_21_sspa%3Fdib%3DeyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY%26dib_tag%3Dse%26keywords%3Dfashion%2Baccessories%26qid%3D1779860623%26sr%3D8-21-spons%26aref%3DAGLzedu6AN%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1&aref=AGLzedu6AN&sp_cr=ZAZ"
    },
    {
        "category": "Fashion Accessories",
        "productName": "SLICKFIX",
        "price": "329",
        "rating": "3.6 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 44,
        "discountPercentage": "34%",
        "imageUrl": "https://m.media-amazon.com/images/I/71njwd8s0kL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo3NzMyOTY4NjQyMTYyODAxOjE3Nzk4NjA2MjM6c3BfbXRmOjMwMDE2OTIxNTExODMzMjo6MDo6&url=%2FSLICKFIX-Dressing-Double-Sided-Necklace-Friendly%2Fdp%2FB07PY3YRLH%2Fref%3Dsr_1_22_sspa%3Fdib%3DeyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY%26dib_tag%3Dse%26keywords%3Dfashion%2Baccessories%26qid%3D1779860623%26sr%3D8-22-spons%26aref%3DKYw5nB52nb%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1&aref=KYw5nB52nb&sp_cr=ZAZ"
    },
    {
        "category": "Fashion Accessories",
        "productName": "Round Cap, Two-Piece Set Reversible Fishing Hat with Daisy Print, Beige and Pink Colors for Women, Outdoor Sun Protection Headwear, Fashion Accessory for Beach and Daily Use",
        "price": "597",
        "rating": "5.0 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 41,
        "discountPercentage": "65%",
        "imageUrl": "https://m.media-amazon.com/images/I/61qxe-0ZgjL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo3NzMyOTY4NjQyMTYyODAxOjE3Nzk4NjA2MjM6c3BfbXRmOjMwMTA3NTQwODY2NzEzMjo6MDo6&url=%2FVedicBloom-Two-Piece-Reversible-Protection-Accessory%2Fdp%2FB0GW2H4B7R%2Fref%3Dsr_1_23_sspa%3Fdib%3DeyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY%26dib_tag%3Dse%26keywords%3Dfashion%2Baccessories%26qid%3D1779860623%26sr%3D8-23-spons%26aref%3DxUvDn2lU5h%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1&aref=xUvDn2lU5h&sp_cr=ZAZ"
    },
    {
        "category": "Fashion Accessories",
        "productName": "Korean Hair Clips for Womens - Set of 28 Hair Accessories, Hair Clips for Women Stylish Latest, Clips for Girls, Hairs Pins for Women, Cute Hair Accessories for Girls (Multicolor)",
        "price": "249",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 38,
        "discountPercentage": "19%",
        "imageUrl": "https://m.media-amazon.com/images/I/71kwtsYNstL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo3NzMyOTY4NjQyMTYyODAxOjE3Nzk4NjA2MjM6c3BfbXRmOjMwMTAzMDIwNjc0MTAzMjo6MDo6&url=%2FChicTresses%25C2%25AE-Korean-Hair-Clips-Womens%2Fdp%2FB0DT1PVR95%2Fref%3Dsr_1_24_sspa%3Fdib%3DeyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY%26dib_tag%3Dse%26keywords%3Dfashion%2Baccessories%26qid%3D1779860623%26sr%3D8-24-spons%26aref%3DxUiRrGVxuc%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1&aref=xUiRrGVxuc&sp_cr=ZAZ"
    },
    {
        "category": "Fashion Accessories",
        "productName": "ANNACREATIONS",
        "price": "229",
        "rating": "4.3 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 14,
        "discountPercentage": "26%",
        "imageUrl": "https://m.media-amazon.com/images/I/81Z7cQqwRwL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Annacreations-Fashion-Rhinestone-Accessories-Jewellery/dp/B099FD4Y2D/ref=sr_1_25?dib=eyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY&dib_tag=se&keywords=fashion+accessories&qid=1779860623&sr=8-25"
    },
    {
        "category": "Fashion Accessories",
        "productName": "Fashion Frill",
        "price": "209",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 24,
        "discountPercentage": "63%",
        "imageUrl": "https://m.media-amazon.com/images/I/61ZKHgFs86L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Fashion-Frill-Stainless-Bracelets-Accessories/dp/B0BTHBJT3L/ref=sr_1_26?dib=eyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY&dib_tag=se&keywords=fashion+accessories&qid=1779860623&sr=8-26"
    },
    {
        "category": "Fashion Accessories",
        "productName": "Shining Diva Fashion",
        "price": "296",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 49,
        "discountPercentage": "13%",
        "imageUrl": "https://m.media-amazon.com/images/I/81WZQlUV40L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Shining-Diva-Fashion-Accessories-14711hb/dp/B0BWJ5MFRY/ref=sr_1_27?dib=eyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY&dib_tag=se&keywords=fashion+accessories&qid=1779860623&sr=8-27"
    },
    {
        "category": "Fashion Accessories",
        "productName": "Niwlix",
        "price": "560",
        "rating": "4.3 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 25,
        "discountPercentage": "48%",
        "imageUrl": "https://m.media-amazon.com/images/I/511Uf9WQQqL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Niwlix-Accessories-Crossbody-Backpack-Messenger/dp/B0FB9DV96S/ref=sr_1_28?dib=eyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY&dib_tag=se&keywords=fashion+accessories&qid=1779860623&sr=8-28"
    },
    {
        "category": "Fashion Accessories",
        "productName": "Shining Diva Fashion",
        "price": "296",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 46,
        "discountPercentage": "49%",
        "imageUrl": "https://m.media-amazon.com/images/I/61v2wmAXkqL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Shining-Diva-Fashion-Multilayer-16178b/dp/B0DQLDY842/ref=sr_1_29?dib=eyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY&dib_tag=se&keywords=fashion+accessories&qid=1779860623&sr=8-29"
    },
    {
        "category": "Fashion Accessories",
        "productName": "Solitude",
        "price": "199",
        "rating": "3.9 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 9,
        "discountPercentage": "26%",
        "imageUrl": "https://m.media-amazon.com/images/I/61kuDf-pmNL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Solitude-Clothing-Strength-Invisible-Transparent/dp/B0FGQM8XVY/ref=sr_1_30?dib=eyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY&dib_tag=se&keywords=fashion+accessories&qid=1779860623&sr=8-30"
    },
    {
        "category": "Fashion Accessories",
        "productName": "Shining Diva Fashion",
        "price": "399",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 18,
        "discountPercentage": "40%",
        "imageUrl": "https://m.media-amazon.com/images/I/816rCp-Of4L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Shining-Diva-Fashion-Jewellery-cmb271/dp/B075HGP7FR/ref=sr_1_31?dib=eyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY&dib_tag=se&keywords=fashion+accessories&qid=1779860623&sr=8-31"
    },
    {
        "category": "Fashion Accessories",
        "productName": "8-Piece Women\u2019s Fashion Jewelry & Hair Accessories Gift Set | Pendant Chain, Pandora-Style Bracelet, Oxidised Jhumki Earrings | Satin Hair Bow, Scrunchie & Big Flower Claw Clip | Random Colors & Designs (ZEV_GIFT_HAMPER)",
        "price": "290",
        "rating": "4.8 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 11,
        "discountPercentage": "20%",
        "imageUrl": "https://m.media-amazon.com/images/I/61ad6XOQfRL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Zevarna-Accessories-Pandora-Style-Scrunchie-ZEV_GIFT_HAMPER/dp/B0GTFDKB2C/ref=sr_1_32?dib=eyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY&dib_tag=se&keywords=fashion+accessories&qid=1779860623&sr=8-32"
    },
    {
        "category": "Fashion Accessories",
        "productName": "5 Pcs Trendy Hair Accessories & Jewelry Gift Set for Girls & Women, Hair Bow, Jewellery Set, Pendant Necklace with Earrings, Flower Hair Pins, Charm Bracelet, White Gift Box Included, Random Designs as per Latest Trend",
        "price": "199",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 45,
        "discountPercentage": "45%",
        "imageUrl": "https://m.media-amazon.com/images/I/810ucogQzeL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Accessories-Jewellery-Necklace-Earrings-Bracelet/dp/B0GVFDWY5X/ref=sr_1_33?dib=eyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY&dib_tag=se&keywords=fashion+accessories&qid=1779860623&sr=8-33"
    },
    {
        "category": "Fashion Accessories",
        "productName": "TRENDY Korean Style Fashion Earrings Set, Pearl and Crystal Bow Design, Women's Jewellery Accessories, 2 Pairs",
        "price": "159",
        "rating": "N/A",
        "stockStatus": "Limited Stock",
        "stockQuantity": 16,
        "discountPercentage": "18%",
        "imageUrl": "https://m.media-amazon.com/images/I/71aJrbq6fTL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Fashion-Earrings-Crystal-Jewellery-Accessories/dp/B0GY9DVG6Z/ref=sr_1_34?dib=eyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY&dib_tag=se&keywords=fashion+accessories&qid=1779860623&sr=8-34"
    },
    {
        "category": "Fashion Accessories",
        "productName": "Korean Style Fashion Earrings Set, Pearl and Crystal Bow Design, Women's Jewellery Accessories, 2 Pairs",
        "price": "189",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 6,
        "discountPercentage": "52%",
        "imageUrl": "https://m.media-amazon.com/images/I/61VFUOPDvRL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/TRENDY-MART-Earrings-Jewellery-Accessories/dp/B0GPR5MB46/ref=sr_1_35?dib=eyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY&dib_tag=se&keywords=fashion+accessories&qid=1779860623&sr=8-35"
    },
    {
        "category": "Fashion Accessories",
        "productName": "Shining Diva Fashion",
        "price": "247",
        "rating": "3.8 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 24,
        "discountPercentage": "20%",
        "imageUrl": "https://m.media-amazon.com/images/I/61oCLzTHSiL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Shining-Diva-Fashion-Multilayer-10695b/dp/B07RWK1SFQ/ref=sr_1_36?dib=eyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY&dib_tag=se&keywords=fashion+accessories&qid=1779860623&sr=8-36"
    },
    {
        "category": "Fashion Accessories",
        "productName": "Cerrito",
        "price": "199",
        "rating": "3.9 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "28%",
        "imageUrl": "https://m.media-amazon.com/images/I/61L9MRQdoGL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Cerrito-Hair-Claw-Clips-Women/dp/B0F9KT9R4K/ref=sr_1_37?dib=eyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY&dib_tag=se&keywords=fashion+accessories&qid=1779860623&sr=8-37"
    },
    {
        "category": "Fashion Accessories",
        "productName": "finistra\u00ae Tulip Bracelet for Women Stylish | Gold Plated Pink Crystal Floral Jewellery | Adjustable Chain for Women & Girls Stylish | Elegant Tulip Bracelet for Women, Party & Daily Wear Accessory",
        "price": "299",
        "rating": "4.8 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "8%",
        "imageUrl": "https://m.media-amazon.com/images/I/71KSMj5vgsL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/finistra%C2%AE-Bracelet-Jewellery-Adjustable-Accessory/dp/B0GXLC54RG/ref=sr_1_38?dib=eyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY&dib_tag=se&keywords=fashion+accessories&qid=1779860623&sr=8-38"
    },
    {
        "category": "Fashion Accessories",
        "productName": "UB Unity Brand",
        "price": "189",
        "rating": "3.9 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 44,
        "discountPercentage": "24%",
        "imageUrl": "https://m.media-amazon.com/images/I/61pLOtTU2VL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/UB-Unity-Brand-Invisible-Transparent/dp/B0DJD8785Y/ref=sr_1_39?dib=eyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY&dib_tag=se&keywords=fashion+accessories&qid=1779860623&sr=8-39"
    },
    {
        "category": "Fashion Accessories",
        "productName": "GLUN",
        "price": "159",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 47,
        "discountPercentage": "17%",
        "imageUrl": "https://m.media-amazon.com/images/I/615vTh+9qPL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Detangling-Hair-Brush-Pink-Accessories/dp/B0FFB9FLZ7/ref=sr_1_40?dib=eyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY&dib_tag=se&keywords=fashion+accessories&qid=1779860623&sr=8-40"
    },
    {
        "category": "Fashion Accessories",
        "productName": "Mini Jewellery Travel Case, PU Leather Organizer Box, Small Portable Jewellery Storage Holder for Womens Rings Earrings Necklaces, Gifts for Girl Wedding, Birthday valentine (PU Leather Box - Black)",
        "price": "99",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 37,
        "discountPercentage": "47%",
        "imageUrl": "https://m.media-amazon.com/images/I/61yAVcEvqoL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Mini-Jewellery-Travel-Case-Organizer/dp/B0G92F5DM2/ref=sr_1_41?dib=eyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY&dib_tag=se&keywords=fashion+accessories&qid=1779860623&sr=8-41"
    },
    {
        "category": "Fashion Accessories",
        "productName": "Shining Diva Fashion",
        "price": "299",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 27,
        "discountPercentage": "15%",
        "imageUrl": "https://m.media-amazon.com/images/I/61epVg9IzvL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Shining-Diva-Fashion-Multilayer-14687b/dp/B0C5R9RKL8/ref=sr_1_42?dib=eyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY&dib_tag=se&keywords=fashion+accessories&qid=1779860623&sr=8-42"
    },
    {
        "category": "Fashion Accessories",
        "productName": "6-Piece Fashion Jewelry & Hair Accessory Gift Set for Women & Girls | Satin Hair Bow, Pendant Chain, Pandora-Style Bracelet, Oxidised Jhumki, Scrunchie & Big Flower Claw Clip | Random Colors & Designs",
        "price": "245",
        "rating": "4.1 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "41%",
        "imageUrl": "https://m.media-amazon.com/images/I/61UrRZN0KEL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Accessory-Pandora-Style-Bracelet-Oxidised-Scrunchie/dp/B0G2CPLHQ2/ref=sr_1_43?dib=eyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY&dib_tag=se&keywords=fashion+accessories&qid=1779860623&sr=8-43"
    },
    {
        "category": "Fashion Accessories",
        "productName": "Shining Diva Fashion",
        "price": "399",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 48,
        "discountPercentage": "25%",
        "imageUrl": "https://m.media-amazon.com/images/I/71SkAVXh7PL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Shining-Diva-Fashion-Earrings-15283er/dp/B0CK4H81HC/ref=sr_1_44?dib=eyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY&dib_tag=se&keywords=fashion+accessories&qid=1779860623&sr=8-44"
    },
    {
        "category": "Fashion Accessories",
        "productName": "14 Pieces Multi Unicorn Ice Cream Hair Clip Set Baby Hairpins Kids Girls Toddler Barrett Hair Accessories",
        "price": "169",
        "rating": "5.0 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 22,
        "discountPercentage": "15%",
        "imageUrl": "https://m.media-amazon.com/images/I/61LecvpDk-L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/ADILISH-FASHION-Unicorn-Hairpins-Accessories/dp/B0CJHLDT6H/ref=sr_1_45?dib=eyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY&dib_tag=se&keywords=fashion+accessories&qid=1779860623&sr=8-45"
    },
    {
        "category": "Fashion Accessories",
        "productName": "6-Piece Fashion Jewelry & Hair Accessory Gift Set for Women & Girls | Satin Hair Bow, Pendant Chain, Stylish Bracelet, Oxidised Jhumki, Scrunchie & Big Flower Claw Clip | Random Colors & Designs",
        "price": "199",
        "rating": "N/A",
        "stockStatus": "Limited Stock",
        "stockQuantity": 3,
        "discountPercentage": "50%",
        "imageUrl": "https://m.media-amazon.com/images/I/51BnJjXEOUL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/6-Piece-Accessory-Bracelet-Oxidised-Scrunchie/dp/B0GTZKWV2K/ref=sr_1_46?dib=eyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY&dib_tag=se&keywords=fashion+accessories&qid=1779860623&sr=8-46"
    },
    {
        "category": "Fashion Accessories",
        "productName": "Shining Diva Fashion",
        "price": "259",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 12,
        "discountPercentage": "69%",
        "imageUrl": "https://m.media-amazon.com/images/I/71ynZup2ORL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Shining-Diva-Fashion-Butterfly-15200np/dp/B0CBFYQ9XK/ref=sr_1_47?dib=eyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY&dib_tag=se&keywords=fashion+accessories&qid=1779860623&sr=8-47"
    },
    {
        "category": "Fashion Accessories",
        "productName": "2pcs Hair Bands For Women, Stretchy Wide Headband For Women, Twisted Knot Bohemian Large Hairband, Head Band Hair Accessories Wear For Yoga, Fashion, Working Out, Travel Or Running",
        "price": "199",
        "rating": "3.9 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 6,
        "discountPercentage": "59%",
        "imageUrl": "https://m.media-amazon.com/images/I/61dZbzcsHvL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Stretchy-Headband-Bohemian-Hairband-Accessories/dp/B0FFMWL93G/ref=sr_1_48?dib=eyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY&dib_tag=se&keywords=fashion+accessories&qid=1779860623&sr=8-48"
    },
    {
        "category": "Fashion Accessories",
        "productName": "10 Pcs Trendy Hair Accessories & Jewelry Gift Set for Girls & Women | Random Designs as per Latest Trend | Pink Gift Box Included",
        "price": "299",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 49,
        "discountPercentage": "21%",
        "imageUrl": "https://m.media-amazon.com/images/I/61TdEpcwQzL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Mohmit-Mart-Accessories-Jewelry-Included/dp/B0GJDB3BK8/ref=sr_1_49?dib=eyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY&dib_tag=se&keywords=fashion+accessories&qid=1779860623&sr=8-49"
    },
    {
        "category": "Fashion Accessories",
        "productName": "Shining Diva Fashion",
        "price": "261",
        "rating": "4.2 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "28%",
        "imageUrl": "https://m.media-amazon.com/images/I/51tHP1m96XL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Shining-Diva-Fashion-Earrings-16210er/dp/B0DQXXR484/ref=sr_1_50?dib=eyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY&dib_tag=se&keywords=fashion+accessories&qid=1779860623&sr=8-50"
    },
    {
        "category": "Fashion Accessories",
        "productName": "Hairdoo",
        "price": "1,599",
        "rating": "N/A",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "67%",
        "imageUrl": "https://m.media-amazon.com/images/I/81xw82PRvIL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Hairdoo-Accessories-Scrunchies-Earrings-Occasions/dp/B0GWVMJS33/ref=sr_1_51?dib=eyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY&dib_tag=se&keywords=fashion+accessories&qid=1779860623&sr=8-51"
    },
    {
        "category": "Fashion Accessories",
        "productName": "VAMA",
        "price": "298",
        "rating": "3.8 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "43%",
        "imageUrl": "https://m.media-amazon.com/images/I/51Na9+H1fYL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/VAMA-FASHIONS-Rhinestone-Lightweight-Accessory/dp/B0FHVVQR5S/ref=sr_1_52?dib=eyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY&dib_tag=se&keywords=fashion+accessories&qid=1779860623&sr=8-52"
    },
    {
        "category": "Fashion Accessories",
        "productName": "Diversa",
        "price": "299",
        "rating": "3.9 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 4,
        "discountPercentage": "24%",
        "imageUrl": "https://m.media-amazon.com/images/I/71nmVek9s5L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Diversa-Geometric-Accessories-Barrettes-GOLDEN-PACK-3/dp/B0FK7YQYMW/ref=sr_1_53?dib=eyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY&dib_tag=se&keywords=fashion+accessories&qid=1779860623&sr=8-53"
    },
    {
        "category": "Fashion Accessories",
        "productName": "SNMMIFER",
        "price": "249",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 45,
        "discountPercentage": "30%",
        "imageUrl": "https://m.media-amazon.com/images/I/61VhKWBzMLL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/SNMMIFER-Boob-Tape-Kit-Reusable/dp/B0CR8XLQZ6/ref=sr_1_54?dib=eyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY&dib_tag=se&keywords=fashion+accessories&qid=1779860623&sr=8-54"
    },
    {
        "category": "Fashion Accessories",
        "productName": "Yellow Chimes",
        "price": "265",
        "rating": "3.8 out of 5 stars",
        "stockStatus": "Only Few Left",
        "stockQuantity": 29,
        "discountPercentage": "9%",
        "imageUrl": "https://m.media-amazon.com/images/I/618DILZe09L._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Yellow-Chimes-Leather-Wraps-YCFJER-105MLTWRP-BK/dp/B07MX8BX1L/ref=sr_1_55?dib=eyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY&dib_tag=se&keywords=fashion+accessories&qid=1779860623&sr=8-55"
    },
    {
        "category": "Fashion Accessories",
        "productName": "Shining Diva Fashion",
        "price": "299",
        "rating": "4.0 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "47%",
        "imageUrl": "https://m.media-amazon.com/images/I/51zqJUDBnWL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/Shining-Diva-Fashion-Earrings-15066er/dp/B0CNH38J1K/ref=sr_1_56?dib=eyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY&dib_tag=se&keywords=fashion+accessories&qid=1779860623&sr=8-56"
    },
    {
        "category": "Fashion Accessories",
        "productName": "2Pcs Brooch for Men Royal, Lapel Pin For Men Suit, Western Style Fashion Accessory, Suit Brooch, for Men Suit, Gold And Silver Feather Brooches Set Of Two Pieces, Hat Decoration For Special Occasions",
        "price": "349",
        "rating": "N/A",
        "stockStatus": "Limited Stock",
        "stockQuantity": 46,
        "discountPercentage": "50%",
        "imageUrl": "https://m.media-amazon.com/images/I/61-qArP8RWL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo3NzMyOTY4NjQyMTYyODAxOjE3Nzk4NjA2MjM6c3BfYnRmOjMwMTA5NDkwMDI1NTAzMjo6MDo6&url=%2FWestern-Accessory-Brooches-Decoration-Occasions%2Fdp%2FB0GXJBD1D1%2Fref%3Dsr_1_57_sspa%3Fdib%3DeyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY%26dib_tag%3Dse%26keywords%3Dfashion%2Baccessories%26qid%3D1779860623%26sr%3D8-57-spons%26aref%3DFSVVIKGcTG%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1&aref=FSVVIKGcTG&sp_cr=ZAZ"
    },
    {
        "category": "Fashion Accessories",
        "productName": "SANNIDHI",
        "price": "384",
        "rating": "4.3 out of 5 stars",
        "stockStatus": "Out Of Stock",
        "stockQuantity": 0,
        "discountPercentage": "14%",
        "imageUrl": "https://m.media-amazon.com/images/I/51xQ01JSxDL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo3NzMyOTY4NjQyMTYyODAxOjE3Nzk4NjA2MjM6c3BfYnRmOjMwMDQ2MzE5MDY5MDczMjo6MDo6&url=%2FSANNIDHI%25C2%25AE-Strawberry-Accessories-Valentine-Girlfriend%2Fdp%2FB0DQWWMN84%2Fref%3Dsr_1_58_sspa%3Fdib%3DeyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY%26dib_tag%3Dse%26keywords%3Dfashion%2Baccessories%26qid%3D1779860623%26sr%3D8-58-spons%26aref%3D3tudMQ4Dxm%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1&aref=3tudMQ4Dxm&sp_cr=ZAZ"
    },
    {
        "category": "Fashion Accessories",
        "productName": "MEENAZ",
        "price": "199",
        "rating": "3.9 out of 5 stars",
        "stockStatus": "In Stock",
        "stockQuantity": 25,
        "discountPercentage": "14%",
        "imageUrl": "https://m.media-amazon.com/images/I/51QWAL3a-BL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo3NzMyOTY4NjQyMTYyODAxOjE3Nzk4NjA2MjM6c3BfYnRmOjMwMDYyMjc2NTUyMDQzMjo6MDo6&url=%2FMEENAZ-Stainless-Stylish-Boyfriend-RINGS-AM061%2Fdp%2FB09DVL8ZLV%2Fref%3Dsr_1_59_sspa%3Fdib%3DeyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY%26dib_tag%3Dse%26keywords%3Dfashion%2Baccessories%26qid%3D1779860623%26sr%3D8-59-spons%26aref%3DpqYT2GGJDu%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1&aref=pqYT2GGJDu&sp_cr=ZAZ"
    },
    {
        "category": "Fashion Accessories",
        "productName": "5 Pcs Combo Pendant Necklace Set for Women & Girls \u2013 Heart, Butterfly, Infinity, Life of Tree & Pearl Design \u2013 Stylish Fashion Jewelry Gifts for Girls",
        "price": "284",
        "rating": "4.3 out of 5 stars",
        "stockStatus": "Limited Stock",
        "stockQuantity": 31,
        "discountPercentage": "13%",
        "imageUrl": "https://m.media-amazon.com/images/I/71cxI5fISGL._AC_UL320_.jpg",
        "productLink": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo3NzMyOTY4NjQyMTYyODAxOjE3Nzk4NjA2MjM6c3BfYnRmOjMwMDc4NjI5NjkwNjUzMjo6MDo6&url=%2FARISTAL-Jewellery-Combo-Pendant-Necklace%2Fdp%2FB0FNLPVDN8%2Fref%3Dsr_1_60_sspa%3Fdib%3DeyJ2IjoiMSJ9.YdRxqyaGj7FI9t_0snq9rcwCc0PmO8PG0W3Koh01rKsoj7FJ4PkIBmWvBkHFmG2FZGp2kDGiY7rNOlGHimne_ROw1QyHAAsR_354L-A2uj-srde-XZaJ2DblRYYpbzTCSdtjIr3P5jGnj5vOXaKcQKX1vBK67R9m4O1cR0q21o34Hxi64bIlpOQc3jSHhY-sniuXjUlPwFmA5NaaMFsFfUSpIUseuKG5AI0RHGjwRbFJOEmf9TFZMOShrcvgitU4DX8P3Dkzp_99VsgofCvSApedv8lyVQJ7LBXdi22l-us.FFW30cMSK6XHQGJAVMrxNtA0RC3J2K6wIliWHACUxDY%26dib_tag%3Dse%26keywords%3Dfashion%2Baccessories%26qid%3D1779860623%26sr%3D8-60-spons%26aref%3DWPocwbGEaM%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1&aref=WPocwbGEaM&sp_cr=ZAZ"
    }
        ],
        category : 'all',
        wishlistitems: [],
        cartitems : [],
        currentUser: null,
        registeredUsers: [],
        reviews: []
    }),
    
    withComputed((store) => ({

    filteredproducts: computed(() => {

        const filterCat = store.category().toLowerCase();

        if (filterCat === 'all') {
            return store.products();
        }

        return store.products().filter(
            (p) => p.category.toLowerCase() === filterCat
        );

    }),

    isLoggedIn: computed(() => store.currentUser() !== null),

    cartSubtotal: computed(() => {
        return store.cartitems().reduce((total, item) => {
            const price = parseFloat(item.product.price.replace(/,/g, ''));
            return total + (price * item.quantity);
        }, 0);
    }),

    cartTotalItems: computed(() => {
        return store.cartitems().reduce((total, item) => total + item.quantity, 0);
    })

})),

withMethods((store) => {
    const toaster = inject(Toaster);
    return {
        setCategory(category: string) {
            patchState(store, {category})
        },
        addtowishlist(product: Product) {
            if (!store.wishlistitems().find(p => p.productName === product.productName)) {
                patchState(store, { wishlistitems: [...store.wishlistitems(), product] });
                toaster.success("Added to wishlist");
            }
        },
        removefromwishlist(productName: string) {
            const updatewishlistitems = store.wishlistitems().filter(p => p.productName !== productName);
            patchState(store, {wishlistitems : updatewishlistitems});
            toaster.success("Removed from wishlist");
        },

        addtocart(product: Product, quantity = 1) {
            const existingItemsname = store
                .cartitems()
                .findIndex(
                    i => i.product.productName === product.productName
                );

            const updatedcartitems = produce(
                store.cartitems(),
                (draft) => {
                    if (existingItemsname !== -1) {
                        draft[existingItemsname].quantity += quantity;
                        return;
                    }
                    draft.push({
                        product: product,
                        quantity: quantity
                    });
                }
            );

            patchState(store, {
                cartitems: updatedcartitems
            });
            toaster.cartSuccess(existingItemsname !== -1 ? 'Added to cart again' : 'Added to cart')
        },

        removeFromCart(productName: string) {
            const updated = store.cartitems().filter(i => i.product.productName !== productName);
            patchState(store, { cartitems: updated });
            toaster.success('Removed from cart');
        },

        updateCartQuantity(productName: string, quantity: number) {
            if (quantity < 1) return;
            const updatedcartitems = produce(
                store.cartitems(),
                (draft) => {
                    const idx = draft.findIndex(i => i.product.productName === productName);
                    if (idx !== -1) {
                        draft[idx].quantity = quantity;
                    }
                }
            );
            patchState(store, { cartitems: updatedcartitems });
        },

        // Auth methods
        signup(user: User) {
            const exists = store.registeredUsers().find(u => u.email === user.email);
            if (exists) {
                toaster.error('Email already registered');
                return false;
            }
            patchState(store, {
                registeredUsers: [...store.registeredUsers(), user],
                currentUser: user
            });
            toaster.success('Account created successfully!');
            return true;
        },

        login(email: string, password: string) {
            const user = store.registeredUsers().find(
                u => u.email === email && u.password === password
            );
            if (user) {
                patchState(store, { currentUser: user });
                toaster.success('Welcome back, ' + user.name + '!');
                return true;
            }
            toaster.error('Invalid email or password');
            return false;
        },

        logout() {
            patchState(store, { currentUser: null });
            toaster.success('Logged out successfully');
        },

        // Review methods
        addReview(review: Review) {
            if (!store.currentUser()) {
                toaster.error('Please sign in to write a review');
                return false;
            }
            patchState(store, {
                reviews: [...store.reviews(), review]
            });
            toaster.success('Review submitted!');
            return true;
        },

        getProductReviews(productName: string): Review[] {
            return store.reviews().filter(r => r.productName === productName);
        },

        getProductByName(productName: string): Product | undefined {
            return store.products().find(p => p.productName === productName);
        }
    }
})

)