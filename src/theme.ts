export interface Theme {
  backgroundColor?: string;
  highlightColor?: string;
  borderColor?: string;
}

const defaultTheme: Theme = {
  backgroundColor: '#f3f3f3',
  highlightColor: ' rgba(255, 255, 255, 0.6)',
  borderColor: ' rgba(243, 243, 243, 0.7)'
};

export default defaultTheme;
