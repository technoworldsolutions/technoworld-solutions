import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import for *ngIf, *ngFor
import { FormsModule } from '@angular/forms';   // For ngModel binding

@Component({
  selector: 'app-fabrication',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fabrication.component.html',
  styleUrl: './fabrication.component.scss'
})

export class FabricationComponent {
  categories = [
    { name: 'Safety Doors', code: 'SD' },
    { name: 'Sliding Gates', code: 'SG' },
    { name: 'Windows', code: 'W' },
    { name: 'Grills', code: 'G' },
    { name: 'Jina', code: 'J' },
    { name: 'Shade', code: 'S' },
    { name: 'Other Items', code: 'OT' },
  ];

  images: { [key: string]: string[] } = {
    'SD': [
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351352/metal-single-door-ms-safety-do-20240524165640868_u6mzor.png',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351349/18mm-mild-steel-safety-door-500x500_jqkn6m.webp',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351350/ms-safety-door-2217031980-52h943n3_kgpzem.avif',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351349/ms-safety-door-500x500_lzgfl5.webp',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351349/hq720_v7mdgx.jpg',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351348/WhatsApp-Image-2022-06-26-at-4.00.10-PM-1_utul5c.jpg',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351349/ms-safety-door-2217806736-lgi07pv9_y0ipev.avif',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351348/images_x441jk.jpg',
    ],
    'SG': [
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351349/IMG_8835_grande_jktfet.webp',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351347/il_570xN.4416335476_qeji_my8weg.webp',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351347/il_340x270.4385810565_jfo0_xr26u9.webp',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351350/3c69c5bb1519abe6ea2575fc08f13a8e_zlxck5.jpg',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351348/4-feet-mild-steel-swing-gate_kgzlkv.jpg',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351348/gates3_ky4im1.jpg',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351349/gas-stove-500x500_voo5yp.webp',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351347/3ec36149988334884b402b6b816835d0_cyxhcp.jpg',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351348/Modern-Main-Gate._tqux7h.jpg',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351348/aluminium-profiles_vg9owv.jpg',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351346/mild-steel-home-main-gate-500x500_cu5jtd.webp',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351347/il_570xN.4463707395_644x_g8uhij.avif',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351345/il_570xN.4069496929_c735_ktmjdk.avif',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351345/il_570xN.3997686990_igx9_l0ekza.avif',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351345/il_570xN.3997686990_igx9_l0ekza.avif',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351343/maxresdefault_esw9wn.jpg',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351344/driveway-gate-iron-age-manufacturing-ltd-img_ed31cf82045cfcd4_14-6031-1-6541707_l8kssc.jpg',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351344/Importance_of_Entry_Gates_600x_nmidol.jpg',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351342/rolling-shutter-500x500_zyxcm2.webp',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351344/33a896845fb0359fd64cc1507b862b37_rxdfw7.jpg',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351343/caf91483abc86cc93d8a54404089ef5e_zh1jkf.jpg',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351343/il_340x270.4069557125_6sc2_vf5ya2.avif',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351342/360_F_522301892_y7nYZuJ5X3Mn0jIFIg2S7ycVybSOMR0Y_zi2eia.jpg',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351342/360_F_522301892_y7nYZuJ5X3Mn0jIFIg2S7ycVybSOMR0Y_zi2eia.jpg',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351342/291a51233cfc574f566ad62f756c049e_i115ik.jpg',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351342/b9d0ffff4f7c2c963d640c4b4183c67a_y51qeg.jpg',
    ],
    'W': [
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351348/ms-window-grill-742_lvgnl3.jpg',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351347/9b57c0_1e1e2ff16db2481f837fef7200ad80ce_mv2_tjijlb.jpg',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351348/images_x441jk.jpg',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351347/product-jpeg-1000x1000_dougms.webp',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351347/images_1_qvcdif.jpg',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351347/mild-steel-window-safety-grill_owfugw.jpg',
    ],
    'G': [
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351346/df1a61568cbd206fa57ee36b04829c37_hdfrop.jpg',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351346/Simple-Balcony-Railing-Design_mnqica.jpg',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351346/c3c34665bf0c4ac239539a44e425fd4b_zl69tm.jpg',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351347/fb2a9afb0b6cc3493ed202a1a064bba3_up4ha0.jpg',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351346/img-20240108-wa0037-500x500_io3vhv.webp',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351345/industrial-chemical-tank_kdy8aq.jpg',
    ],
    'J': [
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351344/mild-steel-railing-1000x1000_drwvro.webp',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351345/cast-iron-spiral-staircase-textured-finish-802472187-zthnl9x2_a6hruw.avif',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351345/images_2_cw2zqf.jpg',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351344/348f6f1d9a182b3d546f3044fb8516ce_z6vkhy.jpg',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351346/ms-shade-fabrication-work_j7hbwe.jpg',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351345/product-jpeg-500x500_1_qp6u0l.webp',
    ],
    'S': [
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351346/ms-shade-fabrication-work_j7hbwe.jpg',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351345/peb-structure-shed-fabrication-500x500_fz7gdj.webp',
      'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751351346/product-jpeg-500x500_la2hqy.webp',
    ],
    'OT': [
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

  selectedCategory = 'SD';
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



