// Prize Configuration for PickerWheel Contest App - Updated with Full Inventory System
const PRIZE_CONFIG = {
    // Contest period settings
    contestPeriod: {
        startDate: "2025-09-22", // Contest start date
        endDate: "2025-10-31"    // Contest end date
    },
    
    // Scooty Lucky Draw Configuration (separate from main wheel)
    scoodyLuckyDraw: {
        enabled: true,
        startDate: "2025-10-01",
        endDate: "2025-10-31",
        maxEntriesPerDay: 1,
        prize: {
            id: "scooty-bumper",
            name: "Scooty",
            emoji: "🛵",
            category: "bumper",
            description: "Win an amazing Scooty!"
        }
    },
    
    // Complete inventory with 22 prizes (as shown to users) + quantities and availability
    prizes: [
        // VERY RARE ITEMS (Ultra Limited)
        {
            id: "fridge",
            name: "Refrigerator",
            emoji: "🧊",
            icon: "icons/fridge.png",
            category: "very_rare",
            initialQuantity: 1,
            availableDates: ["2025-10-02"],
            weight: 50
        },
        {
            id: "smart_tv",
            name: "Smart TV 32\"",
            emoji: "📺",
            icon: "icons/smart-tv.png",
            category: "very_rare",
            initialQuantity: 1,
            availableDates: ["2025-10-20"],
            weight: 50
        },
        
        // RARE ITEMS (Scheduled Dates)
        {
            id: "washing_machine",
            name: "Washing Machine",
            emoji: "🫧",
            icon: "icons/washing-machine.png",
            category: "rare",
            initialQuantity: 2,
            availableDates: ["2025-09-28", "2025-10-20"],
            weight: 30
        },
        {
            id: "air_cooler",
            name: "Air Cooler",
            emoji: "🌬️",
            category: "rare",
            initialQuantity: 2,
            availableDates: ["2025-10-01", "2025-10-21"],
            weight: 30
        },
        {
            id: "mixer_grinder",
            name: "Mixer Grinder",
            emoji: "🥛",
            icon: "icons/mixer-grinder.png",
            category: "rare",
            initialQuantity: 6,
            availableDates: ["2025-09-22", "2025-09-29", "2025-10-01", "2025-10-02", "2025-10-18", "2025-10-20"],
            weight: 30
        },
        {
            id: "gas_stove",
            name: "Gas Stove",
            emoji: "🔥",
            icon: "icons/gas-stove.png",
            category: "rare",
            initialQuantity: 3,
            availableDates: ["2025-09-23", "2025-10-02", "2025-10-18"],
            weight: 30
        },
        {
            id: "soundbar",
            name: "Boult Soundbar",
            emoji: "🔈",
            icon: "icons/boult-soundbar.png",
            category: "rare",
            initialQuantity: 6,
            availableDates: ["2025-09-30", "2025-10-02", "2025-10-19", "2025-10-20", "2025-10-21", "2025-10-22"],
            weight: 30
        },
        {
            id: "jio_tab",
            name: "Jio Tab",
            emoji: "📟",
            icon: "icons/jio-tab.png",
            category: "rare",
            initialQuantity: 7,
            availableDates: ["2025-10-07", "2025-10-14", "2025-10-19", "2025-10-20", "2025-10-21", "2025-10-22", "2025-10-28"],
            weight: 30
        },
        {
            id: "home_theatre",
            name: "Home Theatre",
            emoji: "🎬",
            icon: "icons/home-theatre.png",
            category: "rare",
            initialQuantity: 5,
            availableDates: ["2025-09-24", "2025-10-04", "2025-10-20", "2025-10-21", "2025-10-23"],
            weight: 30
        },
        
        // MOBILE ACCESSORIES (Always Available - Unlimited)
        {
            id: "power_bank",
            name: "Power Bank",
            emoji: "🔋",
            icon: "icons/powerbank.png",
            category: "accessory",
            initialQuantity: 999,
            availableDates: [], // Empty means always available
            weight: 10
        },
        {
            id: "neckband",
            name: "Neckband",
            emoji: "🎧",
            icon: "icons/wireless-neckband.png",
            category: "accessory",
            initialQuantity: 999,
            availableDates: [],
            weight: 10
        },
        {
            id: "airbuds",
            name: "Defy Airbuds",
            emoji: "🎵",
            icon: "icons/defy-earbuds.png",
            category: "accessory",
            initialQuantity: 999,
            availableDates: [],
            weight: 10
        },
        {
            id: "smartwatch",
            name: "Noise Smart Watch",
            emoji: "⌚",
            category: "accessory",
            initialQuantity: 999,
            availableDates: [],
            weight: 10
        },
        {
            id: "earphones",
            name: "Skullcandy Earphones",
            emoji: "🎤",
            icon: "icons/skullcandy-earphones.png",
            category: "accessory",
            initialQuantity: 999,
            availableDates: [],
            weight: 10
        },
        {
            id: "trimmer",
            name: "Trimmer",
            emoji: "💇",
            icon: "icons/trimmer.png",
            category: "accessory",
            initialQuantity: 999,
            availableDates: [],
            weight: 10
        },
        {
            id: "luggage_bag",
            name: "Luggage Bags",
            emoji: "🧳",
            category: "accessory",
            initialQuantity: 999,
            availableDates: [],
            weight: 10
        },
        {
            id: "g_speaker",
            name: "G Speaker",
            emoji: "🔊",
            category: "accessory",
            initialQuantity: 999,
            availableDates: [],
            weight: 10
        },
        {
            id: "selfie_stick",
            name: "Selfie Stick",
            emoji: "📸",
            icon: "icons/selfie-stick.png",
            category: "accessory",
            initialQuantity: 999,
            availableDates: [],
            weight: 10
        },
        {
            id: "screen_guard",
            name: "Pouch & Screen Guard",
            emoji: "📱",
            category: "accessory",
            initialQuantity: 999,
            availableDates: [],
            weight: 10
        },
        {
            id: "pressure_cooker",
            name: "Pressure Cooker",
            emoji: "🍲",
            icon: "icons/pressure-cooker.png",
            category: "accessory",
            initialQuantity: 999,
            availableDates: [],
            weight: 10
        }
    ]
};

