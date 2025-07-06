import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import for *ngIf, *ngFor
import { FormsModule } from '@angular/forms';   // For ngModel binding

@Component({
  selector: 'app-laser-cutting',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './laser-cutting.component.html',
  styleUrls: ['./laser-cutting.component.scss']
})
export class LaserCuttingComponent {
  categories = [
    { name: 'Laser Safety Doors', code: 'LSD' },
    { name: 'Laser Sliding Gates', code: 'LSG' },
    { name: 'Laser Windows', code: 'LW' },
    { name: 'Laser Grills', code: 'LG' },
    { name: 'Laser Frames', code: 'LF' },
    { name: 'Laser Jali', code: 'LJ' },
    { name: 'Laser Other Items', code: 'LOT' },
  ];

  images: { [key: string]: string[] } = {
    'LSD': [
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751304436/images_83_rozi2s.jpg',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751304436/images_82_ap27qh.jpg',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751304435/images_81_nu2jpp.jpg',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751304435/images_80_eo91dl.jpg',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751304433/flower-plant-design_hobd8t.jpg'
    ],
    'LSG': [
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751304444/m-s-gate_jxhslp.jpg',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751304435/images_79_awxkwr.jpg',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751304433/5e0da3_243808915b5543c0b88cf201c2834cb1_mv2_eeb9ul.jpg',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751304433/images_77_jyyubv.jpg',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751304433/images_78_onh73k.jpg',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751304433/images_76_bwz0am.jpg',
    ],
    'LW': [
      'https://cuttingmaster.com/wp-content/uploads/2020/04/window-cnc-design-black.jpg',
      'https://i.pinimg.com/474x/5d/01/d1/5d01d1105b4d4cd669392496e17d3793.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdbeiEywoL9Wpj5nNBI-_ddwHiG3eUe4RKuA&s',
      'https://5.imimg.com/data5/SELLER/Default/2021/12/JY/RT/MT/21966880/ms-laser-cut-window-grill.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcpY-GBG5MG74GYxll__Js3f0zGiX7nlSB2B1Nr8gkSn55emsNLzSBw2cLdLes8iMqRKU&usqp=CAU',
    ],
    'LG': [
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751304434/images_73_disuq3.jpg',
      'https://5.imimg.com/data5/SELLER/Default/2021/7/BM/YB/LA/31396602/new-product.jpeg',
      'https://5.imimg.com/data5/SELLER/Default/2021/12/RT/TF/MQ/139948009/6-500x500.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYKBLfwrvAm4EERRmxio874ldRmno7gSIMq-8Vn4rlUem2F2Call2wuH0eOpheJ2jAFb8&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTjuB_4faPwbG1scuuxLxxhwxpyI2B2g0xtVIg1v9dY4H-fTQuRtmn0d8noTvGgCSSwSA&usqp=CAU',

    ],
    'LF': [
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751304434/images_74_el76xo.jpg',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751304434/images_73_disuq3.jpg',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751304434/images_73_disuq3.jpg',
    ],
    'LJ': [
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751304445/WhatsApp_Image_2022-09-16_at_16.37.37_z3ycji.jpg',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751304444/IMG_20250627_192012_cuujcl.png',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751304434/House-elevation-flower-design-ideas-02_iosbfh.png',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751304434/House-elevation-flower-design-ideas-06_sluy7w.png',
    ],
    'LOT': [
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751304444/IMG_20250627_191951_oneauw.jpg',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751304444/IMG_20250627_191812_wbmxcz.jpg',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751304444/IMG_20250627_191846_rz41bi.jpg',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751304440/IMG_20250627_191615_nekdt2.jpg',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751304439/IMG_20250627_191745_d7a3e4.jpg',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751304437/IMG_20250627_191419_qiypuz.jpg',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751304437/IMG_20250627_191542_ti3fcq.jpg',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751304437/IMG_20250627_191723_xyjzx4.jpg',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751304435/il_1588xN.6675440926_r4y5_iszvt0.jpg',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751304436/IMG_20250627_191655_guzzwz.jpg',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751304434/il_1588xN.5554830596_t7se_nagois.jpg',

    ],
    // G, F, J, OT - Add remaining as above
  };

  selectedCategory = 'LSD';
  currentPage = 1;
  itemsPerPage = 9;
  searchQuery = '';

  get pagedImages(): string[] {
    const list = this.getFilteredImages();
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return list.slice(start, start + this.itemsPerPage);
  }

  get totalPages(): number {
    return Math.ceil(this.getFilteredImages().length / this.itemsPerPage);
  }

  getFilteredImages(): string[] {
    const images = this.images[this.selectedCategory] || [];
    if (!this.searchQuery) return images;

    const prefix = this.selectedCategory;
    return images.filter((_, i) => `${prefix}${i + 1}`.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }

  getOriginalIndex(imageUrl: string): number {
    return this.images[this.selectedCategory].indexOf(imageUrl);
  }

  selectCategory(code: string) {
    this.selectedCategory = code;
    this.currentPage = 1;
    this.searchQuery = '';
  }

  // goToPage(n: number) {
  //   this.currentPage = n;
  // }

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages || page === this.currentPage) return;
    this.currentPage = page;
    this.getFilteredImages();
    window.scrollTo({ top: 0, behavior: 'smooth' });  // Scroll to top smoothly
  }


  get visiblePages(): (number | string)[] {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (this.totalPages <= maxVisible) {
      return Array.from({ length: this.totalPages }, (_, i) => i + 1);
    }

    if (this.currentPage <= 3) {
      pages.push(1, 2, 3, '...', this.totalPages);
    } else if (this.currentPage >= this.totalPages - 2) {
      pages.push(1, '...', this.totalPages - 2, this.totalPages - 1, this.totalPages);
    } else {
      pages.push(1, '...', this.currentPage - 1, this.currentPage, this.currentPage + 1, '...', this.totalPages);
    }

    return pages;
  }

  isNumber(value: any): value is number {
    return typeof value === 'number';
  }

  selectedImage: string | null = null;

  openImageModal(image: string) {
    this.selectedImage = image;
  }

  closeImageModal() {
    this.selectedImage = null;
  }

  ngOnInit(): void {
    window.addEventListener('keydown', this.handleEscape);
  }

  ngOnDestroy(): void {
    window.removeEventListener('keydown', this.handleEscape);
  }

  handleEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      this.closeImageModal();
    }
  };

}


