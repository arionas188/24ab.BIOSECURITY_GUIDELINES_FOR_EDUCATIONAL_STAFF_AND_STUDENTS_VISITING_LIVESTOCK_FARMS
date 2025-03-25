(function () {
    // Όταν φορτώνει η σελίδα, ελέγχει το localStorage για τη γλώσσα
    document.addEventListener("DOMContentLoaded", function () {
        let savedLang = localStorage.getItem("language") || "gr"; // Default Ελληνικά
        changeLanguage(savedLang);
        setupBackToTopButton();
    });

    // Event listeners για τα κουμπιά αλλαγής γλώσσας
    document.getElementById("greek-btn").addEventListener("click", function () {
        changeLanguage("gr");
    });

    document.getElementById("english-btn").addEventListener("click", function () {
        changeLanguage("en");
    });

    function changeLanguage(lang) {
        let content = {
            "gr": {
                "title": "ΤΜΗΜΑ ΚΤΗΝΙΑΤΡΙΚΗΣ",
                "section": "ΤΟΜΕΑΣ ΚΛΙΝΙΚΩΝ ΚΤΗΝΙΑΤΡΙΚΩΝ ΣΠΟΥΔΩΝ",
                "rules_title1": "ΟΔΗΓΟΣ ΒΙΟΑΣΦΑΛΕΙΑΣ ΕΚΠΑΙΔΕΥΤΙΚΟΥ ΠΡΟΣΩΠΙΚΟΥ ΚΑΙ ΦΟΙΤΗΤΩΝ ΣΤΟ ΠΛΑΙΣΙΟ ΤΩΝ ΕΠΙΣΚΕΨΕΩΝ ΤΟΥΣ ΣΕ ΕΚΤΡΟΦΕΣ ΠΑΡΑΓΩΓΙΚΩΝ ΖΩΩΝ - 📌 Κλινική Μαιευτικής & Αναπαραγωγής",
                "rules": [
                    "🟠 • Χώρος στάθμευσης: Ο χώρος στάθμευσης του λεωφορείου πρέπει να βρίσκεται εκτός της εκτροφής ή σε ειδικό χώρο στάθμευσης μακριά από τους χώρους εκτροφής των ζώων, τις εγκαταστάσεις αποθήκευσης, παρασκευής και μεταφοράς ζωοτροφών, καθώς και τις διαδρομές μετακίνησης αποβλήτων. Το όχημα πρέπει να είναι καθαρό και απαλλαγμένο από οργανική ύλη. Η είσοδος και η αποχώρηση του οχήματος από την εκτροφή προϋποθέτει υποχρεωτική διέλευση από τροχόλουτρο απολυμαντικού διαλύματος.",
                    "🟠 • Εκπαιδευτικό προσωπικό/Φοιτητές:Το εκπαιδευτικό προσωπικό και οι φοιτητές τηρούν επιμελώς τα πρωτόκολλα αποφυγής πιθανών κινδύνων, τόσο για την προσωπική τους ασφάλεια όσο και για την αποτροπή της μεταφοράς λοιμογόνων παραγόντων. Ιδιαίτερη προσοχή δίνεται στις περιπτώσεις διαδοχικών επισκέψεων σε διαφορετικές εκτροφές. Ο χρησιμοποιούμενος εξοπλισμός απολυμαίνεται σχολαστικά πριν και μετά από κάθε επίσκεψη. Πριν από κάθε επίσκεψη, προηγείται επικοινωνία με τον υπεύθυνο της εκμετάλλευσης, ώστε να ενημερωθούν οι φοιτητές και το προσωπικό για τις ειδικές απαιτήσεις βιοασφάλειας της εκτροφής. Η είσοδος επιτρέπεται μόνο από προκαθορισμένο σημείο εισόδου. Οι επισκέπτες ενημερώνονται για τις διαδικασίες και τις πολιτικές βιοασφάλειας πριν την είσοδό τους. 🟠 Βεβαιώνεται ότι: 1. Οι επισκέπτες δηλώνουν αν έχουν επισκεφθεί άλλες εκτροφές πρόσφατα. 2. Είναι υγιείς και δεν εμφανίζουν συμπτώματα λοίμωξης (π.χ. πυρετός, βήχας). 3. Δεν έχουν έρθει σε επαφή με ζώα τις τελευταίες έξι ημέρες πριν την επίσκεψη (ιδιαίτερα σε πτηνοτροφικές εκμεταλλεύσεις).",
                    "🟠 • Ημερολόγιο επισκεπτών: Πριν την είσοδο, συμπληρώνεται υποχρεωτικά ημερολόγιο επισκεπτών, με καταγραφή των εξής στοιχείων: 1. Επιβεβαίωση συμμόρφωσης με τις πολιτικές βιοασφάλειας. 2. Ημερομηνία επίσκεψης. 3. Ονοματεπώνυμο επισκέπτη. 4. Διεύθυνση επισκέπτη. 5. Σκοπός επίσκεψης. 6. Ημερομηνία τελευταίας επαφής με παραγωγικά ζώα. 7. Ώρα άφιξης και αναχώρησης. 8. Υπογραφή επισκέπτη.",
                    "🟠 • Πρωτόκολλο εισόδου εκπαιδευτικού προσωπικού/φοιτητών: Η είσοδος του εκπαιδευτικού προσωπικού και των φοιτητών θα ακολουθεί τη διέλευση μέσω ενός σταθμού εξυγίανσης με τη διαδικασία εισόδου «τύπου Δανίας». Σύμφωνα με αυτή τη διαδικασία, οι επισκέπτες εισέρχονται στην εκτροφή μέσω προκαθορισμένου χώρου, ο οποίος λειτουργεί ως βεστιάριο. Εκεί, προηγείται η απολύμανση των υποδημάτων σε ειδικό ποδόλουτρο, ώστε να ελαχιστοποιηθεί ο κίνδυνος μεταφοράς παθογόνων μικροοργανισμών: 1.	Στη συνέχεια, οι φοιτητές φορούν τη φόρμα εργασίας και ελαστικές μπότες, τις οποίες απολυμαίνουν εκ νέου σε ποδόλουτρο, πριν εισέλθουν στους κύριους χώρους της εκτροφής. Καθ’ όλη τη διάρκεια της επίσκεψης, χρησιμοποιούν γάντια μιας χρήσης για κάθε εργασία, διασφαλίζοντας την ελάχιστη δυνατή επαφή με το περιβάλλον της εκτροφής. 2. Μετά την ολοκλήρωση της επίσκεψης, τα χρησιμοποιημένα γάντια και λοιπά αναλώσιμα συλλέγονται σε ειδικούς σάκους, οι οποίοι απορρίπτονται σε καθορισμένο χώρο της εκτροφής. Τα υποδήματα καθαρίζονται και απολυμαίνονται σχολαστικά με ειδικό διάλυμα και βούρτσα, που διατίθενται αποκλειστικά για αυτό τον σκοπό. 3.Τέλος, οι χρησιμοποιημένες φόρμες τοποθετούνται σε κλειστούς πλαστικούς σάκους, ενώ πριν από την αποχώρηση, οι επισκέπτες πλένουν και απολυμαίνουν τα χέρια τους, διασφαλίζοντας την πλήρη συμμόρφωση με τις διαδικασίες βιοασφάλειας.",
                    "🟠 • Όταν δεν υπάρχουν εξειδικευμένοι χώροι αλλαγής ρουχισμού: Στις περιπτώσεις αυτές ακολουθείται συγκεκριμένη διαδικασία για τη διασφάλιση της βιοασφάλειας. Ειδικότερα: 1. Η είσοδος επιτρέπεται μόνο από ένα προκαθορισμένο σημείο, όπου υπάρχει σταθμός απολύμανσης. Κατά την είσοδο και την έξοδο, είναι υποχρεωτική η διέλευση από ποδόλουτρο με απολυμαντικό διάλυμα. 2. Πριν την είσοδο στους χώρους των ζώων, παρέχεται μιας χρήσης φόρμα, γάντια και καλύμματα υποδημάτων. Όλα τα μέσα ατομικής προστασίας απορρίπτονται σε ειδικούς κάδους μετά την επίσκεψη. Εάν οι επισκέπτες φορούν δικά τους ρούχα, πρέπει να έχουν καθαριστεί και να μην έχουν χρησιμοποιηθεί σε άλλη εκτροφή. 3. Οι φοιτητές και το εκπαιδευτικό προσωπικό πλένουν και απολυμαίνουν τα χέρια τους πριν και μετά την είσοδο στους χώρους των ζώων. Ο χρησιμοποιούμενος εξοπλισμός, όπως στηθοσκόπια και υποδήματα, καθαρίζεται και απολυμαίνεται πριν την επίσκεψη και αμέσως μετά. 4. Δεν επιτρέπεται η μεταφορά εργαλείων ή εξοπλισμού από άλλη εκτροφή χωρίς προηγούμενη απολύμανση. Μετά την ολοκλήρωση της επίσκεψης, ο χρησιμοποιημένος προστατευτικός εξοπλισμός απομακρύνεται και απορρίπτεται σε κλειστούς σάκους και κάδους βιοασφάλειας. 5. Τα χέρια πλένονται και απολυμαίνονται πριν την έξοδο. Εάν είναι εφικτό, συνιστάται αλλαγή ρουχισμού και υποδημάτων πριν την αναχώρηση.",
                    "🟠 • Κανόνες κατά την Παραμονή στους Χώρους των Ζώων: 1. Περιορίζονται οι  μετακινήσεις των επισκεπτών μόνο στις αναγκαίες περιοχές, χωρίς περιττή επαφή με τα ζώα. 2. Διατηρούνται αποστάσεις από ασθενή ή ευάλωτα ζώα για αποφυγή διασποράς παθογόνων."
                ],
                "cautionTitle": " ",
                "cautionParagraph": " "

            },
            "en": {
                "title": "ΤΜΗΜΑ ΚΤΗΝΙΑΤΡΙΚΗΣ",
                "section": "FACULTY OF VETERINARY MEDICINΕ DEPARTMENT OF CLINICAL VETERINARY STUDIES",
                "rules_title1": "📌 BIOSECURITY GUIDELINES FOR EDUCATIONAL STAFF AND STUDENTS VISITING EQUINE FACILITIES",
                "rules": [
                    "🟠 • Parking area:The bus parking area must be located off the farm or in a designated parking area away from animal housing, feed storage, processing and transportation facilities, and waste transport routes. The vehicle must be clean and free of organic matter. When entering and leaving the farm, the vehicle must be driven through a disinfecting wheel bath.",
                    "🟠 • Educational staff/students: Educational staff and students must strictly adhere to the protocols to avoid potential risks, both for their personal safety and to prevent the transmission of pathogens. Particular attention will be paid to cases where they visit different establishments in succession. The equipment used is thoroughly disinfected before and after each visit. Consultation with the farm manager is required prior to each visit to inform students and staff of the specific biosecurity requirements of the farm. Access is only possible via a designated entrance. Visitors will be briefed on biosecurity procedures and guidelines before entering. 🟠 It will be ensured that: 1. Visitors declare whether they have visited other farms recently. 2. They are healthy and show no signs of infection (e.g. fever, cough). 3. They have had no contact with animals in the six days prior to the visit (especially on poultry farms). 4. Smoking, eating, drinking or the consumption of beverages is strictly prohibited in the stables.",
                    "🟠 • Visitor diary: A visitor's logbook must be completed before entry, in which the following information is entered: 1. Confirmation of compliance with biosecurity guidelines. 2. Date of the visit. 3. Full name of the visitor. 4. Address of the visitor. 5. Purpose of the visit. 6. Date of last contact with livestock. 7. Time of arrival and departure. 8.Signature of the visitor.",
                    "🟠 • Entry protocol for educational staff/students: Educational staff and students enter the farm via a sanitary station in accordance with the Danish procedure. According to this procedure, visitors enter the farm through a designated area that serves as a changing room. Here, footwear is disinfected in a special foot bath to minimize the risk of pathogen transmission: 1. The students then wear work overalls and rubber boots, which are also disinfected in a foot bath, before entering the main areas of the plant. Throughout the visit, disposable gloves are used for each task to ensure minimal contact with the farm environment. 2. At the end of the visit, the used gloves and other disposable items are collected in special bags and disposed of in a designated area of the farm. The shoes are thoroughly cleaned and disinfected with a special solution and brush provided exclusively for this purpose. 3. Finally, used coveralls are placed in sealed plastic bags and visitors wash and sanitize their hands before leaving the facility to ensure compliance with biosecurity procedures.",
                    "🟠 • When there are no special changing areas:In these cases, a special procedure is used to ensure biosecurity. Specifically: 1. Access is only permitted via a specific point where a disinfection station is available. When entering and leaving, a footbath with a disinfectant solution must be passed. 2. Disposable overalls, gloves and shoe covers are provided before entering the animal areas. All personal protective equipment is disposed of in special containers after the visit. If visitors wear their own clothing, it must be cleaned and may not be used in another facility. 3. Educational staff and teachers must wash and disinfect their hands before and after entering the animal areas. All equipment used, such as stethoscopes and shoes, must be cleaned and disinfected before and immediately after the visit. 4. The transfer of tools or equipment from another company is not permitted without prior disinfection. At the end of the visit, the used protective equipment must be removed and disposed of in sealed bags and biosafety containers. 5. Hands must be washed and disinfected before leaving the establishment. If possible, it is recommended to change clothes and footwear before leaving.",
                    "🟠 • Guidelines during staying in animal areas:During the stay of teachers and students in the agricultural areas, it must be ensured that: 1. Visitor movement is restricted to necessary areas, avoiding unnecessary contact with animals. 2. Distance is maintained from sick or vulnerable animals to prevent the spread of pathogens."

                ],
                "cautionTitle": " ",
                "cautionParagraph": " "
            }
        };

       // Αποθηκεύουμε τη γλώσσα στο localStorage
       localStorage.setItem("language", lang);

        // Επιλογή στοιχείων που θα αλλάξουν
        let title = document.querySelector("h1");
        let section = document.querySelector("h5");
        let rulesTitle1 = document.querySelectorAll(".rules h2")[0];
        let rulesList1 = document.querySelectorAll(".rules ul")[0].querySelectorAll("li");
        let cautionTitle = document.querySelector(".rules h4");
        let cautionParagraph = document.querySelector(".rules p");

    // Προσθήκη fade-out effect πριν την αλλαγή
    document.body.classList.add("fade-out");

    setTimeout(() => {

        // Επιλογή στοιχείων
        let title = document.querySelector("h1");
        let section = document.querySelector("h5");
        let rulesTitle1 = document.querySelectorAll(".rules h2")[0];
        let rulesList1 = document.querySelectorAll(".rules ul")[0].querySelectorAll("li");
        let cautionTitle = document.querySelector(".rules h4");
        let cautionParagraph = document.querySelector(".rules p");

        // Ενημέρωση περιεχομένου
        document.title = content[lang].title;
        title.textContent = content[lang].title;
        section.textContent = content[lang].section;
        rulesTitle1.textContent = content[lang].rules_title1;
        cautionTitle.textContent = content[lang].cautionTitle;
        cautionParagraph.textContent = content[lang].cautionParagraph;

        // Ενημέρωση λίστας κανόνων
        content[lang].rules.forEach((text, index) => {
            if (rulesList1[index]) {
                rulesList1[index].innerHTML = text;
            }
        });

        // Προσθήκη fade-in effect μετά την αλλαγή
        document.body.classList.remove("fade-out");
    }, 500); // Μικρή καθυστέρηση για ομαλή εναλλαγή
    }
    const backToTopButton = document.querySelector(".back-to-top");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) { // Εμφανίζεται μετά από 50px scroll
            backToTopButton.style.display = "flex";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    // Λειτουργία επιστροφής στην κορυφή
    backToTopButton.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
})();