// Advanced Prize Management System with Inventory Tracking
const PrizeManager = {
    // Get current date in YYYY-MM-DD format
    getCurrentDate() {
        return new Date().toISOString().split('T')[0];
    },
    
    // Initialize inventory database (localStorage simulation)
    initializeInventory() {
        const existingInventory = localStorage.getItem('contest_inventory');
        if (!existingInventory) {
            const inventory = {};
            PRIZE_CONFIG.prizes.forEach(prize => {
                inventory[prize.id] = {
                    id: prize.id,
                    name: prize.name,
                    emoji: prize.emoji,
                    icon: prize.icon, // Include icon property
                    category: prize.category,
                    initialQuantity: prize.initialQuantity,
                    remainingQuantity: prize.initialQuantity,
                    availableDates: prize.availableDates,
                    weight: prize.weight
                };
            });
            localStorage.setItem('contest_inventory', JSON.stringify(inventory));
            console.log('🗄️ Inventory initialized with', Object.keys(inventory).length, 'prizes');
        }
    },
    
    // Get current inventory
    getInventory() {
        this.initializeInventory();
        return JSON.parse(localStorage.getItem('contest_inventory') || '{}');
    },
    
    // Check if a prize is available today (date + quantity)
    isPrizeAvailable(prizeId) {
        const inventory = this.getInventory();
        const prize = inventory[prizeId];
        
        if (!prize) return false;
        
        // Check quantity first
        if (prize.remainingQuantity <= 0) return false;
        
        // Accessories are always available (empty availableDates array)
        if (prize.availableDates.length === 0) return true;
        
        // Check if today is in the available dates
        const currentDate = this.getCurrentDate();
        return prize.availableDates.includes(currentDate);
    },
    
    // Get all prizes available for winning today (backend logic)
    getAvailablePrizesForWinning() {
        const inventory = this.getInventory();
        const availablePrizes = [];
        
        Object.values(inventory).forEach(prize => {
            if (this.isPrizeAvailable(prize.id)) {
                availablePrizes.push(prize);
            }
        });
        
        return availablePrizes;
    },
    
    // Get all prizes for wheel display (UI - always shows all 22 prizes)
    getAllPrizes() {
        return PRIZE_CONFIG.prizes;
    },
    
    // Smart redirection algorithm
    findBestAlternative(originalPrizeId) {
        const inventory = this.getInventory();
        const originalPrize = inventory[originalPrizeId];
        const availablePrizes = this.getAvailablePrizesForWinning();
        
        if (availablePrizes.length === 0) {
            console.warn('⚠️ No prizes available - this should not happen!');
            return null;
        }
        
        // Priority 1: Same category available
        const sameCategory = availablePrizes.filter(p => p.category === originalPrize.category);
        if (sameCategory.length > 0) {
            return this.weightedRandomSelection(sameCategory);
        }
        
        // Priority 2: Similar value category
        let similarCategory = [];
        if (originalPrize.category === 'very_rare') {
            similarCategory = availablePrizes.filter(p => p.category === 'rare');
        } else if (originalPrize.category === 'rare') {
            similarCategory = availablePrizes.filter(p => p.category === 'rare' && p.id !== originalPrizeId);
        }
        
        if (similarCategory.length > 0) {
            return this.weightedRandomSelection(similarCategory);
        }
        
        // Priority 3: Weighted random from all available
        return this.weightedRandomSelection(availablePrizes);
    },
    
    // Weighted random selection based on prize weights
    weightedRandomSelection(prizes) {
        const totalWeight = prizes.reduce((sum, prize) => sum + prize.weight, 0);
        let random = Math.random() * totalWeight;
        
        for (const prize of prizes) {
            random -= prize.weight;
            if (random <= 0) {
                return prize;
            }
        }
        
        // Fallback to first prize
        return prizes[0];
    },
    
    // Award a prize directly (for pre-selected available prizes)
    awardPrizeDirectly(prizeId) {
        const inventory = this.getInventory();
        const prize = inventory[prizeId];
        
        if (!prize) {
            console.error('❌ Prize not found in inventory:', prizeId);
            return Promise.resolve(null);
        }
        
        // Check if prize is available (both quantity and date)
        if (!this.isPrizeAvailable(prizeId)) {
            console.error('❌ Prize not available:', prize.name, 'Date:', this.getCurrentDate());
            return Promise.resolve(null);
        }
        
        // Reduce inventory
        prize.remainingQuantity -= 1;
        localStorage.setItem('contest_inventory', JSON.stringify(inventory));
        
        // Log the win
        this.logWin(prize, prize, 'direct_win');
        
        console.log(`✅ Direct win: ${prize.name} (${prize.remainingQuantity} remaining)`);
        const result = {
            prize: prize,
            redirected: false,
            originalPrize: prize
        };
        return Promise.resolve(result);
    },

    // Award a prize (main function called by spin logic with redirection)
    async awardPrize(landedPrizeId) {
        const inventory = this.getInventory();
        
        // Try to award the original prize first
        if (this.isPrizeAvailable(landedPrizeId)) {
            const prize = inventory[landedPrizeId];
            
            // Reduce inventory
            prize.remainingQuantity -= 1;
            localStorage.setItem('contest_inventory', JSON.stringify(inventory));
            
            // Log the win
            this.logWin(prize, prize, 'direct_win');
            
            console.log(`✅ Direct win: ${prize.name} (${prize.remainingQuantity} remaining)`);
            return {
                prize: prize,
                redirected: false,
                originalPrize: prize
            };
        }
        
        // Smart redirection
        const alternativePrize = this.findBestAlternative(landedPrizeId);
        if (!alternativePrize) {
            console.error('❌ No alternative prize found!');
            return null;
        }
        
        // Award alternative prize
        alternativePrize.remainingQuantity -= 1;
        localStorage.setItem('contest_inventory', JSON.stringify(inventory));
        
        // Log the redirection
        const originalPrize = inventory[landedPrizeId];
        this.logWin(alternativePrize, originalPrize, 'redirected');
        this.logRedirection(landedPrizeId, alternativePrize.id, this.getRedirectionReason(landedPrizeId));
        
        console.log(`🔄 Redirected: ${originalPrize.name} → ${alternativePrize.name} (${alternativePrize.remainingQuantity} remaining)`);
        return {
            prize: alternativePrize,
            redirected: true,
            originalPrize: originalPrize
        };
    },
    
    // Get redirection reason
    getRedirectionReason(prizeId) {
        const inventory = this.getInventory();
        const prize = inventory[prizeId];
        
        if (prize.remainingQuantity <= 0) return 'out_of_stock';
        if (prize.availableDates.length > 0 && !prize.availableDates.includes(this.getCurrentDate())) {
            return 'unavailable_date';
        }
        return 'unknown';
    },
    
    // Log wins to database
    logWin(awardedPrize, originalPrize, winType) {
        const wins = JSON.parse(localStorage.getItem('contest_wins') || '[]');
        const win = {
            id: 'win_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
            awardedPrizeId: awardedPrize.id,
            awardedPrizeName: awardedPrize.name,
            originalPrizeId: originalPrize.id,
            originalPrizeName: originalPrize.name,
            winType: winType, // 'direct_win' or 'redirected'
            winDate: this.getCurrentDate(),
            winTimestamp: new Date().toISOString(),
            deviceId: this.getDeviceId()
        };
        
        wins.push(win);
        localStorage.setItem('contest_wins', JSON.stringify(wins));
    },
    
    // Log redirections for analytics
    logRedirection(originalPrizeId, awardedPrizeId, reason) {
        const redirections = JSON.parse(localStorage.getItem('contest_redirections') || '[]');
        const redirection = {
            id: 'redirect_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
            originalPrizeId: originalPrizeId,
            awardedPrizeId: awardedPrizeId,
            reason: reason,
            redirectDate: this.getCurrentDate(),
            redirectTimestamp: new Date().toISOString(),
            deviceId: this.getDeviceId()
        };
        
        redirections.push(redirection);
        localStorage.setItem('contest_redirections', JSON.stringify(redirections));
    },
    
    // Get or create device ID for tracking
    getDeviceId() {
        let deviceId = localStorage.getItem('contest_device_id');
        if (!deviceId) {
            deviceId = 'device_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('contest_device_id', deviceId);
        }
        return deviceId;
    },
    
    // Get user statistics
    getUserStats() {
        const wins = JSON.parse(localStorage.getItem('contest_wins') || '[]');
        const redirections = JSON.parse(localStorage.getItem('contest_redirections') || '[]');
        const deviceId = this.getDeviceId();
        
        const userWins = wins.filter(win => win.deviceId === deviceId);
        const userRedirections = redirections.filter(r => r.deviceId === deviceId);
        
        return {
            totalWins: userWins.length,
            directWins: userWins.filter(w => w.winType === 'direct_win').length,
            redirectedWins: userWins.filter(w => w.winType === 'redirected').length,
            totalRedirections: userRedirections.length,
            winHistory: userWins.slice(-10) // Last 10 wins
        };
    },
    
    // Admin functions
    getInventoryStatus() {
        const inventory = this.getInventory();
        const status = {
            totalPrizes: Object.keys(inventory).length,
            availableToday: 0,
            outOfStock: 0,
            byCategory: {
                very_rare: { total: 0, available: 0, remaining: 0 },
                rare: { total: 0, available: 0, remaining: 0 },
                accessory: { total: 0, available: 0, remaining: 0 }
            }
        };
        
        Object.values(inventory).forEach(prize => {
            const category = status.byCategory[prize.category];
            category.total += 1;
            category.remaining += prize.remainingQuantity;
            
            if (this.isPrizeAvailable(prize.id)) {
                status.availableToday += 1;
                category.available += 1;
            }
            
            if (prize.remainingQuantity <= 0) {
                status.outOfStock += 1;
            }
        });
        
        return status;
    },
    
    // Reset inventory (admin function)
    resetInventory() {
        localStorage.removeItem('contest_inventory');
        localStorage.removeItem('contest_wins');
        localStorage.removeItem('contest_redirections');
        this.initializeInventory();
        console.log('🔄 Inventory reset successfully');
    }
};

