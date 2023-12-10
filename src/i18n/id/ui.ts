import { UIDictionary } from '../translation-checkers';

export default UIDictionary({
	'a11y.skipLink': 'Lewati ke Konten',
	'a11y.sectionLink': 'Bagian berjudul',
	'navbar.a11yTitle': 'Atas',
	// Site settings
	'site.title': 'Dokumentasi Astro',
	'site.description': 'Buat situs web yang lebih cepat dengan lebih sedikit JavaScript di sisi klien.',
	'site.og.imageSrc': '/default-og-image.png?v=1',
	'site.og.imageAlt':
		'logo astro pada hamparan ruang angkasa berbintang, dengan planet mirip saturnus berwarna ungu yang mengambang di latar depan kanan',
	// Left Sidebar
	'leftSidebar.a11yTitle': 'Primer',
	'leftSidebar.learnTab': 'Pelajari',
	'leftSidebar.referenceTab': 'Referensi',
	'leftSidebar.viewInEnglish': 'Lihat dalam Bahasa Inggris',
	'leftSidebar.sponsoredBy': 'Disponsori oleh',
	// Right Sidebar
	'rightSidebar.a11yTitle': 'Sekunder',
	'rightSidebar.onThisPage': 'Di halaman ini',
	'rightSidebar.overview': 'Ikhtisar',
	'rightSidebar.community': 'Komunitas',
	'rightSidebar.joinDiscord': 'Bergabunglah dengan kami di Discord',
	'rightSidebar.readBlog': 'Baca postingan blog kami',
	'rightSidebar.openCollective': 'Open Collective Kami',
	'rightSidebar.contribute': 'Kontribusi',
	'rightSidebar.contributorGuides': 'Panduan Kontributor',
	'rightSidebar.editPage': 'Sunting halaman ini',
	'rightSidebar.translatePage': 'Terjemahkan halaman ini',
	'rightSidebar.github': 'Dokumentasi Astro di GitHub',
	// Footer
	'footer.privacyPolicy': 'Kebijakan Privasi',
	// `<ThemeToggleButton>` acessibility labels
	'themeToggle.useLight': 'Gunakan tema terang',
	'themeToggle.useDark': 'Gunakan tema gelap',
	// Used in previous/next page links at the bottom of pages
	'articleNav.nextPage': 'Halaman Berikutnya',
	'articleNav.prevPage': 'Kembali',
	// Used in `<Since>`: Added in: v0.24.0 [NEW]
	'since.addedIn': 'Ditambahkan di:',
	'since.new': 'Baru',
	'since.beta': 'Beta',
	// Installation Guide
	'install.autoTab': 'CLI Otomatis',
	'install.manualTab': 'Penyiapan Manual',
	// `<DeployGuidesNav>` vocabulary
	'deploy.sectionTitle': 'Panduan Penerapan',
	'deploy.altSectionTitle': 'Panduan Penerapan Lainnya',
	'deploy.filterLabel': 'Filter berdasarkan Jenis Penerapan',
	'deploy.ssrTag': 'SSR',
	'deploy.staticTag': 'Static',
	// CMS Guides vocabulary
	'cms.navTitle': 'Panduan CMS lainnya',
	// Migration Guides vocabulary
	'migration.navTitle': 'Panduan migrasi lainnya',
	// Recipes vocabulary
	'recipes.navTitle': 'Resep lainnya',
	// `<RecipeLinks>` vocabulary
	'recipesLink.singular': 'Resep terkait:',
	'recipesLink.plural': 'Resep terkait',
	// `<ContributorList>` fallback text
	'contributors.seeAll': 'Lihat semua kontributor',
	// Fallback content notice shown when a page is not yet translated
	'fallbackContent.notice':
		'Halaman ini belum tersedia dalam bahasa Anda, jadi kami menampilkan versi bahasa Inggris. Anda dapat membantu dengan menerjemahkannya!',
	'fallbackContent.linkText': 'Pelajari lebih lanjut tentang bagaimana Anda dapat berkontribusi',

	// 404 Page
	'404.title': 'Tidak Ditemukan',
	'404.content': 'Halaman ini tidak ada di tata surya kita.',
	'404.linkText': 'Bawa aku pulang.',
	// Aside component default labels
	'aside.note': 'Catatan',
	'aside.tip': 'Tips',
	'aside.caution': 'Perhatian',
	'aside.danger': 'Bahaya',
	// `<LanguageSelect>` vocabulary
	'languageSelect.label': 'Pilih bahasa',
	// Integrations vocabulary
	'integrations.changelog': 'Catatan perubahan',
	'integrations.footerTitle': 'Lebih Banyak Integrasi',
	'integrations.renderers': 'UI Framework',
	'integrations.adapters': 'Adaptor SSR',
	'integrations.others': 'Lainnya',
	// Checklist component
	'checklist.or': 'atau',
	// Multiple Choice component
	'multipleChoice.defaultCorrect': 'Benar!',
	'multipleChoice.defaultIncorrect': 'Coba Lagi!',
	'multipleChoice.submitLabel': 'Kirim',
	// Tutorial Progress
	'progress.todo': 'Yang Harus Dilakukan',
	'progress.done': 'Selesai',
	// Tutorial Navigation
	'tutorial.trackerLabel': 'Pelacak Tutorial',
	'tutorial.unit': 'Unit',
	// Tutorial
	'tutorial.getReady': 'Bersiaplah untuk…',
	// Feedback Fish widget
	'feedback.button': 'Beri kami umpan balik',
	'feedback.a11yLabel': 'Formulir umpan balik',
	'feedback.formTitle': 'Apa yang ada di pikiran Anda?',
	'feedback.categoryGroupLabel': 'Pilih kategori umpan balik',
	'feedback.issue': 'Masalah',
	'feedback.createIssue': 'Buat GitHub Issue',
	'feedback.createIssue.description': 'Cara tercepat untuk memperingatkan tim kami jika ada masalah.',
	'feedback.sendFeedback': 'Kirimkan umpan balik kepada kami',
	'feedback.sendFeedback.description': 'Kirimkan pesan kepada kami secara langsung.',
	'feedback.idea': 'Ide',
	'feedback.other': 'Lainnya',
	'feedback.messageA11yLabel': 'Pesan',
	'feedback.placeholder': 'Apa yang Anda ingin kami ketahui?',
	'feedback.submit': 'Kirim umpan balik',
	'feedback.close': 'Tutup formulir umpan balik',
	'feedback.success': 'Terima kasih! Kami menerima umpan balik Anda.',
	// `<FileTree>` component
	'fileTree.directoryLabel': 'Direktori',
	// Code snippet vocabulary
	'expressiveCode.terminalWindowFallbackTitle': 'jendela Terminal',
	'expressiveCode.copyButtonTooltip': 'Salin ke papan klip',
	'expressiveCode.copyButtonCopied': 'Disalin!',
	// Backend Guides vocabulary
	'backend.navTitle': 'Panduan layanan backend lainnya',
	// Stubs vocabulary
	'stub.title': 'Perluas rintisan ini!',
	'stub.subtitle': 'Panduan ini adalah sebuah rintisan.',
	'stub.description.migration':
		'Ingin berkontribusi pada panduan ini? Memiliki postingan blog, video, atau sumber daya lain untuk dibagikan tentang migrasi dari teknologi ini ke Astro?',
	'stub.description.cms': 'Ketahui lebih banyak tentang cara menggunakan CMS ini dengan Astro?',
	'stub.description.backend': 'Ketahui lebih lanjut tentang cara menggunakan layanan backend ini dengan Astro?',
	// Starlight banner
	'starlight.title': 'Ingin membuat dokumentasi Anda sendiri?',
	'starlight.description': 'Ambil templat ini untuk memulai.',
});
