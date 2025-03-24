
type PlayerStats = {
    icon: string;
    no: number;
    name: string;
    role: string;
    matches: number;
    runs: number;
    highestScore: string;
}[]

export const playerStats: PlayerStats = [
    {
        icon: '/img/players/SHUBMAN-1.webp',
        no: 1,
        name: 'Shubman Gill',
        role: 'Batter',
        matches: 12,
        runs: 426,
        highestScore: '104'
    },
    {
        icon: '/img/players/RAHUL (1).webp',
        no: 2,
        name: 'Rahul Tewatia',
        role: 'All-rounder',
        matches: 12,
        runs: 188,
        highestScore: '-'
    },
    {
        icon: '/img/players/218.webp',
        no: 3,
        name: 'Rashid Khan',
        role: 'Bowler',
        matches: 121,
        runs: 545,
        highestScore: '149'
    },
    {
        icon: '/img/players/976.webp',
        no: 4,
        name: 'Sai Sudharsan',
        role: 'All-rounder',
        matches: 12,
        runs: 527,
        highestScore: '-'
    },
    {
        icon: '/img/players/590.webp',
        no: 5,
        name: 'Sharkrhuk Khan',
        role: 'All-rounder',
        matches: 7,
        runs: 127,
        highestScore: '104'
    },
] 