// Scooty Lucky Draw Manager
const ScoodyManager = {
    // Check if Scooty lucky draw is currently active
    isLuckyDrawActive() {
        const currentDate = this.getCurrentDate();
        const config = PRIZE_CONFIG.scoodyLuckyDraw;
        
        return config.enabled && 
               currentDate >= config.startDate && 
               currentDate <= config.endDate;
    },
    
    // Get current date
    getCurrentDate() {
        return new Date().toISOString().split('T')[0];
    },
    
    // Get remaining time for lucky draw
    getTimeRemaining() {
        const now = new Date().getTime();
        const endDate = new Date(PRIZE_CONFIG.scoodyLuckyDraw.endDate + 'T23:59:59').getTime();
        const timeLeft = endDate - now;
        
        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            
            return { days, hours, minutes, active: true };
        }
        
        return { days: 0, hours: 0, minutes: 0, active: false };
    },
    
    // Check if user can enter today (based on daily limit)
    canEnterToday() {
        const today = this.getCurrentDate();
        const entries = JSON.parse(localStorage.getItem('scoodyEntries') || '[]');
        const todayEntries = entries.filter(entry => entry.date === today);
        
        return todayEntries.length < PRIZE_CONFIG.scoodyLuckyDraw.maxEntriesPerDay;
    },
    
    // Submit lucky draw entry
    submitEntry(userData) {
        const today = this.getCurrentDate();
        const entries = JSON.parse(localStorage.getItem('scoodyEntries') || '[]');
        
        const newEntry = {
            ...userData,
            date: today,
            timestamp: new Date().toISOString(),
            id: 'entry_' + Date.now()
        };
        
        entries.push(newEntry);
        localStorage.setItem('scoodyEntries', JSON.stringify(entries));
        
        // Track analytics
        this.trackEntry(newEntry);
        
        return newEntry;
    },
    
    // Get user's entry history
    getUserEntries() {
        return JSON.parse(localStorage.getItem('scoodyEntries') || '[]');
    },
    
    // Track entry for analytics
    trackEntry(entry) {
        console.log('Scooty Lucky Draw Entry:', entry);
        
        // Could integrate with analytics service here
        const analytics = JSON.parse(localStorage.getItem('scoodyAnalytics') || '{"totalEntries": 0}');
        analytics.totalEntries++;
        analytics.lastEntry = entry.timestamp;
        localStorage.setItem('scoodyAnalytics', JSON.stringify(analytics));
    }
};

// Compatibility export for analysis tool - creates a simplified PRIZES array
if (typeof window !== 'undefined') {
    // Create simplified PRIZES array for compatibility with analysis tool
    window.PRIZES = PRIZE_CONFIG.prizes.map(prize => ({
        ...prize,
        availableFrom: prize.category === 'rare' ? PRIZE_CONFIG.rarePrizeDates.defaultLaunchDate : undefined
    }));
    
    // Also make the full configuration available
    window.PRIZE_CONFIG = PRIZE_CONFIG;
    window.PrizeManager = PrizeManager;
    window.ScoodyManager = ScoodyManager;
}