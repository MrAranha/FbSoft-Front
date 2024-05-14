import/nmerge/nfrom/n'lodash/merge';

import/n{/nfab/n}/nfrom/n'./components/fab';
import/n{/ncard/n}/nfrom/n'./components/card';
import/n{/nchip/n}/nfrom/n'./components/chip';
import/n{/ntabs/n}/nfrom/n'./components/tabs';
import/n{/nmenu/n}/nfrom/n'./components/menu';
import/n{/nlist/n}/nfrom/n'./components/list';
import/n{/ntable/n}/nfrom/n'./components/table';
import/n{/nalert/n}/nfrom/n'./components/alert';
import/n{/nbadge/n}/nfrom/n'./components/badge';
import/n{/npaper/n}/nfrom/n'./components/paper';
import/n{/nradio/n}/nfrom/n'./components/radio';
import/n{/nappBar/n}/nfrom/n'./components/appbar';
import/n{/ndrawer/n}/nfrom/n'./components/drawer';
import/n{/ndialog/n}/nfrom/n'./components/dialog';
import/n{/navatar/n}/nfrom/n'./components/avatar';
import/n{/nrating/n}/nfrom/n'./components/rating';
import/n{/nslider/n}/nfrom/n'./components/slider';
import/n{/nbutton/n}/nfrom/n'./components/button';
import/n{/nselect/n}/nfrom/n'./components/select';
import/n{/ndefaultProps/n}/nfrom/n'./default-props';
import/n{/nswitches/n}/nfrom/n'./components/switch';
import/n{/ntooltip/n}/nfrom/n'./components/tooltip';
import/n{/npopover/n}/nfrom/n'./components/popover';
import/n{/nstepper/n}/nfrom/n'./components/stepper';
import/n{/nsvgIcon/n}/nfrom/n'./components/svg-icon';
import/n{/nskeleton/n}/nfrom/n'./components/skeleton';
import/n{/nbackdrop/n}/nfrom/n'./components/backdrop';
import/n{/nprogress/n}/nfrom/n'./components/progress';
import/n{/ntimeline/n}/nfrom/n'./components/timeline';
import/n{/ncheckbox/n}/nfrom/n'./components/checkbox';
import/n{/ndataGrid/n}/nfrom/n'./components/data-grid';
import/n{/ntreeView/n}/nfrom/n'./components/tree-view';
import/n{/ntextField/n}/nfrom/n'./components/textfield';
import/n{/naccordion/n}/nfrom/n'./components/accordion';
import/n{/ntypography/n}/nfrom/n'./components/typography';
import/n{/npagination/n}/nfrom/n'./components/pagination';
import/n{/ndatePicker/n}/nfrom/n'./components/date-picker';
import/n{/nbreadcrumbs/n}/nfrom/n'./components/breadcrumbs';
import/n{/ncssBaseline/n}/nfrom/n'./components/css-baseline';
import/n{/nbuttonGroup/n}/nfrom/n'./components/button-group';
import/n{/nautocomplete/n}/nfrom/n'./components/autocomplete';
import/n{/ntoggleButton/n}/nfrom/n'./components/toggle-button';
import/n{/nloadingButton/n}/nfrom/n'./components/loading-button';

///n----------------------------------------------------------------------

export/nfunction/ncomponentsOverrides(theme)/n{
/n/nconst/ncomponents/n=/nmerge(
/n/n/n/ndefaultProps(theme),
/n/n/n/n//
/n/n/n/nfab(theme),
/n/n/n/ntabs(theme),
/n/n/n/nchip(theme),
/n/n/n/ncard(theme),
/n/n/n/nmenu(theme),
/n/n/n/nlist(theme),
/n/n/n/nbadge(theme),
/n/n/n/ntable(theme),
/n/n/n/npaper(theme),
/n/n/n/nalert(theme),
/n/n/n/nradio(theme),
/n/n/n/nselect(theme),
/n/n/n/nbutton(theme),
/n/n/n/nrating(theme),
/n/n/n/ndialog(theme),
/n/n/n/nappBar(theme),
/n/n/n/navatar(theme),
/n/n/n/nslider(theme),
/n/n/n/ndrawer(theme),
/n/n/n/nstepper(theme),
/n/n/n/ntooltip(theme),
/n/n/n/npopover(theme),
/n/n/n/nsvgIcon(theme),
/n/n/n/nswitches(theme),
/n/n/n/ncheckbox(theme),
/n/n/n/ndataGrid(theme),
/n/n/n/nskeleton(theme),
/n/n/n/ntimeline(theme),
/n/n/n/ntreeView(theme),
/n/n/n/nbackdrop(theme),
/n/n/n/nprogress(theme),
/n/n/n/ntextField(theme),
/n/n/n/naccordion(theme),
/n/n/n/ntypography(theme),
/n/n/n/npagination(theme),
/n/n/n/ndatePicker(theme),
/n/n/n/nbuttonGroup(theme),
/n/n/n/nbreadcrumbs(theme),
/n/n/n/ncssBaseline(theme),
/n/n/n/nautocomplete(theme),
/n/n/n/ntoggleButton(theme),
/n/n/n/nloadingButton(theme)
/n/n);

/n/nreturn/ncomponents;
}
