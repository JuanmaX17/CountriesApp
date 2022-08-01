export function stylessNav(theme) {
  return {
    styleIcon: { color: `var(--Color-Icon-${theme})` },
    styleNav: { backgroundColor: `var(--Menu-Bg-${theme})` },
  };
}

export function stylessApp(theme) {
  return {
    styleApp: {
      backgroundColor: `var(--Theme-Color-${theme})`,
      color: `var(--Text-Color-${theme})`,
    },
  };
}

export function stylessSearch(theme) {
  return {
    styleBox: {
      backgroundColor: `var(--Menu-Bg-${theme})`,
      boxShadow: `0px 0px 4px 11px var(--Very-Blue-${theme})`,
    },
    styleInput: {
      color: `var(--Text-Color-${theme})`,
    },
  };
}

export function stylessFilter(theme) {
  return {
    styleSelect: {
      backgroundColor: `var(--Menu-Bg-${theme})`,
      boxShadow: `0px 0px 4px 11px var(--Very-Blue-${theme})`,
      color: `var(--Text-Color-${theme})`,
    },
  };
}

export function stylessCountry(theme) {
  return {
    styleCard: {
      backgroundColor: `var(--Menu-Bg-${theme})`,
      boxShadow: `0px 0px 4px 11px var(--Very-Blue-${theme})`,
    },
  };
}

export function stylessBtn(theme) {
  return {
    styleLink: {
      backgroundColor: `var(--Menu-Bg-${theme})`,
      boxShadow: `0px 0px 0px 6px var(--Very-Blue-${theme})`,
    },
  };
}

export function stylessFoot(theme) {
  return {
    styleFooter: { backgroundColor: `var(--Menu-Bg-${theme})`, color: `var(--Text-Color-${theme})` },
  };
}
