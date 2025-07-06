import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Feedback {
  image: string;
  review: string;
  client: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent {
  activeTab: 'photos' | 'videos' | 'feedback' = 'photos';
  currentPage = 1;
  pageSize = 16;

  photos: string[] = [
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794597/IMG-20250704-WA0114_k5rww6.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794597/IMG-20250704-WA0113_osg2to.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794590/IMG-20250704-WA0108_spehmq.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794590/IMG-20250704-WA0110_gcsbyg.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794589/IMG-20250704-WA0105_hqc7md.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794583/IMG-20250704-WA0104_k2biiy.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794583/IMG-20250704-WA0101_ptmgd0.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794583/IMG-20250704-WA0099_ldkznv.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794583/IMG-20250704-WA0098_xocmbs.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794569/IMG-20250704-WA0084_jizqua.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794568/IMG-20250704-WA0083_xwepbl.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794568/IMG-20250704-WA0080_l2loec.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794564/IMG-20250704-WA0078_wams96.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794563/IMG-20250704-WA0076_wf25sa.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794561/IMG-20250704-WA0072_ahjvgz.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794560/IMG-20250704-WA0071_dgfw2q.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794560/IMG-20250704-WA0069_dzj12h.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794559/IMG-20250704-WA0067_kwf9vi.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794558/IMG-20250704-WA0066_jgg9lk.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794557/IMG-20250704-WA0065_tmvedc.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794552/IMG-20250704-WA0063_vdt2hg.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794552/IMG-20250704-WA0060_wjuety.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794546/IMG-20250704-WA0055_cvdd6f.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794546/IMG-20250704-WA0052_ejaqc4.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794545/IMG-20250704-WA0049_ui82il.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794540/IMG-20250704-WA0045_iyghro.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794540/IMG-20250704-WA0041_wsbagu.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794539/IMG-20250704-WA0043_pfdtoj.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794539/IMG-20250704-WA0042_szifri.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794539/IMG-20250704-WA0038_rxn8uh.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794535/IMG-20250704-WA0037_grzj9m.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794535/IMG-20250704-WA0036_eomey0.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794534/IMG-20250704-WA0032_m3k27o.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794534/IMG-20250704-WA0030_uvagnc.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794518/IMG-20250704-WA0028_r7cgml.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794518/IMG-20250704-WA0027_qvav0n.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794518/IMG-20250704-WA0024_cqdhos.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794518/IMG-20250704-WA0022_s3eg79.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794518/IMG-20250704-WA0023_botsfp.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794518/IMG-20250704-WA0021_cyqcbf.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794517/IMG-20250704-WA0019_hlbvdv.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794517/IMG-20250704-WA0016_lkbwl5.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794517/IMG-20250704-WA0009_vcrxim.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794517/IMG-20250704-WA0017_x1yvsf.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794517/IMG-20250704-WA0014_v6bn3j.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794517/IMG-20250704-WA0010_f1gdku.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794517/IMG-20250704-WA0013_nj3f1r.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794516/IMG-20250704-WA0007_diqmob.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794516/IMG-20250704-WA0003_uqfuw9.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794516/IMG-20250704-WA0005_y2emxo.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794516/IMG-20250704-WA0004_vf8h9n.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794516/IMG-20250704-WA0008_qkw5pi.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794612/IMG-20250704-WA0127_nf8h5q.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794606/IMG-20250704-WA0123_jaxikk.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794582/IMG-20250704-WA0096_jmi4ct.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794576/IMG-20250704-WA0095_glo3q3.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794575/IMG-20250704-WA0093_ojovjg.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794575/IMG-20250704-WA0092_ki2sxd.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794575/IMG-20250704-WA0088_vc560l.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794569/IMG-20250704-WA0086_ggsa9y.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794576/IMG-20250704-WA0094_gyhqbq.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794590/IMG-20250704-WA0111_ge6w1d.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794590/IMG-20250704-WA0109_u0xslp.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794583/IMG-20250704-WA0100_vhe9wu.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794601/IMG-20250704-WA0121_p3t7nk.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794605/IMG-20250704-WA0122_fzmaus.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794598/IMG-20250704-WA0120_s48cs3.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794598/IMG-20250704-WA0119_jxtg3m.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794598/IMG-20250704-WA0118_hqfjok.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794598/IMG-20250704-WA0117_e4hpfi.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794597/IMG-20250704-WA0115_wzxmeq.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794590/IMG-20250704-WA0112_ubfnnn.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794590/IMG-20250704-WA0106_jit5fi.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794590/IMG-20250704-WA0107_neyzdc.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794582/IMG-20250704-WA0097_maagnk.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794575/IMG-20250704-WA0090_oek7xa.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794575/IMG-20250704-WA0087_sbjpqk.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794568/IMG-20250704-WA0082_kfbuqt.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794568/IMG-20250704-WA0081_lykpln.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794568/IMG-20250704-WA0079_rk7zqq.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794564/IMG-20250704-WA0077_rxcmog.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794563/IMG-20250704-WA0075_rgwwmc.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794563/IMG-20250704-WA0074_bpq4zw.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794553/IMG-20250704-WA0064_jhzwth.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794552/IMG-20250704-WA0062_n3y8yk.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794552/IMG-20250704-WA0061_melxbu.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794552/IMG-20250704-WA0059_cmrnkq.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794552/IMG-20250704-WA0058_ivnuco.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794547/IMG-20250704-WA0056_nnk6fh.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794546/IMG-20250704-WA0053_pi7anw.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794546/IMG-20250704-WA0051_obsaha.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794546/IMG-20250704-WA0050_uldhpn.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794545/IMG-20250704-WA0048_bzwm5r.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794541/IMG-20250704-WA0047_txzwhl.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794540/IMG-20250704-WA0046_lyonez.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794540/IMG-20250704-WA0044_xnz4my.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794539/IMG-20250704-WA0039_yhynfc.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794534/IMG-20250704-WA0035_tqrh58.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794534/IMG-20250704-WA0034_a0dsqp.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794534/IMG-20250704-WA0033_bbwzqu.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794534/IMG-20250704-WA0031_nxuqc7.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794519/IMG-20250704-WA0029_xoyvcc.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794569/IMG-20250704-WA0085_n3gdsi.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794612/IMG-20250704-WA0130_mzszbi.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794612/IMG-20250704-WA0131_czwcah.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794621/IMG-20250704-WA0136_lbhsxh.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794621/IMG-20250704-WA0137_xpvklq.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794622/IMG-20250704-WA0142_rkgkdb.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794630/IMG-20250704-WA0143_hmu8ib.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794631/IMG-20250704-WA0145_qdg21l.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794622/IMG-20250704-WA0140_eya0wa.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794622/IMG-20250704-WA0141_r7xfbj.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794622/IMG-20250704-WA0139_b6aizf.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794621/IMG-20250704-WA0138_kzvjzh.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794621/IMG-20250704-WA0135_lx0h38.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794613/IMG-20250704-WA0134_rkeavx.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794613/IMG-20250704-WA0133_x21rh4.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794613/IMG-20250704-WA0132_hlisfn.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794612/IMG-20250704-WA0128_qwiej6.jpg',
    'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794612/IMG-20250704-WA0129_snwpci.jpg',
  ];

  videos: string[] = [
    'https://res.cloudinary.com/dn5tfo97m/video/upload/v1751794641/VID-20250704-WA0144_g2rife.mp4',
    'https://res.cloudinary.com/dn5tfo97m/video/upload/v1751794641/VID-20250704-WA0144_g2rife.mp4',
    'https://res.cloudinary.com/dn5tfo97m/video/upload/v1751794641/VID-20250704-WA0144_g2rife.mp4',
    'https://res.cloudinary.com/dn5tfo97m/video/upload/v1751794641/VID-20250704-WA0144_g2rife.mp4',
    'https://res.cloudinary.com/dn5tfo97m/video/upload/v1751794641/VID-20250704-WA0144_g2rife.mp4',
    'https://res.cloudinary.com/dn5tfo97m/video/upload/v1751794641/VID-20250704-WA0144_g2rife.mp4',
    'https://res.cloudinary.com/dn5tfo97m/video/upload/v1751794641/VID-20250704-WA0144_g2rife.mp4',
  ];

  feedback: Feedback[] = [
    {
      image: 'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794612/IMG-20250704-WA0127_nf8h5q.jpg',
      review: 'Absolutely loved the craftsmanship of our new gate!',
      client: 'Ajay Mahajan'
    },
    {
      image: 'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794569/IMG-20250704-WA0085_n3gdsi.jpg',
      review: 'They exceeded expectations—highly professional and friendly. Fast delivery and impeccable service!',
      client: 'Akshay Borse'
    },
    {
      image: 'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794559/IMG-20250704-WA0067_kwf9vi.jpg',
      review: 'Outstanding craftsmanship! The laser-cut gates and doors are precise, durable, and beautifully finished',
      client: 'Dhananjay Desale'
    },
    {
      image: 'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794630/IMG-20250704-WA0143_hmu8ib.jpg',
      review: 'TechnoWorld Solutions delivered exactly what we needed—custom windows and frames with top-notch quality.',
      client: 'Harshal Malpure'
    },
    {
      image: 'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794622/IMG-20250704-WA0141_r7xfbj.jpg',
      review: 'Highly professional service and excellent fabrication work. Our safety doors turned out perfect!',
      client: 'A. K. Deore'
    },
    {
      image: 'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794583/IMG-20250704-WA0101_ptmgd0.jpg',
      review: 'From design to delivery, the entire process was smooth. Our sliding gates fit perfectly and look amazing',
      client: 'S. M. Patil'
    },
    {
      image: 'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794612/IMG-20250704-WA0131_czwcah.jpg',
      review: 'Impressive quality and attention to detail. The team crafted our metal windows exactly to our specifications.',
      client: 'D. S. More'
    },
    {
      image: 'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794516/IMG-20250704-WA0008_qkw5pi.jpg',
      review: 'Reliable and skilled fabricators. The gate we ordered are sturdy and stylish.',
      client: 'P. B. Patil'
    },
    {
      image: 'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794612/IMG-20250704-WA0130_mzszbi.jpg',
      review: 'Exceptional service with a personal touch. TechnoWorld turned our ideas into finely finished metalwork.',
      client: 'H. P. Marathe'
    },
    {
      image: 'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794621/IMG-20250704-WA0137_xpvklq.jpg',
      review: 'We got our frames and jalis custom-made—excellent finishing, on-time delivery, and fair pricing.',
      client: 'Y. S. Chavan'
    },
    {
      image: 'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794621/IMG-20250704-WA0138_kzvjzh.jpg',
      review: 'Professional team with advanced laser cutting equipment. The output exceeded our expectations.',
      client: 'R. B. Patil'
    },
    {
      image: 'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794622/IMG-20250704-WA0140_eya0wa.jpg',
      review: 'Fast delivery and impeccable service! They exceeded expectations—highly professional and friendly.',
      client: 'Shivaji Shinde'
    },
    {
      image: 'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794575/IMG-20250704-WA0091_yjglzt.jpg',
      review: 'दार आणि गेट्स अगदी सुंदर बनवले आहेत. कामाची गुणवत्ता खूपच चांगली आहे.',
      client: 'समाधान माळी'
    },
    {
      image: 'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794569/IMG-20250704-WA0085_n3gdsi.jpg',
      review: 'टेक्नोवर्ल्ड सोल्युशन्स ने वेळेत आणि अचूक काम केलं. आमच्या खिडक्या आणि फ्रेम्स अतिशय दर्जेदार आहेत.',
      client: 'संतोष साळुंखे'
    },
    {
      image: 'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794569/IMG-20250704-WA0086_ggsa9y.jpg',
      review: 'कस्टम डिझाइनसाठी उत्कृष्ट सेवा! काम आणि फिनिशिंग जबरदस्त आहे.आम्हाला दरवाजा खूप आवडला.',
      client: 'राहुल पाटील'
    },
    {
      image: 'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794518/IMG-20250704-WA0024_cqdhos.jpg',
      review: 'सुरक्षेसाठी बनवून घेतलेले दरवाजे आणि गेट मजबूत आणि आकर्षक आहेत. मनापासून धन्यवाद! ग्राहकांना विनंती आहे की त्यांनी एकवेळ अवश्य भेट द्यावी.',
      client: 'पी. पी. पाटील'
    },
    {
      image: 'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794518/IMG-20250704-WA0027_qvav0n.jpg',
      review: 'दरवाजे और खिड़कियाँ बेहतरीन क्वालिटी की मिलीं। डिजाइन और फिनिशिंग बहुत ही शानदार थी।',
      client: 'इम्रान पठाण'
    },
    {
      image: 'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794518/IMG-20250704-WA0021_cyqcbf.jpg',
      review: 'TechnoWorld की सर्विस समय पर और प्रोफेशनल थी। हमें पूरा भरोसा है इनके काम पर।',
      client: 'बिलाल शेख'
    },
    {
      image: 'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794517/IMG-20250704-WA0019_hlbvdv.jpg',
      review: 'लोहे के गेट और जाली बहुत अच्छे बने हैं, एकदम मजबूत और स्टाइलिश।',
      client: 'सलमान खान'
    },
    {
      image: 'https://res.cloudinary.com/dn5tfo97m/image/upload/v1751794621/IMG-20250704-WA0137_xpvklq.jpg',
      review: 'फ्रेम और विंडोज़ बिलकुल वैसी ही मिलीं जैसी हमने डिजाइन दी थी। काम से पूरी तरह संतुष्ट हैं।',
      client: 'रईस अंसारी'
    },
  ];


  // photos = Array.from({ length: 64 }, (_, i) => `https://picsum.photos/seed/photo${i}/300/200`);
  // videos = ['https://www.w3schools.com/html/mov_bbb.mp4']; // add more
  // feedback: Feedback[] = Array.from({ length: 12 }, (_, i) => ({
  //   image: `https://picsum.photos/seed/feedback${i}/300/200`,
  //   review: `Client ${i + 1}'s review: Absolutely loved the service!`,
  //   client: `Client ${i + 1}`
  // }));

  // inside your component class

  dialogOpen = false;
  dialogImage: string | null = null;
  dialogVideo: string | null = null;
  dialogFeedback: Feedback | null = null;
  dialogData: Feedback | null = null;

  openImage(src: string) {
    this.dialogImage = src;
    this.dialogVideo = null;
    this.dialogFeedback = null;
    this.dialogOpen = true;
  }


  openVideo(vid: string) {
    this.dialogVideo = vid;
    this.dialogImage = null;
    this.dialogFeedback = null;
    this.dialogOpen = true;
  }

  openFeedback(f: Feedback) {
    this.dialogFeedback = f;
    this.dialogImage = null;
    this.dialogVideo = null;
    this.dialogOpen = true;
  }

  closeDialog() {
    this.dialogOpen = false;
    this.dialogImage = this.dialogVideo = null;
    this.dialogFeedback = null;
  }

  get totalPages(): number {
    const length = this.activeTab === 'photos'
      ? this.photos.length
      : this.activeTab === 'videos'
        ? this.videos.length
        : this.feedback.length;
    return Math.ceil(length / this.pageSize);
  }

  selectTab(tab: 'photos' | 'videos' | 'feedback') {
    this.activeTab = tab;
    this.currentPage = 1;
  }

  get pagedPhotos() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.photos.slice(start, start + this.pageSize);
  }

  get pagedVideos() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.videos.slice(start, start + this.pageSize);
  }

  get pagedFeedback() {
    const start = (this.currentPage - 1) * 3 * 4;
    return this.feedback.slice(start, start + 12);
  }

  inputPage = this.currentPage; // initialize

  goToInputPage(): void {
    let page = Number(this.inputPage);
    if (isNaN(page) || page < 1) page = 1;
    else if (page > this.totalPages) page = this.totalPages;

    this.goToPage(page);
    this.inputPage = this.currentPage;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }
  prevPage() {
    if (this.currentPage > 1) this.currentPage--;
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

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages || page === this.currentPage) return;
    this.currentPage = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}

