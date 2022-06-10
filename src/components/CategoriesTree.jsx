import React, {forwardRef} from 'react'
import TreeView from '@mui/lab/TreeView';
import TreeItem, {treeItemClasses} from '@mui/lab/TreeItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PropTypes from "prop-types";
import {Typography} from "@mui/material";
import {useTreeItem} from "@mui/lab";
import clsx from "clsx";
import {Flex} from "./Flex";
import styled from "@emotion/styled";
import {COLORS} from "../constants/colors";
import {withStopPropagation} from "../utils/withStopPropagation";
import {OverflowTooltip} from "./OverflowTooltip";

const Content = forwardRef(function Content(props, ref) {
  const {
    classes,
    className,
    label,
    nodeId,
    icon: iconProp,
    expansionIcon,
    displayIcon,
  } = props;

  const {
    disabled,
    expanded,
    selected,
    focused,
    handleExpansion,
    handleSelection,
  } = useTreeItem(nodeId);

  const icon = iconProp || expansionIcon || displayIcon;

  return (
    <Flex
      className={clsx(className, classes.root, {
        [classes.expanded]: expanded,
        [classes.selected]: selected,
        [classes.focused]: focused,
        [classes.disabled]: disabled,
      })}
      minHeight={40}
      onClick={() => handleSelection(nodeId)}
      ref={ref}
    >
      <div onClick={withStopPropagation(() => handleExpansion(nodeId))} className={classes.iconContainer}>
        {icon}
      </div>
      <Typography
        component="div"
        className={classes.label}
        sx={{ py: 1 }}
      >
        {label}
      </Typography>
    </Flex>
  );
});

const Count = styled.div`
  height: 24px;
  min-width: 24px;
  border-radius: 12px;
  margin-left: 8px;
  font-size: 12px;
  text-align: center;
  line-height: 24px;
  background: ${COLORS.gray.lighter};
`

const Label = ({ name, count }) => (
  <Flex justifyContent="space-between" alignItems="center">
    <OverflowTooltip text={name} />
    <Count>
      {count}
    </Count>
  </Flex>
)

const renderTreeItems = (categories, deep = 0) => (
  <>
    {categories?.map((category) => (
      <TreeItem
        key={category.id}
        ContentComponent={Content}
        nodeId={`${category.id}`}
        label={<Label count={category.childCount} name={category.name} />}
        sx={{
          [`& .${treeItemClasses.content}`]: {
              paddingLeft: `${17 * deep + 8}px`,
          }
        }}
      >
        {category.childCategories?.length > 0 ? renderTreeItems(category.childCategories, deep + 1) : null}
      </TreeItem>
    ))}
  </>
)
export const CategoriesTree = ({ categories, onChange, ...rest }) => {
  return (
    <TreeView
      defaultCollapseIcon={<ExpandMoreIcon/>}
      defaultExpandIcon={<ChevronRightIcon/>}
      onNodeSelect={onChange}
      {...rest}
    >
      {renderTreeItems(categories)}
    </TreeView>
  )
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  displayIcon: PropTypes.node,
  expansionIcon: PropTypes.node,
  icon: PropTypes.node,
  label: PropTypes.node,
  nodeId: PropTypes.string.isRequired,
};

CategoriesTree.propTypes = {
  categories: PropTypes.array,
  onChange: PropTypes.func,
  ...TreeView.propTypes,
}
